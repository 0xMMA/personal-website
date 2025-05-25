<script>
	import { goto } from '$app/navigation';
	import Start from './start.svelte';
	import Portrait from './portrait.svelte';
	import Left from './left.svelte';
	import Right from './right.svelte';
	import TheWayOfTheDeveloper from './theDevWay.svelte';
	
	function handleNavigation(event) {
		const section = event.detail;
		goto(`/${section}`);
	}
</script>

<!-- Side navigation panels -->
<Left on:navigate={handleNavigation} />
<!-- <Right on:navigate={handleNavigation} /> -->

<div class="space-y-20 lg:mt-20">
	<div class="mx-auto flex items-center justify-center sm:space-x-10 md:space-x-20">
		<Start />
		<Portrait />
	</div>
	<div class="mx-auto max-w-screen-xl">
		<TheWayOfTheDeveloper />
	</div>
</div>

