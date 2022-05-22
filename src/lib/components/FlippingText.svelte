<script lang="ts">
	export let text: string;
</script>

<p class="flipped">
	{#each text as char, idx}
		<span style:--i={idx}>{char}</span>
	{/each}
</p>

<style>
	@keyframes flip {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(360deg);
		}
	}

	span {
		display: inline-block;
		animation: flip 2s infinite;
		animation-delay: calc(0.1s * var(--i));
	}
</style>
