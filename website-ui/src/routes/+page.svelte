<script>
	import { onMount, onDestroy } from 'svelte';
	import { navVisible, introPlayed } from '$lib/index';
	import { get } from 'svelte/store';
	import Portrait from './portrait.svelte';
	import TheWayOfTheDeveloper from './theDevWay.svelte';
	import EtcPrinciple from './etcPrinciple.svelte';

	const skip = get(introPlayed);
	let step = skip ? 7 : 0;

	if (!skip) navVisible.set(false);

	onMount(() => {
		if (skip) return;
		const timeline = [
			200,   // 1: Hi appears BIG, centered
			600,   // 2: Hi shrinks in place
			1000,  // 3: Hi moves up to final position
			1400,  // 4: Name + Portrait appear at final position
			1900,  // 5: Welcome + social icons
			2200,  // 6: Content sections
			2500,  // 7: Nav slides in
		];
		timeline.forEach((ms, i) => {
			setTimeout(() => {
				step = i + 1;
				if (i + 1 === 7) {
					navVisible.set(true);
					introPlayed.set(true);
				}
			}, ms);
		});
	});

	onDestroy(() => {
		navVisible.set(true);
	});
</script>

<div class="flex flex-col items-center pt-24">

	<!-- Hi: step 1 = appear BIG, step 2 = shrink in place, step 3 = move up -->
	<p class="font-light text-gray-400 transition-all duration-[400ms] ease-out"
	   style="font-size: {step >= 2 ? '1.875rem' : '14rem'}; line-height: 1; opacity: {step >= 1 ? 1 : 0}; margin-top: {step >= 3 ? '0' : '38vh'}; margin-bottom: {step >= 3 ? '1.5rem' : '0'};">
		Hi
	</p>

	<!-- Name + Portrait: appear at final position at step 4 -->
	<div class="flex flex-col items-center gap-6 transition-all duration-350 ease-out mb-6"
	     style="opacity: {step >= 4 ? 1 : 0}; transform: translateY({step >= 4 ? '0' : '20px'});">
		<h1 class="font-light text-center" style="font-size: 6rem; line-height: 1;">
			I'm <strong style="color: rgb(249, 115, 22);">Michael Martin</strong>
		</h1>
		<Portrait />
	</div>

	<!-- Welcome + icons -->
	<p class="text-2xl font-medium text-gray-300 text-center transition-all duration-350 ease-out mb-6"
	   style="opacity: {step >= 5 ? 1 : 0}; transform: translateY({step >= 5 ? '0' : '20px'});">
		Welcome to my Digital Realm
	</p>

	<div class="flex gap-4 transition-all duration-350 ease-out mb-20"
	     style="opacity: {step >= 5 ? 1 : 0}; transform: translateY({step >= 5 ? '0' : '20px'});">
		<a href="https://www.linkedin.com/in/michael-martin-dev/" title="LinkedIn">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4 fill-gray-400 hover:fill-white transition-colors">
				<path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
			</svg>
		</a>
		<a href="https://github.com/0xMMA" title="GitHub">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="h-4 w-4 fill-gray-400 hover:fill-white transition-colors">
				<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.2-3.6 5.2-3.6 3.1-.2 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.8 0 6.5-2 .7-1.9-1.3-4.3-4.3-5.2-2.6-.7-5.5.3-6.5 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.9 2.9-.5 4.9-2.6 4.6-4.9-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-32.6 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 35.4 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.5-1.6-3.8-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
			</svg>
		</a>
	</div>

	<!-- Content sections -->
	<div class="w-full max-w-screen-xl transition-all duration-500 ease-out mb-20"
	     style="opacity: {step >= 6 ? 1 : 0}; transform: translateY({step >= 6 ? '0' : '40px'});">
		<TheWayOfTheDeveloper disabled={step < 6} />
	</div>
	<div class="w-full max-w-screen-xl transition-all duration-500 ease-out pb-20"
	     style="opacity: {step >= 6 ? 1 : 0}; transform: translateY({step >= 6 ? '0' : '40px'});">
		<EtcPrinciple disabled={step < 6} />
	</div>
</div>
