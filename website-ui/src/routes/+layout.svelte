<script>
	import '../app.pcss';
	import Start from './start.svelte';
	import Porttrait from './portrait.svelte';
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

<div class="space-y-20 lg:mt-20">
	<div class="mx-auto flex items-center justify-center sm:space-x-10 md:space-x-20">
		<Porttrait />
		<Start />
	</div>
	<div class="mx-auto max-w-screen-xl">
		<TheWayOfTheDeveloper />
	</div>
</div>

<div class="fixed bottom-0 left-0 ml-1 text-gray-500">© {currentYear} Michael Martin</div>
