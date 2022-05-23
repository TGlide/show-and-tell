<script lang="ts">
	import WavingText from '$lib/components/WavingText.svelte';
	import Icon from '$lib/UI/Icon.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		await import('@lottiefiles/lottie-player');
	});

	let speedIdx = 3;
	const speeds = [0.1, 0.25, 0.5, 1, 1.5, 2];
	$: speed = speeds[speedIdx];

	const toggleSpeed = () => {
		speedIdx = (speedIdx + 1) % speeds.length;
	};
</script>

<section>
	<section>
		<div class="section-wrapper center">
			<p class="title">Comparing animation <WavingText text="implementations" /></p>
		</div>
	</section>
	<section>
		<div class="section-wrapper side-by-side">
			<div>
				<h1>Video & GIFs</h1>
				<ul>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Requires little to no additional work for designers to handover</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Easy to implement for developers</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Relatively easy to deal with different device sizes</span>
					</li>
					<li class="fragment">
						<Icon variant="x" size="xl" --color="var(--red)" />
						<span>Large filesize (2.2MB in this case)</span>
					</li>
					<li class="fragment">
						<Icon variant="x" size="xl" --color="var(--red)" />
						<span>Higher framerate/resolution requires higher filesize</span>
					</li>
					<li class="fragment">
						<Icon variant="minus" size="xl" --color="var(--palette-grey-50)" />
						<span>Hard to implement transparency</span>
					</li>
					<li class="fragment">
						<Icon variant="minus" size="xl" --color="var(--palette-grey-50)" />
						<span>Contained to a box</span>
					</li>
					<li class="fragment">
						<Icon variant="minus" size="xl" --color="var(--palette-grey-50)" />
						<span>Interactivity is basically non existent</span>
					</li>
				</ul>
			</div>
			<div>
				<iframe src="https://www.proxyrack.com/" title="Video example: Proxyrack" frameborder="0" />
			</div>
		</div>
	</section>
	<section>
		<div class="section-wrapper side-by-side">
			<div>
				<h1>Lottie files</h1>
				<ul>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Easy to implement for developers</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Relatively easy to deal with different device sizes</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Smooth, maintains framerate on different speeds</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Can render to vectors, decoupling resolution from filesize</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Handles transparency like a champ</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Small filesize</span>
					</li>
					<li class="fragment">
						<Icon variant="x" size="xl" --color="var(--red)" />
						<span>Can be a bit harder/restrictive for designers to work with</span>
					</li>
					<li class="fragment">
						<Icon variant="minus" size="xl" --color="var(--palette-grey-50)" />
						<span>Contained to a box</span>
					</li>
					<li class="fragment">
						<Icon variant="minus" size="xl" --color="var(--palette-grey-50)" />
						<span>Limited interactivity</span>
					</li>
				</ul>
			</div>
			<div class="flex flex-col align-center">
				<div class="lottie-wrapper">
					{#key speed}
						<lottie-player autoplay loop {speed} src="lottie.json" />
					{/key}
				</div>
				<button class="button" on:click={toggleSpeed}>Speed {speed}x</button>
			</div>
		</div>
	</section>
	<section>
		<div class="section-wrapper side-by-side">
			<div>
				<h1>Code</h1>
				<ul>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Requires little to no additional work for designers to handover</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>
							Smooth, can easily leverage high framerates, specially on screens with fast refresh
							rates
						</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span> Can be fully interactible </span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Handles transparency like a champ</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Small filesize</span>
					</li>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>
							Easier to deal with dynamic properties and content, such as scrolling, page
							transitions, shared animations between components, editable content, etc.
						</span>
					</li>

					<li class="fragment">
						<Icon variant="x" size="xl" --color="var(--red)" />
						<span>Can be quite hard to implement for developers</span>
					</li>
					<li class="fragment">
						<Icon variant="x" size="xl" --color="var(--red)" />
						<span>...and it takes time</span>
					</li>
					<li class="fragment">
						<Icon variant="x" size="xl" --color="var(--red)" />
						<span>Also harder to deal with different screen sizes</span>
					</li>
				</ul>
			</div>
			<div>
				<iframe
					src="https://yonder-web.vercel.app/"
					title="Video example: Proxyrack"
					frameborder="0"
				/>
			</div>
		</div>
	</section>
</section>

<style lang="scss">
	.title {
		max-width: 900px;
		text-align: center;
	}

	.side-by-side {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 1rem;
		padding: 0 5rem;

		font-size: 2rem;

		> * {
			width: 100%;
		}

		> div:first-child {
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			h1 {
				text-align: start;
			}

			li {
				font-weight: 300;
				position: relative;
				margin-left: 0.25rem;

				:global(svg) {
					position: absolute;
					left: 0%;
					transform: translateX(-110%);
				}
			}
		}

		iframe {
			width: 100%;
			height: 80vh;
			overflow: hidden;
		}
	}

	.lottie-wrapper {
		width: 800px;
		height: 800px;
	}
</style>
