<script>
    import Shard from '../lib/shard.svelte';
</script>

<div class="p-6 rounded-xl">
    <h1 class="text-3xl font-light mb-2 text-center tracking-wide">THE LAST PRINCIPLE YOU'LL EVER NEED</h1>
    <div class="w-24 h-0.5 mx-auto mb-4 rounded-full" style="background: rgb(249, 115, 22);"></div>
    <p class="text-center text-xl text-gray-400 mb-8">
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
