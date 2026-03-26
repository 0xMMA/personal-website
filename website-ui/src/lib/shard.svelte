<script>
	export let title;
	export let content;
	export let titleColor = 'color: rgb(209, 213, 219)';
</script>

<div class="rounded-lg bg-gray-700/20 p-5 transition-all duration-300 hover:bg-gray-700/40 hover:scale-[1.03] hover:shadow-lg hover:shadow-orange-500/10">
	<h1 class="mb-3 text-center text-xl font-semibold" style={titleColor}>{title}</h1>
	<p class="text-base text-gray-300 text-justify">{content}</p>
</div>
