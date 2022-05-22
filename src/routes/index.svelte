<script lang="ts">
	import { browser } from '$app/env';
	import FlippingText from '$lib/components/FlippingText.svelte';

	const init = async () => {
		if (browser) {
			const { default: Reveal } = await import('reveal.js');

			Reveal.initialize();
		}
	};

	init();
</script>

<div class="reveal">
	<div class="slides">
		<section>Demystifying <FlippingText text="animations" /></section>
		<section>Slide 2</section>
	</div>
</div>
