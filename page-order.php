<?php
/**
 * Template for Order/Checkout page
 * 
 * @package Sacred_Signal_OS
 */

get_header(); ?>

<main id="primary" class="site-main">
    <div class="order-page py-20">
        
        <!-- Hero Section -->
        <section class="hero-section py-16 bg-gradient-to-br from-background to-muted">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-3xl mx-auto">
                    <h1 class="heading-ritual text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        <?php echo get_field('order_title') ?: 'Complete Your Order'; ?>
                    </h1>
                    <p class="body-premium text-lg text-muted-foreground">
                        <?php echo get_field('order_subtitle') ?: 'You\'re one step away from transforming your business with Sacred Signal OS.'; ?>
                    </p>
                </div>
            </div>
        </section>

        <section class="py-16">
            <div class="container mx-auto px-6">
                <div class="max-w-4xl mx-auto">
                    <div class="grid lg:grid-cols-2 gap-12">
                        
                        <!-- Order Summary -->
                        <div class="order-summary">
                            <div class="card p-8">
                                <h2 class="heading-ritual text-2xl font-bold mb-6 text-foreground">Order Summary</h2>
                                
                                <div class="space-y-6">
                                    <div class="flex justify-between items-start pb-4 border-b border-border">
                                        <div>
                                            <h3 class="font-semibold text-foreground mb-2">
                                                <?php echo get_field('program_name') ?: 'Sacred Signal OS - Complete System'; ?>
                                            </h3>
                                            <p class="text-sm text-muted-foreground">
                                                <?php echo get_field('program_description') ?: 'Transform your message into a clear, repeatable signal that clients remember and trust.'; ?>
                                            </p>
                                        </div>
                                        <div class="text-right">
                                            <div class="text-2xl font-bold text-foreground">
                                                <?php echo get_field('program_price') ?: '$2,997'; ?>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Bonuses -->
                                    <?php if (have_rows('order_bonuses')): ?>
                                        <?php while (have_rows('order_bonuses')): the_row(); ?>
                                            <div class="flex justify-between items-center py-2">
                                                <span class="text-signal font-medium">+ <?php echo get_sub_field('bonus_name'); ?></span>
                                                <span class="text-muted-foreground line-through">
                                                    <?php echo get_sub_field('bonus_value'); ?>
                                                </span>
                                            </div>
                                        <?php endwhile; ?>
                                    <?php endif; ?>
                                    
                                    <div class="pt-4 border-t border-border">
                                        <div class="flex justify-between items-center">
                                            <span class="text-lg font-semibold text-foreground">Total Investment:</span>
                                            <span class="text-3xl font-bold text-signal">
                                                <?php echo get_field('total_price') ?: '$2,997'; ?>
                                            </span>
                                        </div>
                                        <?php if (get_field('payment_plan_available')): ?>
                                            <p class="text-sm text-muted-foreground mt-2">
                                                Or 3 payments of <?php echo get_field('payment_plan_amount') ?: '$999'; ?>
                                            </p>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                
                                <!-- Security Badges -->
                                <div class="mt-8 pt-6 border-t border-border">
                                    <div class="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                                        <span class="flex items-center space-x-2">
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                                            </svg>
                                            <span>Secure Checkout</span>
                                        </span>
                                        <span>•</span>
                                        <span>30-Day Guarantee</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Checkout Form -->
                        <div class="checkout-form">
                            <div class="card p-8">
                                <h2 class="heading-ritual text-2xl font-bold mb-6 text-foreground">Billing Information</h2>
                                
                                <form id="checkout-form" class="space-y-6">
                                    <?php wp_nonce_field('checkout_form', 'checkout_nonce'); ?>
                                    
                                    <div class="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="form-label" for="first_name">First Name *</label>
                                            <input type="text" id="first_name" name="first_name" class="form-input" required>
                                        </div>
                                        <div>
                                            <label class="form-label" for="last_name">Last Name *</label>
                                            <input type="text" id="last_name" name="last_name" class="form-input" required>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="form-label" for="email">Email Address *</label>
                                        <input type="email" id="email" name="email" class="form-input" required>
                                    </div>
                                    
                                    <div>
                                        <label class="form-label" for="phone">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" class="form-input">
                                    </div>
                                    
                                    <div>
                                        <label class="form-label" for="company">Company/Business Name</label>
                                        <input type="text" id="company" name="company" class="form-input">
                                    </div>
                                    
                                    <!-- Payment Method -->
                                    <div class="pt-6 border-t border-border">
                                        <h3 class="font-semibold text-foreground mb-4">Payment Method</h3>
                                        <div class="space-y-3">
                                            <label class="flex items-center space-x-3 cursor-pointer">
                                                <input type="radio" name="payment_method" value="full" class="text-signal" checked>
                                                <span>Full Payment - <?php echo get_field('total_price') ?: '$2,997'; ?></span>
                                            </label>
                                            <?php if (get_field('payment_plan_available')): ?>
                                                <label class="flex items-center space-x-3 cursor-pointer">
                                                    <input type="radio" name="payment_method" value="plan" class="text-signal">
                                                    <span>Payment Plan - 3 x <?php echo get_field('payment_plan_amount') ?: '$999'; ?></span>
                                                </label>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                    
                                    <!-- Payment Integration Placeholder -->
                                    <div id="payment-element" class="pt-4">
                                        <!-- Stripe/PayPal payment element would be inserted here -->
                                        <div class="bg-muted/50 border border-border rounded p-4 text-center text-muted-foreground">
                                            Payment processing integration to be implemented
                                        </div>
                                    </div>
                                    
                                    <div class="pt-6">
                                        <button type="submit" class="btn-signal w-full py-4 text-lg font-semibold">
                                            Complete Order
                                        </button>
                                    </div>
                                    
                                    <p class="text-xs text-muted-foreground text-center">
                                        By completing this purchase, you agree to our 
                                        <a href="#" class="text-signal hover:underline">Terms of Service</a> and 
                                        <a href="#" class="text-signal hover:underline">Privacy Policy</a>.
                                    </p>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

    </div>
</main>

<?php get_footer(); ?>