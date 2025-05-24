<script>
    import { onMount } from 'svelte';
    
    // Sample photos data - replace with your OneDrive integration
    let photos = [
        {
            id: 1,
            url: '/005_compressed.jpg', // placeholder - will be OneDrive URLs
            title: 'Portrait Study',
            category: 'Portrait',
            width: 400,
            height: 600
        },
        {
            id: 2,
            url: '/005_compressed.jpg',
            title: 'Landscape Vista',
            category: 'Landscape',
            width: 600,
            height: 400
        },
        {
            id: 3,
            url: '/005_compressed.jpg',
            title: 'Street Photography',
            category: 'Street',
            width: 400,
            height: 500
        },
        {
            id: 4,
            url: '/005_compressed.jpg',
            title: 'Abstract Art',
            category: 'Abstract',
            width: 500,
            height: 700
        },
        {
            id: 5,
            url: '/005_compressed.jpg',
            title: 'Urban Architecture',
            category: 'Architecture',
            width: 600,
            height: 450
        },
        {
            id: 6,
            url: '/005_compressed.jpg',
            title: 'Nature Close-up',
            category: 'Nature',
            width: 400,
            height: 600
        }
    ];
    
    let selectedPhoto = null;
    let selectedCategory = 'All';
    let categories = ['All', 'Portrait', 'Landscape', 'Street', 'Abstract', 'Architecture', 'Nature'];
    
    $: filteredPhotos = selectedCategory === 'All' 
        ? photos 
        : photos.filter(photo => photo.category === selectedCategory);
    
    function openLightbox(photo) {
        selectedPhoto = photo;
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        selectedPhoto = null;
        document.body.style.overflow = 'auto';
    }
    
    function handleKeydown(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    }
    
    onMount(() => {
        // Initialize masonry layout after images load
        const images = document.querySelectorAll('.gallery-item img');
        let loadedImages = 0;
        
        images.forEach(img => {
            if (img.complete) {
                loadedImages++;
            } else {
                img.addEventListener('load', () => {
                    loadedImages++;
                    if (loadedImages === images.length) {
                        layoutMasonry();
                    }
                });
            }
        });
        
        if (loadedImages === images.length) {
            layoutMasonry();
        }
    });
    
    function layoutMasonry() {
        // Simple CSS Grid masonry-like layout
        // For a more advanced masonry, consider using a library like Masonry.js
        const gallery = document.querySelector('.masonry-gallery');
        if (gallery) {
            gallery.style.display = 'grid';
        }
    }
    
    // OneDrive integration function (placeholder)
    function loadOneDrivePhotos() {
        // This would integrate with Microsoft Graph API
        // to fetch photos from OneDrive and optimize them
        console.log('OneDrive integration would be implemented here');
    }
</script>

<svelte:head>
    <title>Michael Martin - Photography</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12">
    <div class="max-w-7xl mx-auto px-4">
        
        <!-- Header -->
        <div class="text-center mb-12">
            <h1 class="text-5xl font-bold text-white mb-4">Photography Gallery</h1>
            <p class="text-xl text-purple-300 mb-8">Visual storytelling through the lens</p>
            
            <!-- Category Filter -->
            <div class="flex flex-wrap justify-center gap-2 mb-8">
                {#each categories as category}
                    <button
                        class="px-4 py-2 rounded-full transition-all duration-200"
                        class:bg-purple-600={selectedCategory === category}
                        class:text-white={selectedCategory === category}
                        class:bg-gray-700={selectedCategory !== category}
                        class:text-gray-300={selectedCategory !== category}
                        class:hover:bg-purple-500={selectedCategory !== category}
                        on:click={() => selectedCategory = category}
                    >
                        {category}
                    </button>
                {/each}
            </div>
        </div>
        
        <!-- Masonry Gallery -->
        <div class="masonry-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-min">
            {#each filteredPhotos as photo (photo.id)}
                <div 
                    class="gallery-item group cursor-pointer overflow-hidden rounded-lg bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    on:click={() => openLightbox(photo)}
                    role="button"
                    tabindex="0"
                >
                    <div class="relative">
                        <img 
                            src={photo.url} 
                            alt={photo.title}
                            class="w-full h-auto object-cover"
                            loading="lazy"
                            style="aspect-ratio: {photo.width}/{photo.height}"
                        />
                        
                        <!-- Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-4 left-4 right-4">
                                <h3 class="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                                <span class="inline-block bg-purple-600 text-white px-2 py-1 rounded text-sm">
                                    {photo.category}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Zoom Icon -->
                        <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="bg-black/50 backdrop-blur-sm rounded-full p-2">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        
        <!-- OneDrive Integration Info -->
        <div class="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <h3 class="text-xl font-bold text-white mb-4">High-Resolution Images</h3>
            <p class="text-gray-300 mb-4">
                Full resolution images (16MB+) are optimized and served from OneDrive for the best viewing experience.
            </p>
            <button 
                on:click={loadOneDrivePhotos}
                class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
                Load More from OneDrive
            </button>
        </div>
        
        <!-- Back to Home -->
        <div class="text-center mt-12">
            <a href="/" class="text-purple-300 hover:text-purple-200 transition-colors duration-200">
                ← Back to Home
            </a>
        </div>
    </div>
</div>

<!-- Lightbox Modal -->
{#if selectedPhoto}
    <div 
        class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        on:click={closeLightbox}
        role="dialog"
        aria-modal="true"
    >
        <div class="relative max-w-4xl max-h-full">
            
            <!-- Close Button -->
            <button 
                class="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2"
                on:click={closeLightbox}
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <!-- Image -->
            <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.title}
                class="max-w-full max-h-full object-contain rounded-lg"
                on:click|stopPropagation
            />
            
            <!-- Image Info -->
            <div class="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                <h3 class="text-white text-xl font-semibold mb-2">{selectedPhoto.title}</h3>
                <span class="inline-block bg-purple-600 text-white px-3 py-1 rounded">
                    {selectedPhoto.category}
                </span>
            </div>
        </div>
    </div>
{/if}

<style>
    .masonry-gallery {
        grid-template-rows: masonry;
    }
    
    /* Fallback for browsers that don't support masonry */
    @supports not (grid-template-rows: masonry) {
        .masonry-gallery {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: stretch;
            height: 100vh;
        }
        
        .gallery-item {
            width: calc(25% - 1rem);
            margin-bottom: 1rem;
        }
        
        @media (max-width: 1280px) {
            .gallery-item {
                width: calc(33.333% - 1rem);
            }
        }
        
        @media (max-width: 768px) {
            .gallery-item {
                width: calc(50% - 1rem);
            }
        }
        
        @media (max-width: 640px) {
            .gallery-item {
                width: 100%;
            }
        }
    }
</style>