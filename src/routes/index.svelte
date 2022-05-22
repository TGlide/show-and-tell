<script lang="ts">
	import { browser } from '$app/env';
	import RandomShape from '$lib/components/RandomShape.svelte';
	import WavingText from '$lib/components/WavingText.svelte';
	import { range } from '$lib/utils/array';

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
		<section>
			<p>
				Demystifying <WavingText text="Animations" />
			</p>
			{#each range(0, 5) as i}
				<RandomShape />
			{/each}
			<RandomShape />
		</section>
		<section>Slide 2</section>
	</div>
</div>

<style>
	section:nth-child(1) {
		position: relative;
	}
</style>
