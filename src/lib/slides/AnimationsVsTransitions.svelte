<!-- Code partially extracted from https://codepen.io/juliangarnier/pen/LMrddV?editors=0010 -->
<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';

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

		const layeredAnimation = function () {
			var transformEls = document.querySelectorAll('.transform-progress');
			var layeredAnimationEl = document.querySelector('.layered-animations');
			if (!layeredAnimationEl) return;
			var shapeEls = layeredAnimationEl.querySelectorAll('.shape');
			var triangleEl = layeredAnimationEl.querySelector('polygon');
			if (!triangleEl) return;
			var trianglePoints = triangleEl.getAttribute('points')?.split(' ');
			var easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

			fitElementToParent(layeredAnimationEl as HTMLElement);

			function createKeyframes(value: (el?: Element) => number | string) {
				var keyframes = [];
				for (var i = 0; i < 30; i++) keyframes.push({ value: value });
				return keyframes;
			}

			function animateShape(el: Element) {
				var circleEl = el.querySelector('circle');
				var rectEl = el.querySelector('rect');
				var polyEl = el.querySelector('polygon');

				var animation = anime
					.timeline({
						targets: el,
						duration: function () {
							return anime.random(600, 2200);
						},
						easing: function () {
							return easings[anime.random(0, easings.length - 1)];
						},
						complete: function (anim) {
							animateShape(anim.animatables[0].target);
						}
					})
					.add(
						{
							translateX: createKeyframes(function (el) {
								return el?.classList.contains('large')
									? anime.random(-300, 300)
									: anime.random(-520, 520);
							}),
							translateY: createKeyframes(function (el) {
								return el?.classList.contains('large')
									? anime.random(-110, 110)
									: anime.random(-280, 280);
							}),
							rotate: createKeyframes(function () {
								return anime.random(-180, 180);
							})
						},
						0
					);
				if (circleEl) {
					animation.add(
						{
							targets: circleEl,
							r: createKeyframes(function () {
								return anime.random(32, 72);
							})
						},
						0
					);
				}
				if (rectEl) {
					animation.add(
						{
							targets: rectEl,
							width: createKeyframes(function () {
								return anime.random(64, 120);
							}),
							height: createKeyframes(function () {
								return anime.random(64, 120);
							})
						},
						0
					);
				}
				if (polyEl) {
					animation.add(
						{
							targets: polyEl,
							points: createKeyframes(function () {
								var scale = anime.random(72, 180) / 100;
								return (
									trianglePoints
										?.map(function (p) {
											return Number(p) * scale;
										})
										.join(' ') ?? ''
								);
							})
						},
						0
					);
				}
			}

			for (var i = 0; i < shapeEls.length; i++) {
				animateShape(shapeEls[i]);
			}
		};

		layeredAnimation();
	});
</script>

<section>
	<section class="animations">
		<p class="fs-3 lg-fs-4">Animations</p>
		<div class="animation-wrapper">
			<div class="layered-animations">
				<svg class="large shape" viewBox="0 0 96 96">
					<defs>
						<linearGradient id="circleGradient" x1="0%" x2="100%" y1="20%" y2="80%">
							<stop stop-color="#373734" offset="0%" />
							<stop stop-color="#242423" offset="50%" />
							<stop stop-color="#0D0D0C" offset="100%" />
						</linearGradient>
					</defs>
					<circle
						cx="48"
						cy="48"
						r="28"
						fill-rule="evenodd"
						stroke-linecap="square"
						fill="url(#circleGradient)"
					/>
				</svg>
				<svg class="small shape color-red" viewBox="0 0 96 96">
					<polygon
						fill-rule="evenodd"
						points="48 17.28 86.4 80.11584 9.6 80.11584"
						stroke-linecap="square"
					/>
				</svg>
				<svg class="large shape" viewBox="0 0 96 96">
					<defs>
						<linearGradient id="triangleGradient" x1="0%" x2="100%" y1="20%" y2="80%">
							<stop stop-color="#373734" offset="0%" />
							<stop stop-color="#242423" offset="50%" />
							<stop stop-color="#0D0D0C" offset="100%" />
						</linearGradient>
					</defs>
					<polygon
						fill-rule="evenodd"
						points="48 17.28 86.4 80.11584 9.6 80.11584"
						stroke-linecap="square"
						fill="url(#triangleGradient)"
					/>
				</svg>
				<svg class="x-small shape" viewBox="0 0 96 96">
					<polygon
						fill-rule="evenodd"
						points="48 17.28 86.4 80.11584 9.6 80.11584"
						stroke-linecap="square"
					/>
				</svg>
				<svg class="x-small shape" viewBox="0 0 96 96">
					<rect width="48" height="48" x="24" y="24" fill-rule="evenodd" stroke-linecap="square" />
				</svg>
				<svg class="small shape color-red" viewBox="0 0 96 96">
					<rect width="48" height="48" x="24" y="24" fill-rule="evenodd" stroke-linecap="square" />
				</svg>
				<svg class="large shape" viewBox="0 0 96 96">
					<defs>
						<linearGradient id="rectGradient" x1="0%" x2="100%" y1="20%" y2="80%">
							<stop stop-color="#373734" offset="0%" />
							<stop stop-color="#242423" offset="50%" />
							<stop stop-color="#0D0D0C" offset="100%" />
						</linearGradient>
					</defs>
					<rect
						width="48"
						height="48"
						x="24"
						y="24"
						fill-rule="evenodd"
						stroke-linecap="square"
						fill="url(#rectGradient)"
					/>
				</svg>
				<svg class="small shape color-red" viewBox="0 0 96 96">
					<circle cx="48" cy="48" r="32" fill-rule="evenodd" stroke-linecap="square" />
				</svg>
				<svg class="x-small shape" viewBox="0 0 96 96">
					<circle cx="48" cy="48" r="32" fill-rule="evenodd" stroke-linecap="square" />
				</svg>
			</div>
		</div>
	</section>
	<section class="transitions">
		<div class="section-wrapper">
			<p class="fs-3 lg-fs-4">Transitions</p>
			<div class="box-wrapper">
				<div class="box">Hover me!</div>
			</div>
		</div>
	</section>
</section>

<style>
	section.animations {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 100%;
		height: 100vh;
	}

	section.animations > p {
		font-size: 3rem;
	}

	.animation-wrapper {
		width: 80%;
		padding-bottom: 40%;
	}

	section.transitions .section-wrapper {
		display: flex;
		flex-direction: column;
		align-content: center;
	}

	section.transitions .box-wrapper {
		flex-grow: 1;
		display: grid;
		place-items: center;
	}

	section.transitions .box-wrapper .box {
		display: grid;
		place-items: center;

		background: linear-gradient(180deg, #373734, #242423, #0d0d0c);
		border-radius: 10%;
		font-size: clamp(1rem, 5vw, 2rem);
		font-weight: 500;

		--size: clamp(160px, 20vw, 320px);
		width: var(--size);
		height: var(--size);

		transition: all 0.3s ease;
	}

	section.transitions .box-wrapper .box:hover,
	section.transitions .box-wrapper .box:active {
		cursor: pointer;
		transform: scale(1.2) rotate(15deg);
	}

	/** Layered Animation **/

	.layered-animations {
		position: absolute;
		top: 50%;
		left: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1100px;
		height: 550px;
		margin: -275px 0 0 -550px;
	}

	.layered-animations .shape {
		position: absolute;
		top: 50%;
		overflow: visible;
		width: 280px;
		height: 280px;
		margin-top: -140px;
		stroke: transparent;
		stroke-width: 1px;
		fill: url(#shapesGradient);
	}

	@media (min-width: 740px) {
		.layered-animations .shape {
			stroke-width: 0.5px;
		}
	}

	.layered-animations .small.shape {
		width: 64px;
		height: 64px;
		margin-top: -32px;
		stroke: currentColor;
		fill: currentColor;
	}

	.layered-animations .x-small.shape {
		width: 32px;
		height: 32px;
		margin-top: -16px;
		stroke: currentColor;
		fill: currentColor;
	}
</style>
