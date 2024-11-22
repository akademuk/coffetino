<?php
/**
 * Block Automatic Slider template.
 *
 * @param array     $block       The full block settings and attributes.
 * @param string    $content     The block content.
 * @param bool      $is_preview  Whether the block is in preview mode.
 * @param int       $post_id     The ID of the current post.
 * @param WP_Block  $wp_block    The parsed block object.
 * @param array     $context     The context within which the block is being rendered.
 * @param string    $path        The path to the block's template file.
 * @param array     $data        Additional data passed to the block template.
 * @package Caffetino
 */

use Caffetino\Gutenberg_Blocks\Blocks\Block_Automatic_Slider\Block_Automatic_Slider;

$block_controller = new Block_Automatic_Slider( get_defined_vars() );

if ( ! $block_controller->maybee_show_preview() ) { ?>

<div <?php $block_controller->the_attributes( array( 'class' => 'automatic-slider' ) ); ?> >
	<?php $block_controller->the_slider(); ?>
</div>

<?php } ?>
