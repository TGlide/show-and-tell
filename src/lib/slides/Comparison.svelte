<script>
	import WavingText from '$lib/components/WavingText.svelte';
	import Icon from '$lib/UI/Icon.svelte';
</script>

<section>
	<section>
		<div class="section-wrapper center">
			<p class="title">Comparing animation <WavingText text="implementations" /></p>
		</div>
	</section>
	<section>
		<div class="section-wrapper video">
			<div>
				<h1>Video & GIFs</h1>
				<ul>
					<li class="fragment">
						<Icon variant="check" size="xl" --color="var(--green)" />
						<span>Easy to implement, for both designers and developers </span>
					</li>
					<li class="fragment">
						<Icon variant="x" size="xl" --color="var(--red)" />
						<span>Filesize can be an issue</span>
					</li>
					<li class="fragment">
						<Icon variant="x" size="xl" --color="var(--red)" />
						<span>Not as smooth</span>
					</li>
				</ul>
			</div>
			<div>
				<iframe src="https://www.proxyrack.com/" title="Video example: Proxyrack" frameborder="0" />
			</div>
		</div>
	</section>
</section>

<style lang="scss">
	.title {
		max-width: 900px;
		text-align: center;
	}

	.section-wrapper.video {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 1rem;
		padding: 0 5rem;

		font-size: 2rem;

		> * {
			width: 100%;
		}

		> :first-child {
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
</style>
