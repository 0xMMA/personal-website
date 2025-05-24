<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    let expanded = false;
    
    function toggleExpanded() {
        if (!expanded) {
            expanded = true;
            // Give a moment for the expand animation, then navigate
            setTimeout(() => {
                dispatch('navigate', 'profile');
            }, 300);
        } else {
            dispatch('navigate', 'profile');
        }
    }
</script>

<div 
    class="fixed left-0 top-0 h-full z-10 transition-all duration-500 ease-in-out cursor-pointer group"
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
    <div class="h-full bg-gradient-to-r from-blue-900/20 to-transparent backdrop-blur-sm group-hover:from-blue-800/30 group-hover:shadow-lg group-hover:shadow-blue-500/20">
        
        <!-- Collapsed state - thin bar -->
        <div class="absolute left-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-300"
             class:opacity-100={!expanded}
             class:opacity-0={expanded}>
            <div class="writing-vertical text-sm font-medium text-blue-300 tracking-widest">
                PROFESSIONAL
            </div>
        </div>
        
        <!-- Expanded state - full preview -->
        <div class="p-6 h-full flex flex-col justify-center transition-opacity duration-300"
             class:opacity-0={!expanded}
             class:opacity-100={expanded}>
            
            <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-blue-300 mb-2">Profile & Resume</h3>
                <p class="text-sm text-gray-300">Professional experience, skills & achievements</p>
            </div>
            
            <!-- Mini radar chart preview -->
            <div class="relative mx-auto mb-6">
                <svg width="120" height="120" viewBox="0 0 120 120" class="transform rotate-90">
                    <!-- Radar chart background -->
                    <polygon points="60,10 100,40 90,80 30,80 20,40" 
                             fill="none" stroke="rgba(59, 130, 246, 0.3)" stroke-width="1"/>
                    <polygon points="60,20 85,45 80,70 40,70 35,45" 
                             fill="none" stroke="rgba(59, 130, 246, 0.2)" stroke-width="1"/>
                    
                    <!-- Data visualization -->
                    <polygon points="60,15 90,42 75,75 45,75 30,42" 
                             fill="rgba(59, 130, 246, 0.4)" stroke="rgba(59, 130, 246, 0.8)" stroke-width="2"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-xs text-blue-300 font-medium">Tech Stack</span>
                </div>
            </div>
            
            <!-- Feature highlights -->
            <div class="space-y-2 text-xs">
                <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Interactive Skills Radar</span>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>PDF Resume Export</span>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Project Timeline</span>
                </div>
            </div>
            
            <div class="mt-6 text-center">
                <span class="text-blue-300 text-sm font-medium">Click to explore �</span>
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