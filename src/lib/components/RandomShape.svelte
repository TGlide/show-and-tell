<script lang="ts">
	import { cva } from 'class-variance-authority';

	enum Shape {
		CIRCLE = 'circle',
		SQUARE = 'square'
	}

	function getRandomHex() {
		let hexCode = '';
		const hexValues = '0123456789abcdef';

		for (let i = 0; i < 6; i++) {
			hexCode += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
		}
		return hexCode;
	}

	function getRandomGradient() {
		const deg = Math.floor(Math.random() * 360);

		const gradient = `linear-gradient(${deg}deg, #${getRandomHex()}, #${getRandomHex()})`;
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
