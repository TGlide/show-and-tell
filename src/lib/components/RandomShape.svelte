<script lang="ts">
	import { randomPick } from '$lib/utils/array';
	import { cva } from 'class-variance-authority';

	enum Shape {
		CIRCLE = 'circle',
		SQUARE = 'square'
	}

	function getRandomGradient() {
		const gradients = [
			'linear-gradient(to right,#3147bf,#33a2e9)',
			'linear-gradient(to right,#7820d0,#2ac5fa)',
			'linear-gradient(to right,#fcb713,#ed7176)',
			'linear-gradient(to right, #ee5253, #ff6b6b)',
			'linear-gradient(to right,#3fcdc4,#65f5b5)'
		];

		const gradient = randomPick(gradients);
		console.log(gradient, typeof gradient);
		return gradient;
	}

	function getRandomSize() {
		const size = Math.floor(8 + Math.random() * 100);
		return `${size}px`;
	}

	function getRandomShape() {
		const shapes = Object.values(Shape);
		const shape = shapes[Math.floor(Math.random() * shapes.length)];
		return shape;
	}

	const randomShape = getRandomShape();

	const shape = cva('shape', {
		variants: {
			shape: {
				[Shape.CIRCLE]: 'shape--circle',
				[Shape.SQUARE]: 'shape--square'
			}
		}
	});
</script>

<div
	class={shape({ shape: randomShape })}
	style:--bg={getRandomGradient()}
	style:--size={getRandomSize()}
/>

<style>
	.shape {
		background: var(--bg);
		width: var(--size);
		height: var(--size);
		opacity: 1;
	}

	.shape--circle {
		border-radius: 100%;
	}

	.shape--square {
		border-radius: 20%;
	}
</style>
