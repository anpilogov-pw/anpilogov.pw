<?php
/**
 * The header for our theme
 *
 * This is the template that displays the `head` element and everything up
 * until the `#content` element.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package anpilogov.pw
 */

?><!doctype html>
<html <?php language_attributes(); ?>>
<?php get_template_part( 'template-parts/layout/head', 'content' ); ?>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<div id="root">
	<?php get_template_part( 'template-parts/layout/header', 'content' ); ?>
	<div id="content">
