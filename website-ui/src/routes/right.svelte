<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    let expanded = false;
    
    function toggleExpanded() {
        if (!expanded) {
            expanded = true;
            // Give a moment for the expand animation, then navigate
            setTimeout(() => {
                dispatch('navigate', 'photography');
            }, 300);
        } else {
            dispatch('navigate', 'photography');
        }
    }
</script>

<div 
    class="fixed right-0 top-0 h-full z-10 transition-all duration-500 ease-in-out cursor-pointer group"
    class:w-16={!expanded}
    class:w-80={expanded}
    class:animate-pulse={!expanded}
    on:mouseenter={() => expanded = true}
    on:mouseleave={() => expanded = false}
    on:click={toggleExpanded}
    role="button"
    tabindex="0"
>
    <!-- Background with gradient -->
    <div class="h-full bg-gradient-to-l from-purple-900/20 to-transparent backdrop-blur-sm group-hover:from-purple-800/30 group-hover:shadow-lg group-hover:shadow-purple-500/20">
        
        <!-- Collapsed state - thin bar -->
        <div class="absolute right-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-300"
             class:opacity-100={!expanded}
             class:opacity-0={expanded}>
            <div class="writing-vertical text-sm font-medium text-purple-300 tracking-widest">
                CREATIVE
            </div>
        </div>
        
        <!-- Expanded state - full preview -->
        <div class="p-6 h-full flex flex-col justify-center transition-opacity duration-300"
             class:opacity-0={!expanded}
             class:opacity-100={expanded}>
            
            <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-purple-300 mb-2">Photography</h3>
                <p class="text-sm text-gray-300">Digital art gallery & visual storytelling</p>
            </div>
            
            <!-- Photo collage preview -->
            <div class="grid grid-cols-3 gap-1 mb-6 h-32">
                <!-- Placeholder photo boxes with different sizes -->
                <div class="col-span-2 bg-gradient-to-br from-purple-600 to-pink-500 rounded opacity-80 flex items-center justify-center">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded opacity-80 flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="bg-gradient-to-br from-green-500 to-blue-500 rounded opacity-80 flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="col-span-2 bg-gradient-to-br from-orange-500 to-red-500 rounded opacity-80 flex items-center justify-center">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            
            <!-- Feature highlights -->
            <div class="space-y-2 text-xs">
                <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Masonry Gallery Layout</span>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>High-Res Image Optimization</span>
                </div>       
                <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Interactive Lightbox</span>
                </div>
            </div>
            
            <div class="mt-6 text-center">
                <span class="text-purple-300 text-sm font-medium">� Click to explore</span>
            </div>
        </div>
    </div>
</div>

<style>
    .writing-vertical {
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
</style>