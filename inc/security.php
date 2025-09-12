<?php
/**
 * Security functions for Sacred Signal OS
 * 
 * @package Sacred_Signal_OS
 */

/**
 * Remove WordPress version from various places
 */
function sacred_signal_remove_version() {
    return '';
}
add_filter('the_generator', 'sacred_signal_remove_version');

/**
 * Hide WordPress version in scripts and styles
 */
function sacred_signal_remove_version_scripts_styles($src) {
    if (strpos($src, 'ver=' . get_bloginfo('version'))) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}
add_filter('script_loader_src', 'sacred_signal_remove_version_scripts_styles', 9999);
add_filter('style_loader_src', 'sacred_signal_remove_version_scripts_styles', 9999);

/**
 * Disable XML-RPC
 */
add_filter('xmlrpc_enabled', '__return_false');

/**
 * Remove XML-RPC pingback ping
 */
function sacred_signal_remove_xmlrpc_pingback_ping($methods) {
    unset($methods['pingback.ping']);
    return $methods;
}
add_filter('xmlrpc_methods', 'sacred_signal_remove_xmlrpc_pingback_ping');

/**
 * Disable file editing in admin
 */
define('DISALLOW_FILE_EDIT', true);

/**
 * Hide login errors
 */
function sacred_signal_hide_login_errors() {
    return __('Invalid login credentials. Please try again.', 'sacred-signal-os');
}
add_filter('login_errors', 'sacred_signal_hide_login_errors');

/**
 * Remove unnecessary header information
 */
function sacred_signal_remove_header_info() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
}
add_action('init', 'sacred_signal_remove_header_info');

/**
 * Secure wp-config.php
 */
function sacred_signal_secure_wp_config() {
    // Force SSL for admin
    if (!defined('FORCE_SSL_ADMIN')) {
        define('FORCE_SSL_ADMIN', true);
    }
    
    // Increase memory limit
    if (!defined('WP_MEMORY_LIMIT')) {
        define('WP_MEMORY_LIMIT', '256M');
    }
    
    // Set automatic updates
    if (!defined('WP_AUTO_UPDATE_CORE')) {
        define('WP_AUTO_UPDATE_CORE', true);
    }
}
add_action('init', 'sacred_signal_secure_wp_config');

/**
 * Add security headers
 */
function sacred_signal_add_security_headers() {
    if (!is_admin()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('X-XSS-Protection: 1; mode=block');
        header('Referrer-Policy: strict-origin-when-cross-origin');
        header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
        
        // Content Security Policy (adjust as needed)
        $csp = "default-src 'self'; ";
        $csp .= "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; ";
        $csp .= "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; ";
        $csp .= "font-src 'self' https://fonts.gstatic.com; ";
        $csp .= "img-src 'self' data: https:; ";
        $csp .= "connect-src 'self'; ";
        
        header("Content-Security-Policy: $csp");
    }
}
add_action('send_headers', 'sacred_signal_add_security_headers');

/**
 * Disable directory browsing
 */
function sacred_signal_disable_directory_browsing() {
    $htaccess_file = ABSPATH . '.htaccess';
    $rules = "\n# Disable directory browsing\nOptions -Indexes\n";
    
    if (file_exists($htaccess_file) && is_writable($htaccess_file)) {
        $current_rules = file_get_contents($htaccess_file);
        if (strpos($current_rules, 'Options -Indexes') === false) {
            file_put_contents($htaccess_file, $rules, FILE_APPEND | LOCK_EX);
        }
    }
}
add_action('wp_loaded', 'sacred_signal_disable_directory_browsing');

/**
 * Protect wp-config.php and .htaccess
 */
function sacred_signal_protect_sensitive_files() {
    $htaccess_file = ABSPATH . '.htaccess';
    $protection_rules = "
# Protect wp-config.php
<files wp-config.php>
order allow,deny
deny from all
</files>

# Protect .htaccess
<files .htaccess>
order allow,deny
deny from all
</files>

# Protect error_log files
<files error_log>
order allow,deny
deny from all
</files>

# Protect php.ini
<files php.ini>
order allow,deny
deny from all
</files>
";
    
    if (file_exists($htaccess_file) && is_writable($htaccess_file)) {
        $current_rules = file_get_contents($htaccess_file);
        if (strpos($current_rules, '# Protect wp-config.php') === false) {
            file_put_contents($htaccess_file, $protection_rules, FILE_APPEND | LOCK_EX);
        }
    }
}
add_action('wp_loaded', 'sacred_signal_protect_sensitive_files');

/**
 * Sanitize file uploads
 */
function sacred_signal_sanitize_file_uploads($file) {
    $file['name'] = sanitize_file_name($file['name']);
    
    // Check file extension
    $allowed_extensions = array('jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx');
    $file_extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    
    if (!in_array($file_extension, $allowed_extensions)) {
        $file['error'] = __('File type not allowed.', 'sacred-signal-os');
    }
    
    return $file;
}
add_filter('wp_handle_upload_prefilter', 'sacred_signal_sanitize_file_uploads');

/**
 * Limit login attempts (basic implementation)
 */
function sacred_signal_limit_login_attempts() {
    $ip = $_SERVER['REMOTE_ADDR'];
    $attempts_key = 'login_attempts_' . md5($ip);
    $lockout_key = 'login_lockout_' . md5($ip);
    
    // Check if IP is locked out
    if (get_transient($lockout_key)) {
        wp_die(__('Too many failed login attempts. Please try again later.', 'sacred-signal-os'));
    }
    
    // Handle failed login
    if (isset($_POST['log']) && isset($_POST['pwd'])) {
        $user = wp_authenticate($_POST['log'], $_POST['pwd']);
        
        if (is_wp_error($user)) {
            $attempts = get_transient($attempts_key) ?: 0;
            $attempts++;
            
            if ($attempts >= 5) {
                set_transient($lockout_key, true, 30 * MINUTE_IN_SECONDS); // 30 minute lockout
                delete_transient($attempts_key);
            } else {
                set_transient($attempts_key, $attempts, 15 * MINUTE_IN_SECONDS);
            }
        } else {
            // Successful login, clear attempts
            delete_transient($attempts_key);
        }
    }
}
add_action('wp_login_failed', 'sacred_signal_limit_login_attempts');

/**
 * Remove unnecessary admin menu items for non-admin users
 */
function sacred_signal_remove_admin_menu_items() {
    if (!current_user_can('administrator')) {
        remove_menu_page('tools.php');
        remove_menu_page('link-manager.php');
        remove_submenu_page('themes.php', 'theme-editor.php');
        remove_submenu_page('plugins.php', 'plugin-editor.php');
    }
}
add_action('admin_menu', 'sacred_signal_remove_admin_menu_items', 999);

/**
 * Add custom login page styling for security
 */
function sacred_signal_custom_login_styles() {
    echo '<style type="text/css">
        .login h1 a {
            background-image: url(' . get_template_directory_uri() . '/assets/images/sacred-geometry-icon.png);
            background-size: contain;
            width: 80px;
            height: 80px;
        }
        .login form {
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .login #nav, .login #backtoblog {
            text-align: center;
        }
    </style>';
}
add_action('login_enqueue_scripts', 'sacred_signal_custom_login_styles');

/**
 * Change login logo URL
 */
function sacred_signal_login_logo_url() {
    return home_url();
}
add_filter('login_headerurl', 'sacred_signal_login_logo_url');

/**
 * Change login logo title
 */
function sacred_signal_login_logo_url_title() {
    return get_bloginfo('name');
}
add_filter('login_headertitle', 'sacred_signal_login_logo_url_title');