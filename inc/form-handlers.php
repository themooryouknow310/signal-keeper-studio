<?php
/**
 * Form handling functions for Sacred Signal OS
 * 
 * @package Sacred_Signal_OS
 */

/**
 * Handle application form submission
 */
function sacred_signal_handle_application_form() {
    if (!isset($_POST['application_nonce']) || !wp_verify_nonce($_POST['application_nonce'], 'application_form')) {
        wp_die(__('Security check failed.', 'sacred-signal-os'));
    }
    
    // Sanitize form data
    $form_data = array(
        'first_name' => sanitize_text_field($_POST['first_name']),
        'last_name' => sanitize_text_field($_POST['last_name']),
        'email' => sanitize_email($_POST['email']),
        'phone' => sanitize_text_field($_POST['phone']),
        'business_name' => sanitize_text_field($_POST['business_name']),
        'website' => esc_url_raw($_POST['website']),
        'business_stage' => sanitize_text_field($_POST['business_stage']),
        'current_challenge' => sanitize_textarea_field($_POST['current_challenge']),
        'goals' => sanitize_textarea_field($_POST['goals']),
        'investment_ready' => sanitize_text_field($_POST['investment_ready']),
        'hear_about_us' => sanitize_text_field($_POST['hear_about_us'])
    );
    
    // Validate required fields
    $required_fields = array('first_name', 'last_name', 'email', 'current_challenge', 'goals');
    foreach ($required_fields as $field) {
        if (empty($form_data[$field])) {
            wp_redirect(add_query_arg('error', 'missing_fields', wp_get_referer()));
            exit;
        }
    }
    
    // Create application post
    $application_id = wp_insert_post(array(
        'post_type' => 'application',
        'post_title' => $form_data['first_name'] . ' ' . $form_data['last_name'] . ' - Application',
        'post_status' => 'private',
        'post_content' => serialize($form_data)
    ));
    
    if ($application_id) {
        // Save individual meta fields
        foreach ($form_data as $key => $value) {
            update_post_meta($application_id, '_' . $key, $value);
        }
        
        // Send notification emails
        sacred_signal_send_application_notifications($form_data, $application_id);
        
        // Redirect to thank you page
        wp_redirect(home_url('/thank-you/?type=application'));
        exit;
    } else {
        wp_redirect(add_query_arg('error', 'submission_failed', wp_get_referer()));
        exit;
    }
}
add_action('wp_ajax_submit_application', 'sacred_signal_handle_application_form');
add_action('wp_ajax_nopriv_submit_application', 'sacred_signal_handle_application_form');

/**
 * Handle contact form submission
 */
function sacred_signal_handle_contact_form() {
    if (!isset($_POST['contact_nonce']) || !wp_verify_nonce($_POST['contact_nonce'], 'contact_form')) {
        wp_die(__('Security check failed.', 'sacred-signal-os'));
    }
    
    $form_data = array(
        'name' => sanitize_text_field($_POST['name']),
        'email' => sanitize_email($_POST['email']),
        'subject' => sanitize_text_field($_POST['subject']),
        'message' => sanitize_textarea_field($_POST['message'])
    );
    
    // Validate required fields
    if (empty($form_data['name']) || empty($form_data['email']) || empty($form_data['message'])) {
        wp_redirect(add_query_arg('error', 'missing_fields', wp_get_referer()));
        exit;
    }
    
    // Send email
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission: ' . $form_data['subject'];
    $message = "Name: {$form_data['name']}\n";
    $message .= "Email: {$form_data['email']}\n";
    $message .= "Subject: {$form_data['subject']}\n\n";
    $message .= "Message:\n{$form_data['message']}";
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>',
        'Reply-To: ' . $form_data['name'] . ' <' . $form_data['email'] . '>'
    );
    
    if (wp_mail($to, $subject, $message, $headers)) {
        wp_redirect(add_query_arg('success', 'message_sent', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('error', 'send_failed', wp_get_referer()));
    }
    exit;
}
add_action('wp_ajax_submit_contact', 'sacred_signal_handle_contact_form');
add_action('wp_ajax_nopriv_submit_contact', 'sacred_signal_handle_contact_form');

/**
 * Handle newsletter signup
 */
function sacred_signal_handle_newsletter_signup() {
    if (!isset($_POST['newsletter_nonce']) || !wp_verify_nonce($_POST['newsletter_nonce'], 'newsletter_signup')) {
        wp_die(__('Security check failed.', 'sacred-signal-os'));
    }
    
    $email = sanitize_email($_POST['email']);
    $name = sanitize_text_field($_POST['name'] ?? '');
    
    if (!is_email($email)) {
        wp_redirect(add_query_arg('error', 'invalid_email', wp_get_referer()));
        exit;
    }
    
    // Check if email already exists
    $existing_subscriber = get_posts(array(
        'post_type' => 'subscriber',
        'meta_key' => '_email',
        'meta_value' => $email,
        'post_status' => 'any'
    ));
    
    if (!empty($existing_subscriber)) {
        wp_redirect(add_query_arg('error', 'already_subscribed', wp_get_referer()));
        exit;
    }
    
    // Create subscriber
    $subscriber_id = wp_insert_post(array(
        'post_type' => 'subscriber',
        'post_title' => $name ? $name : $email,
        'post_status' => 'publish'
    ));
    
    if ($subscriber_id) {
        update_post_meta($subscriber_id, '_email', $email);
        update_post_meta($subscriber_id, '_name', $name);
        update_post_meta($subscriber_id, '_subscribed_date', current_time('mysql'));
        
        // Send welcome email
        sacred_signal_send_welcome_email($email, $name);
        
        wp_redirect(add_query_arg('success', 'subscribed', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('error', 'subscription_failed', wp_get_referer()));
    }
    exit;
}
add_action('wp_ajax_newsletter_signup', 'sacred_signal_handle_newsletter_signup');
add_action('wp_ajax_nopriv_newsletter_signup', 'sacred_signal_handle_newsletter_signup');

/**
 * Send application notification emails
 */
function sacred_signal_send_application_notifications($form_data, $application_id) {
    // Email to admin
    $admin_subject = 'New Sacred Signal OS Application';
    $admin_message = "A new application has been submitted:\n\n";
    $admin_message .= "Name: {$form_data['first_name']} {$form_data['last_name']}\n";
    $admin_message .= "Email: {$form_data['email']}\n";
    $admin_message .= "Phone: {$form_data['phone']}\n";
    $admin_message .= "Business: {$form_data['business_name']}\n";
    $admin_message .= "Website: {$form_data['website']}\n";
    $admin_message .= "Stage: {$form_data['business_stage']}\n";
    $admin_message .= "Investment Ready: {$form_data['investment_ready']}\n\n";
    $admin_message .= "Current Challenge:\n{$form_data['current_challenge']}\n\n";
    $admin_message .= "Goals:\n{$form_data['goals']}\n\n";
    $admin_message .= "How they heard about us: {$form_data['hear_about_us']}\n\n";
    $admin_message .= "View application: " . admin_url("post.php?post={$application_id}&action=edit");
    
    wp_mail(get_option('admin_email'), $admin_subject, $admin_message);
    
    // Confirmation email to applicant
    $user_subject = 'Thank you for your Sacred Signal OS application';
    $user_message = "Dear {$form_data['first_name']},\n\n";
    $user_message .= "Thank you for your interest in Sacred Signal OS. We've received your application and will review it carefully.\n\n";
    $user_message .= "We typically respond within 24-48 hours with next steps.\n\n";
    $user_message .= "In the meantime, feel free to explore our blog and resources.\n\n";
    $user_message .= "Best regards,\n";
    $user_message .= "The Sacred Signal OS Team\n\n";
    $user_message .= home_url();
    
    wp_mail($form_data['email'], $user_subject, $user_message);
}

/**
 * Send welcome email for newsletter subscribers
 */
function sacred_signal_send_welcome_email($email, $name) {
    $subject = 'Welcome to Sacred Signal OS';
    $message = "Welcome" . ($name ? " {$name}" : "") . "!\n\n";
    $message .= "Thank you for subscribing to Sacred Signal OS updates.\n\n";
    $message .= "You'll receive:\n";
    $message .= "• Strategic insights for spiritual entrepreneurs\n";
    $message .= "• Exclusive content and resources\n";
    $message .= "• Early access to new programs\n";
    $message .= "• Practical tools for business growth\n\n";
    $message .= "Visit our website: " . home_url() . "\n\n";
    $message .= "Best regards,\n";
    $message .= "Barack El\n";
    $message .= "Sacred Signal OS";
    
    wp_mail($email, $subject, $message);
}

/**
 * Register subscriber post type
 */
function sacred_signal_register_subscriber_post_type() {
    register_post_type('subscriber', array(
        'labels' => array(
            'name' => 'Subscribers',
            'singular_name' => 'Subscriber',
            'menu_name' => 'Newsletter'
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 25,
        'menu_icon' => 'dashicons-email-alt',
        'supports' => array('title', 'custom-fields'),
        'capability_type' => 'post'
    ));
}
add_action('init', 'sacred_signal_register_subscriber_post_type');

/**
 * Register application post type
 */
function sacred_signal_register_application_post_type() {
    register_post_type('application', array(
        'labels' => array(
            'name' => 'Applications',
            'singular_name' => 'Application',
            'menu_name' => 'Applications'
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 24,
        'menu_icon' => 'dashicons-forms',
        'supports' => array('title', 'editor', 'custom-fields'),
        'capability_type' => 'post'
    ));
}
add_action('init', 'sacred_signal_register_application_post_type');

/**
 * Display form messages
 */
function sacred_signal_display_form_messages() {
    if (isset($_GET['success'])) {
        switch ($_GET['success']) {
            case 'message_sent':
                echo '<div class="form-message success">Your message has been sent successfully. We\'ll get back to you soon!</div>';
                break;
            case 'subscribed':
                echo '<div class="form-message success">Thank you for subscribing! Check your email for a welcome message.</div>';
                break;
        }
    }
    
    if (isset($_GET['error'])) {
        switch ($_GET['error']) {
            case 'missing_fields':
                echo '<div class="form-message error">Please fill in all required fields.</div>';
                break;
            case 'invalid_email':
                echo '<div class="form-message error">Please enter a valid email address.</div>';
                break;
            case 'already_subscribed':
                echo '<div class="form-message info">This email is already subscribed to our newsletter.</div>';
                break;
            case 'submission_failed':
                echo '<div class="form-message error">There was an error submitting your form. Please try again.</div>';
                break;
            case 'send_failed':
                echo '<div class="form-message error">There was an error sending your message. Please try again.</div>';
                break;
        }
    }
}
add_action('wp_head', 'sacred_signal_display_form_messages');