<script lang="ts">
	import RandomShape from '$lib/components/RandomShape.svelte';
	import WavingText from '$lib/components/WavingText.svelte';
	import { range } from '$lib/utils/array';
	import anime from 'animejs';
	import { onMount } from 'svelte';

	const translateRange = 2000;

	onMount(() => {
		const randomSvgs = () => {
			anime({
				targets: '.shape-wrapper',
				delay: anime.stagger(50, { start: 1000 }),
				duration: 5000,
				direction: 'alternate',
				complete: randomSvgs,
				scale: [0, 1],
				translateX: () => anime.random(-translateRange, translateRange),
				translateY: () => anime.random(-translateRange, translateRange),
				rotate: () => anime.random(-360, 360)
			});
		};
		randomSvgs();
	});
</script>

<section>
	<div class="shapes">
		{#each range(0, 200) as _}
			<div class="shape-wrapper">
				<RandomShape />
			</div>
		{/each}
	</div>

	<div class="section-wrapper center">
		<p>
			Demystifying <WavingText text="Animations" />
		</p>
	</div>
	<aside class="notes">Private notes</aside>
</section>

<style>
	section p {
		position: relative;
		z-index: 1;
	}

	section .shapes {
		opacity: 0.25;
	}

	section .shape-wrapper {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) scale(0);
	}
</style>
