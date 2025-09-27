<?php
/**
 * Editor template for Section-block
 * Этот файл используется только внутри редактора Gutenberg (lazyblocks).
 */

$section_title      = $attributes['apw-section-title'] ?? '';
$use_arrows   = $attributes['apw-use-arrows'] ?? false;
?>

<style>
    .apw-admin-section-block {
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

	.apw-admin-section-block__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 30px;
		width: 100%;
	}

	.apw-admin-section-block__title {
		font-size: 28px;
		font-weight: bold;
		margin: 0 0 15px;
		color: #222;
	}

	.apw-admin-section-block__body {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 24px;
		width: 100%;
	}

	.apw-admin-section-block__body .lazyblock-inner-blocks {
		width: 100%;
	}
</style>

<div class="apw-admin-section-block">
	<div class="apw-admin-section-block__header">
		<span class="apw-admin-section-block__title"><?= esc_html($section_title) ?></span>
		<?php if ($use_arrows) : ?>
            <span>Стрелки: Вкл.</span>
        <?php else : ?>
            <span>Стрелки: Выкл.</span>
        <?php endif; ?>
	</div>
	<div class="apw-admin-section-block__body">
		 <InnerBlocks />
	</div>
</div>