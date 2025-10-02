<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default. Please note that
 * this is the WordPress construct of pages: specifically, posts with a post
 * type of `page`.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package anpilogov.pw
 */

get_header();
?>

<main class="container">
<?php
if (have_posts()):
    while (have_posts()):
        the_post();
        the_content();
    endwhile;
endif;
?>    
</main>

<?php get_footer(); ?>
