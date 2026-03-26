<script>
	import '../app.pcss';

	import { onMount } from 'svelte';

	let currentYear = 2024;

	onMount(() => {
		const date = new Date();
		currentYear = date.getFullYear();
	});
</script>

<div>
	<slot/>
</div>

<div class="fixed bottom-0 left-0 right-0 grid grid-cols-3 items-center px-4 py-1 text-sm text-gray-500">
	<span>© {currentYear} Michael Martin</span>
	<nav class="flex gap-4 justify-center">
		<a href="/" class="hover:text-white transition-colors">Home</a>
		<a href="/profile" class="hover:text-white transition-colors">Profile</a>
		<span class="text-gray-600 cursor-default" title="Coming Soon">Photography</span>
	</nav>
	<span></span>
</div>
