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

<div class="fixed bottom-0 left-0 ml-1 text-gray-500">© {currentYear} Michael Martin</div>
