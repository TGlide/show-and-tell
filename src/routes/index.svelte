<script lang="ts">
	import RandomShape from '$lib/components/RandomShape.svelte';
	import WavingText from '$lib/components/WavingText.svelte';
	import { range } from '$lib/utils/array';
	import anime from 'animejs';
	import { onMount } from 'svelte';

	onMount(async () => {
		const { default: Reveal } = await import('reveal.js');

		Reveal.initialize();

		anime({
			targets: '.shape-wrapper',
			scale: [0, 1],
			translateX: () => anime.random(-200, 200),
			translateY: () => anime.random(-200, 200),
			rotate: () => anime.random(-360, 360)
		});
	});
</script>

<div class="reveal">
	<div class="slides">
		<section>
			<p>
				Demystifying <WavingText text="Animations" />
			</p>
			<div class="shapes">
				{#each range(0, 10) as _}
					<div class="shape-wrapper">
						<RandomShape />
					</div>
				{/each}
			</div>
		</section>
		<section>Slide 2</section>
	</div>
</div>

<style>
	section:nth-child(1) {
		position: relative;
	}

	section:nth-child(1) p {
		position: relative;
		z-index: 1;
	}

	section:nth-child(1) .shapes {
		opacity: 0.5;
	}

	section:nth-child(1) .shape-wrapper {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: scale(0);
	}
</style>
