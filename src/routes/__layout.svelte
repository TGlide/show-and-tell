<script lang="ts">
	import '../app.scss';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import '../styles/index.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		height: 100vh;
	}

	@media (max-width: 767px) {
		:global(.reveal .controls) {
			bottom: 64px !important;
		}
	}
</style>
