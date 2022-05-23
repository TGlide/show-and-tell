<!-- Code partially extracted from https://codepen.io/juliangarnier/pen/MZXQNV?editors=1100 -->
<script lang="ts">
	import { range } from '$lib/utils/array';
	import anime from 'animejs';
	import { onMount } from 'svelte';

	let grid = [20, 10];
	let cell = 55;
	let numberOfElements = grid[0] * grid[1];

	let play: (index: number) => void;

	onMount(() => {
		function fitElementToParent(el: HTMLElement | null, padding?: number) {
			let timeout: NodeJS.Timeout | null = null;

			function resize() {
				if (timeout) clearTimeout(timeout);
				anime.set(el, { scale: 1 });
				var pad = padding || 0;
				var parentEl = el?.parentNode;
				var elOffsetWidth = (el?.offsetWidth || 0) - pad;
				var parentOffsetWidth = (parentEl as any)?.offsetWidth;
				var ratio = parentOffsetWidth / elOffsetWidth;
				timeout = setTimeout(() => anime.set(el, { scale: ratio }), 10);
			}
			resize();
			window.addEventListener('resize', resize);
		}

		var staggerVisualizerEl = document.querySelector('.stagger-visualizer');
		let animation: any;

		play = (index: number) => {
			if (animation) animation.pause();

			anime
				.timeline({
					easing: 'easeInOutQuad'
				})
				.add({
					targets: '.stagger-visualizer .cursor',
					translateX: anime.stagger(-cell, { grid: grid, from: index, axis: 'x' }),
					translateY: anime.stagger(-cell, { grid: grid, from: index, axis: 'y' }),
					translateZ: 0,
					scale: 1.5,
					duration: 100
				})
				.add({
					targets: '.stagger-visualizer .cursor',
					keyframes: [
						{ scale: 0.75, duration: 120 },
						{ scale: 2.5, duration: 220 },
						{ scale: 1.5, duration: 450 }
					],
					duration: 300
				})
				.add(
					{
						targets: '.stagger-visualizer .dot',
						keyframes: [
							{
								translateX: anime.stagger('-2px', { grid: grid, from: index, axis: 'x' }),
								translateY: anime.stagger('-2px', { grid: grid, from: index, axis: 'y' }),
								duration: 100
							},
							{
								translateX: anime.stagger('4px', { grid: grid, from: index, axis: 'x' }),
								translateY: anime.stagger('4px', { grid: grid, from: index, axis: 'y' }),
								scale: anime.stagger([2.6, 1], { grid: grid, from: index }),
								duration: 225
							},
							{
								translateX: 0,
								translateY: 0,
								scale: 1,
								duration: 1200
							}
						],
						delay: anime.stagger(80, { grid: grid, from: index })
					},
					30
				);
		};

		let index = 0;

		anime.set('.stagger-visualizer .cursor', {
			translateX: anime.stagger(-cell, { grid: grid, from: index, axis: 'x' }),
			translateY: anime.stagger(-cell, { grid: grid, from: index, axis: 'y' }),
			translateZ: 0,
			scale: 1.5
		});

		fitElementToParent(staggerVisualizerEl as HTMLElement, 0);
	});
</script>

<div class="animation-wrapper">
	<div class="stagger-visualizer">
		<div class="cursor color-red" />
		<div class="dots-wrapper">
			{#each range(0, numberOfElements) as i}
				<div class="dot" on:click={() => play(i)} />
			{/each}
		</div>
	</div>
</div>

<style>
	.animation-wrapper {
		width: 80%;
		padding-bottom: 40%;
	}

	.stagger-visualizer {
		position: absolute;
		width: 1100px;
		height: 550px;
		transform-origin: left top;
	}

	.stagger-visualizer .dots-wrapper {
		transform: translateZ(0);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.stagger-visualizer .dot {
		position: relative;
		z-index: 1;
		width: 23px;
		height: 23px;
		margin: 16px;
		background-color: currentColor;
		border-radius: 50%;
	}

	.stagger-visualizer .dot:hover {
		cursor: pointer;
	}

	@media (min-width: 740px) {
		.stagger-visualizer .dot {
			background-color: transparent;
			background-image: linear-gradient(0deg, #222f3e 8%, #576574 100%);
		}
	}

	.stagger-visualizer .cursor {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 37px;
		height: 37px;
		margin: 9px;
		background-color: currentColor;
		border-radius: 50%;
	}
</style>
