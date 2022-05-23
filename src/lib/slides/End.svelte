<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';

	onMount(() => {
		anime({
			targets: '#heart path',
			strokeDashoffset: [anime.setDashoffset, -1],
			easing: 'easeInOutSine',
			duration: 1500,
			delay: function (el, i) {
				return i * 250;
			},
			endDelay: 500,
			direction: 'alternate',
			loop: true
		});
	});
</script>

<section>
	<div class="section-wrapper center color-red">
		<svg
			version="1.1"
			id="heart"
			width="300"
			viewBox="0 0 358.299 358.299"
			stroke="currentColor"
			stroke-width="5"
			fill="transparent"
		>
			<path
				d="M 179.181,298.625 C 151.149,285.642 30,224.254 30,133.547 30,91.358 64.323,57.035 106.512,57.035 c 23.976,0 46.114,10.929 60.738,29.985 l 11.9,15.507 11.9,-15.507 c 14.624,-19.056 36.762,-29.985 60.738,-29.985 42.188,0 76.512,34.323 76.512,76.512 -0.001,91.359 -121.099,152.224 -149.119,165.078 z"
			/>
		</svg>
	</div>
</section>
