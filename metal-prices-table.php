<?php
/*
Plugin Name: Metal Prices
Plugin URI: https://github.com/subas-roy/metal-prices/
Description: Plugin to display international prices for gold, silver, platinum and palladium.
Version: 1.0.0
Author: Subas Roy
Author URI: https://github.com/subas-roy/
License: GPLv2 or later
Text Domain: metalprices
*/

defined( 'ABSPATH' ) or die( 'Hey, what are you doing? You silly human!.' );

class Price {

    public $pluginName;

    public function __construct() {
        $this->pluginName = plugin_basename(__FILE__);
    }

    public function register() {
        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ) );
        add_filter("plugin_action_links_$this->pluginName", array($this, 'settings_link'));
        require_once plugin_dir_path( __FILE__ ).'inc/settings/codestar-framework.php';    
        require_once plugin_dir_path( __FILE__ ).'inc/settings/options.php';    
    }

    public function settings_link( $links ) {
        $settings_link = '<a href="admin.php?page=settings">Settings</a>';
        array_push( $links, $settings_link );
        return $links;
    }

    public function enqueue() {
        // enqueue all our scripts
        wp_enqueue_style( 'mp-bootstrap-min', plugins_url('/css/bootstrap.min.css', __FILE__ ) );
        wp_enqueue_style( 'mp-style', plugins_url('/css/style.css', __FILE__ ) );
        wp_enqueue_script( 'mp-bootstrap-bundle', plugins_url('/scripts/bundle.bootstrap.min.js', __FILE__ ), array('jquery'), '', true );
        wp_enqueue_script( 'mp-main-js', plugins_url('/scripts/scripts.js', __FILE__ ), array('mp-bootstrap-bundle'), '', true );
    }

    public function prices_shortcode() {
        add_shortcode( 'mp-table', array( $this, 'metal_prices_table' ) );
    }

    public function metal_prices_table() {
        ob_start(); ?>
            <?php $options = get_option('mp_table'); ?>
            <div class="bg-<?php echo $options['theme-select']; ?>">
                <!-- <div class="container mt-3" id="gold-updates"> -->
                    <div class="row">
                        <!-- <h1 style="font-size:60px; font-weight:bold" class="text-white">Precious Metal Prices</h1>
                        <p style="font-size:30px;" class="mb-5 text-white">International prices for gold, silver, platinum and palladium.</p> -->
                        <div class="mb-2">
                            <select class="form-select form-select-sm metalDropdown" aria-label=".form-select-sm example">
                                <option value="gold">Gold</option>
                                <option value="silver">Silver</option>
                                <option value="gofo/libor">GOFO/LIBOR</option>
                                <option value="platinum">Platinum</option>
                                <option value="palladium">Palladium</option>
                            </select>
                            <select class="form-select form-select-sm yrDropdown" aria-label=".form-select-sm example">
                                <?php
                                for( $i = date("Y"); $i > 1967; $i-- ){
                                    $year = $i;
                                    echo "<option value='$year'>$year</option>";
                                } ?>
                            </select>
                        </div>
                        <div class="col-sm-12 pb-5">
                            <p class="wait text-<?php echo $options['text-color']; ?>">Please wait...</p>
                            <p class="nodata text-<?php echo $options['text-color']; ?>">No data found for this year</p>
                            <h3 id="metal" class="text-start p-2 text-<?php echo $options['title-color']; ?> pb-2 mt-2"></h3>
                            <div style="height:<?php echo $options['min-height'].'px'; ?>" class="tblScroll" id="getTbl">
                                <table class="table table-<?php echo $options['theme-select']; ?> table-striped text-center text-<?php echo $options['text-color']; ?>">
                                    <thead id="thead1"></thead>
                                    <thead id="thead2"></thead>
                                    <tbody id="tbody"></tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                <!-- </div> -->
            </div>
        <?php return ob_get_clean();   
    }
}

if( class_exists('Price')) {
    $metalPrices = new Price();
    $metalPrices->prices_shortcode();
    $metalPrices->register();
}




