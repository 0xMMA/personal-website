<script>
	import '../app.pcss';
	import { page } from '$app/stores';

	import { onMount } from 'svelte';

	let currentYear = 2024;

	onMount(() => {
		const date = new Date();
		currentYear = date.getFullYear();
	});
</script>

<nav class="fixed top-0 left-0 z-50 flex gap-4 px-4 py-2 text-sm text-gray-500">
	<a href="/" class="hover:text-white transition-colors pb-px" style={$page.url.pathname === '/' ? 'border-bottom: 1px solid rgb(249, 115, 22);' : ''}>Home</a>
	<a href="/profile" class="hover:text-white transition-colors pb-px" style={$page.url.pathname.startsWith('/profile') ? 'border-bottom: 1px solid rgb(249, 115, 22);' : ''}>Profile</a>
	<span class="text-gray-600 cursor-default" title="Coming Soon">Photography</span>
</nav>

<div>
	<slot/>
</div>

<div class="fixed bottom-0 left-0 px-4 py-1 text-sm text-gray-500">
	<span>© {currentYear} Michael Martin</span>
</div>
