<script>
    import { onMount } from 'svelte';
    import Shard from '../lib/shard.svelte';

    let expanded = false;
    /** @type {HTMLElement} */
    let section;

    function reveal() {
        expanded = true;
    }

    onMount(() => {
        let first = true;
        const observer = new IntersectionObserver((entries) => {
            if (first) { first = false; return; }
            if (entries[0].isIntersecting) {
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
    <h1 class="text-3xl font-light mb-2 text-center tracking-wide">THE WAY OF THE DEVELOPER</h1>
    <div class="w-24 h-0.5 mx-auto rounded-full" style="background: rgb(249, 115, 22);"
         class:mb-8={expanded} class:mb-4={!expanded}></div>

    {#if !expanded}
        <div class="flex justify-center">
            <svg class="w-5 h-5 text-gray-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    {/if}

    <div class="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-5 transition-all duration-700 ease-out overflow-hidden"
         style="max-height: {expanded ? '2000px' : '0px'}; opacity: {expanded ? '1' : '0'};">
        <Shard title="Honor" content="Your work is a testament to your dedication and professionalism. Every. Single. Line." />
        <Shard title="Mastery" content="Know your tools inside out. Competence isn't optional." />
        <Shard title="Transparency" content="Mistakes? Own them. That's where trust is built." />
        <Shard title="Simplicity" content="Complexity might impress, but clarity wins. Every time." />
        <Shard title="Empathy" content="Address challenges, not personalities. Blame has no home here." />
        <Shard title="Curiosity" content="Tech evolves. So should you. Stay hungry." />
        <Shard title="Wisdom" content="New doesn't always mean better. Respect the lessons of the past." />
        <Shard title="Balance" content="All work and no rest dulls the sharpest minds. Burnout isn't a badge of honor. Recharge to stay sharp." />
    </div>
</div>
