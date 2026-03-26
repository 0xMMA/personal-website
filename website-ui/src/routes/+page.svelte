<script>
	import Start from './start.svelte';
	import Portrait from './portrait.svelte';
	import TheWayOfTheDeveloper from './theDevWay.svelte';
	import EtcPrinciple from './etcPrinciple.svelte';
</script>

<div class="space-y-20 lg:mt-20">
	<div class="mx-auto flex items-center justify-center sm:space-x-10 md:space-x-20">
		<Start />
		<Portrait />
	</div>
	<div class="mx-auto max-w-screen-xl">
		<TheWayOfTheDeveloper />
	</div>
	<div class="mx-auto max-w-screen-xl">
		<EtcPrinciple />
	</div>
</div>

