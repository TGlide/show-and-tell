<!-- Code partially extracted from https://codepen.io/juliangarnier/pen/MZXQNV?editors=1100 -->
<script lang="ts">
	import { range } from '$lib/utils/array';
	import anime from 'animejs';
	import { onMount } from 'svelte';

	let grid = [10, 10];
	let cell = 39;
	let numberOfElements = grid[0] * grid[1];

	const onClickDot = (index: number) => {
		return () => {
			play(index);
		};
	};
	let play: (index: number) => void;

	onMount(() => {
		let animation: any;

		play = (index: number) => {
			if (animation) animation.pause();

			anime
				.timeline({
					easing: 'easeInOutQuad'
				})
				.add({
					targets: '.cursor',
					translateX: (index % grid[0]) * cell,
					translateY: Math.floor(index / grid[0]) * cell,
					translateZ: 0,
					scale: 1.5,
					duration: 100
				})
				.add({
					targets: '.cursor',
					keyframes: [
						{ scale: 0.75, duration: 120 },
						{ scale: 2.5, duration: 220 },
						{ scale: 1.5, duration: 450 },
						{ scale: 1, duration: 450 }
					],
					duration: 300
				})
				.add(
					{
						targets: '.dot',
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
	});
</script>

<div class="animation-wrapper">
	<div class="cursor color-red" />
	<div class="dots-wrapper" style:--cols={grid[0]}>
		{#each range(0, numberOfElements) as i}
			<div class="dot" on:click={onClickDot(i)} />
		{/each}
	</div>
</div>

<style>
	.animation-wrapper {
		position: relative;
	}

	.dots-wrapper {
		display: grid;
		grid-template-columns: repeat(var(--cols), 23px);
		gap: 16px;
	}

	.dot {
		position: relative;
		z-index: 1;
		width: 23px;
		height: 23px;
		background-color: currentColor;
		border-radius: 50%;
	}

	.dot:hover {
		cursor: pointer;
	}

	@media (min-width: 740px) {
		.dot {
			background-color: transparent;
			background-image: linear-gradient(0deg, #222f3e 8%, #576574 100%);
		}
	}

	.cursor {
		position: absolute;
		top: -16px;
		left: -16px;
		width: 36px;
		height: 36px;
		margin: 9px;
		background-color: currentColor;
		border-radius: 50%;
	}
</style>
