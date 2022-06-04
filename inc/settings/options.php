<?php 
if( class_exists( 'CSF' ) ) {
    $prefix = 'mp_table';

    CSF::createOptions( $prefix, array(
        'menu_title' =>  __('Metal Prices', 'metalprices'),
        'menu_slug'    =>  'settings',
        'framework_title'   =>  __('Metal Prices Settings', 'metalprices')
    ) );

    CSF::createSection( $prefix, array(
        'title' =>  __('Header', 'metalprices'),
        'id'    =>  'header',
        'fields'    =>  array(
            array(
                'id'         => 'shortcode',
                'type'       => 'text',
                'title'      => 'Shortcode',
                'attributes' => array(
                  'readonly' => 'readonly'
                ),
                'default'    => '[mp-table] Use this shortcode where you want to display the table.'
            ),
            array(
                'id'          => 'theme-select',
                'type'        => 'select',
                'title'       => 'Background',
                'placeholder' => 'Select a color',
                'options'     => array(
                  'primary'     => 'Primary',
                  'secondary'     => 'Secondary',
                  'success'     => 'Success',
                  'info'     => 'Info',
                  'warning'     => 'Warning',
                  'danger'     => 'Danger',
                  'light'     => 'Light',
                  'dark'     => 'Dark',
                ),
            ),
            array(
                'id'          => 'title-color',
                'type'        => 'select',
                'title'       => 'Title Color',
                'placeholder' => 'Select a color',
                'options'     => array(
                  'primary'     => 'Primary',
                  'secondary'     => 'Secondary',
                  'success'     => 'Success',
                  'info'     => 'Info',
                  'warning'     => 'Warning',
                  'danger'     => 'Danger',
                  'light'     => 'Light',
                  'dark'     => 'Dark',
                ),
            ),
            array(
                'id'          => 'text-color',
                'type'        => 'select',
                'title'       => 'Text Color',
                'placeholder' => 'Select a color',
                'options'     => array(
                  'primary'     => 'Primary',
                  'secondary'     => 'Secondary',
                  'success'     => 'Success',
                  'info'     => 'Info',
                  'warning'     => 'Warning',
                  'danger'     => 'Danger',
                  'light'     => 'Light',
                  'dark'     => 'Dark',
                ),
            ),
            array(
                'id'       => 'min-height',
                'type'     => 'slider',
                'title'    => 'Table Minimum Height',
                'subtitle' => 'Min: 300 | Max: 1000 | Step: 300 | Default: 300',
                'unit'     => 'px',
                'min'      => 300,
                'max'      => 1000,
                'step'     => 1,
                'default'  => 300,
              ),
            
        )
              
    ));
}