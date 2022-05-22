<script lang="ts">
	import RandomShape from '$lib/components/RandomShape.svelte';
	import WavingText from '$lib/components/WavingText.svelte';
	import { range } from '$lib/utils/array';
	import anime from 'animejs';
	import { onMount } from 'svelte';

	onMount(async () => {
		const { default: Reveal } = await import('reveal.js');

		Reveal.initialize({ disableLayout: true });

		const randomSvgs = () => {
			anime({
				targets: '.shape-wrapper',
				delay: anime.stagger(10, { start: 1000 }),
				duration: 5000,
				direction: 'alternate',
				complete: randomSvgs,
				scale: [0, 1],
				opacity: [0, 1],
				translateX: () => anime.random(-1000, 1000),
				translateY: () => anime.random(-1000, 1000),
				rotate: () => anime.random(-360, 360)
			});
		};
		randomSvgs();
	});
</script>

<div class="reveal">
	<div class="slides">
		<section>
			<div class="shapes">
				{#each range(0, 50) as _}
					<div class="shape-wrapper">
						<RandomShape />
					</div>
				{/each}
			</div>
			<div class="wrapper">
				<p>
					Demystifying <WavingText text="Animations" />
				</p>
			</div>
		</section>
		<section>
			<div class="wrapper">Slide 2</div>
		</section>
	</div>
</div>

<style>
	section .wrapper {
		height: 100vh;

		display: grid;
		place-items: center;
	}

	section:nth-child(1) p {
		position: relative;
		z-index: 1;
	}

	section:nth-child(1) .shapes {
		opacity: 0.25;
	}

	section:nth-child(1) .shape-wrapper {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) scale(0);
	}
</style>
