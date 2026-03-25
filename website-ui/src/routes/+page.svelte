<script>
	import Start from './start.svelte';
	import Portrait from './portrait.svelte';
	import TheWayOfTheDeveloper from './theDevWay.svelte';
</script>

<div class="space-y-20 lg:mt-20">
	<div class="mx-auto flex items-center justify-center sm:space-x-10 md:space-x-20">
		<Start />
		<Portrait />
	</div>
	<div class="mx-auto max-w-screen-xl">
		<TheWayOfTheDeveloper />
	</div>
	<div class="mx-auto text-center pb-12">
		<a href="/profile" class="inline-flex items-center space-x-2 bg-gray-700/30 hover:bg-gray-600/40 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200 text-lg font-medium">
			<span>View my Profile & Resume</span>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>

