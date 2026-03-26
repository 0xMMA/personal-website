<script>
    import { onMount } from 'svelte';
    import Shard from '../lib/shard.svelte';

    export let disabled = false;

    let expanded = false;
    /** @type {HTMLElement} */
    let section;

    function reveal() {
        if (!disabled) expanded = true;
    }

    onMount(() => {
        let first = true;
        const observer = new IntersectionObserver((entries) => {
            if (first) { first = false; return; }
            if (entries[0].isIntersecting && !disabled) {
                reveal();
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        observer.observe(section);
        return () => observer.disconnect();
    });
</script>

<div class="p-6 rounded-xl" bind:this={section}
     on:mouseenter={reveal} on:click={reveal}
     role="region" tabindex="-1">
    <h1 class="text-3xl font-light mb-2 text-center tracking-wide">THE LAST PRINCIPLE YOU'LL EVER NEED</h1>
    <div class="w-24 h-0.5 mx-auto rounded-full" style="background: rgb(249, 115, 22);"
         class:mb-4={!expanded} class:mb-0={expanded}></div>

    <div class="transition-all duration-700 ease-out overflow-hidden"
         style="max-height: {expanded ? '2000px' : '0px'}; opacity: {expanded ? '1' : '0'};">
        <p class="text-center text-xl text-gray-400 mb-8 mt-4">
            <strong class="text-gray-300">ETC</strong> — Easy To Change
        </p>

        <div class="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-5">
            <Shard title="SOLID" content="Five principles, one goal: code that bends without breaking. ETC is the why behind all of them." titleColor="color: rgb(209, 213, 219)" />
            <Shard title="DRY" content="Repetition makes change painful. ETC eliminates it naturally." titleColor="color: rgb(209, 213, 219)" />
            <Shard title="YAGNI" content="Extra code is extra to change. ETC never builds what it doesn't need." titleColor="color: rgb(209, 213, 219)" />
            <Shard title="KISS" content="Complexity resists change. ETC keeps it simple by default." titleColor="color: rgb(209, 213, 219)" />
            <Shard title="SoC" content="Tangled concerns means one change breaks everything. ETC untangles." titleColor="color: rgb(209, 213, 219)" />
            <Shard title="LoD" content="Reaching deep into objects creates hidden dependencies that resist change. ETC won't allow it." titleColor="color: rgb(209, 213, 219)" />
        </div>
    </div>

    {#if !expanded}
        <div class="flex justify-center mt-4">
            <svg class="w-5 h-5 text-gray-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    {/if}
</div>
