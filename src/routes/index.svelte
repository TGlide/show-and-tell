<script lang="ts">
	import Slides from '$lib/slides';
	import { onMount } from 'svelte';

	onMount(async () => {
		const { default: Reveal } = await import('reveal.js');
		const { default: Notes } = await import('reveal.js/plugin/notes/notes.esm.js');

		Reveal.initialize({ disableLayout: true, plugins: [Notes] });
	});
</script>

<div class="reveal">
	<div class="slides">
		<Slides.Introduction />
		<Slides.AnimationsVsTransitions />
		<Slides.Comparison />
	</div>
</div>
