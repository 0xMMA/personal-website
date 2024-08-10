<script>
	import '../app.pcss';
	import Start from './start.svelte';
	// import Left from './left.svelte';
	// import Right from './right.svelte';
	import TheWayOfTheDeveloper from './theDevWay.svelte';

	import { onMount } from 'svelte';

	let currentYear = 2024;

	onMount(() => {
		const date = new Date();
		currentYear = date.getFullYear();
	});
</script>

<div class="mt-20 space-y-20">
	<Start />
	<div class="mx-auto max-w-screen-xl">
		<TheWayOfTheDeveloper />
	</div>
</div>

<div class="fixed bottom-0 left-0 text-gray-500 ml-1">© {currentYear} Michael Martin</div>
