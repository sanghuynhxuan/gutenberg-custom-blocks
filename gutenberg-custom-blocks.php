<?php
/**
 * Plugin Name: Gutenberg Custom Blocks
 * Description: A ready-to-use client testimonial block.
 * Version: 1.0.0
 */
if (! defined('ABSPATH')) { exit; }
add_action('init', static function (): void {
    register_block_type(__DIR__ . '/build');
});
