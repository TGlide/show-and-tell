<script lang="ts">
	export let text: string;

	$: mappedText = text.split('').map((char) => (char === ' ' ? '&nbsp;' : char));

	const getDelay = (idx: number) => {
		const delay = idx * 35;
		return `${delay}ms`;
	};
</script>

<p class="flipped">
	{#each mappedText as char, idx}
		<span style:--delay={getDelay(idx)}>{@html char}</span>
	{/each}
</p>

<style>
	@keyframes wave {
		0% {
			transform: translateY(0em);
		}
		10%,
		30% {
			transform: translateY(0.1em);
		}
		40% {
			transform: translateY(-0.25em);
		}
		70%,
		100% {
			transform: translateY(0em);
		}
	}

	@keyframes fade-out {
		0%,
		5% {
			opacity: 1;
		}
		50%,
		100% {
			opacity: 0;
		}
	}

	p {
		/* animation: fade-out 2s ease-in-out infinite; */
	}

	span {
		display: inline-block;
		animation: wave 3s ease infinite;
		animation-delay: var(--delay);
		animation-fill-mode: both;
	}
</style>
