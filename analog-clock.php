<?php
/**
 * Plugin Name: Analog Clock
 * Description: Analog Clock which shows current local time.
 * version: 1.0
 * Author: <a href = "https://syedabdulrehman.com">Syed Abdul ehman</a>
 */

    require_once 'inc/functions.php';

    function dn_ac_admin_scripts(){
        wp_enqueue_style('dn-ac-admin', plugin_dir_url(__FILE__) . 'admin/assets/css/dn-ac-admin.css');
        wp_enqueue_script('dn-ac-admin', plugin_dir_url(__FILE__) . 'admin/assets/js/dn-ac-admin.js', array('jquery'));
    }    
    add_action('admin_enqueue_scripts', 'dn_ac_admin_scripts');

    function dn_ac_scripts(){
        wp_enqueue_style('dn-ac-main', plugin_dir_url(__FILE__) . 'assets/css/dn-ac-main.css');
        wp_enqueue_script('dn-ac-main', plugin_dir_url(__FILE__) . 'assets/js/dn-ac-main.js', array('jquery'));
    }
    add_action('wp_enqueue_scripts', 'dn_ac_scripts');    

    //--------------------------------------------------------------------------------------

    function ac_admin_menu() {
        add_menu_page(
            'Analog Clock',
            'Analog Clock',
            'administrator',
            plugin_dir_path(__FILE__). 'admin/analog-clock.php'  ,
            null,
            null,
            20
        
        );
    }

    add_action( 'admin_menu', 'ac_admin_menu' );

    ?>