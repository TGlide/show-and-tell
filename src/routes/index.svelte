<script lang="ts">
	import Slides from '$lib/slides';
	import { onMount } from 'svelte';

	onMount(async () => {
		const { default: Reveal } = await import('reveal.js');

		Reveal.initialize({ disableLayout: true });
	});
</script>

<div class="reveal">
	<div class="slides">
		<Slides.Introduction />
		<Slides.AnimationsVsTransitions />
	</div>
</div>
