<?php
/**
 * Editor template for Tech-block
 * Этот файл используется только внутри редактора Gutenberg (lazyblocks).
 */

$tech_title      = $attributes['apw-tech-title'] ?? '';
$tech_images   = $attributes['apw-tech-images'] ?? [];
?>

<style>
    .apw-admin-tech-block {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		gap: 30px;
		padding: 40px;
		margin-bottom: 30px;
		border: 2px dashed #ccc;
		background: #fafafa;
		font-family: Arial, sans-serif;
	}

	.apw-admin-tech-block__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 30px;
		width: 100%;
	}

	.apw-admin-tech-block__title {
		font-size: 18px;
		font-weight: bold;
		margin: 0 0 15px;
		color: #222;
	}

	.apw-admin-tech-block__body {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 24px;
		width: 100%;
	}

	.apw-admin-tech-block__body .lazyblock-inner-blocks {
        display: grid;
        grid-template-columns: repeat(3, 64px) repeat(2, 1fr);
        grid-template-rows: repeat(2, 64px) repeat(3, 1fr);
        grid-column-gap: 24px;
        grid-row-gap: 24px;
		width: 100%;
	}

    .apw-admin-tech-block__body img {
        width: 64px;
        height: 64px;
        object-position: center;
        object-fit: cover;
    }
</style>

<div class="apw-admin-tech-block">
	<div class="apw-admin-tech-block__header">
		<span class="apw-admin-tech-block__title"><?= esc_html($tech_title) ?></span>
	</div>
	<div class="apw-admin-tech-block__body">
		<?php if (!empty($tech_images)) : ?>
            <?php foreach ($tech_images as $image) : ?>
                <?php 
                    $src = $image['url'];
                    $alt = $image['alt'] ?? '';
                    $link = $image['link'];
                ?>
                <img src="<?php echo esc_url($src); ?>" width="64" height="64" alt="<?php echo esc_attr($alt); ?>" />
            <?php endforeach; ?>
        <?php endif; ?>
	</div>
</div>