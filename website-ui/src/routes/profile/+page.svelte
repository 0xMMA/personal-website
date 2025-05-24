<script>
    import { onMount } from 'svelte';
    
    let canvas;
    let skillsData = [
        { skill: 'TypeScript/JavaScript', level: 9, color: '#3178c6' },
        { skill: 'C#/.NET', level: 9, color: '#512bd4' },
        { skill: 'Python', level: 8, color: '#3776ab' },
        { skill: 'Azure/Cloud', level: 8, color: '#0078d4' },
        { skill: 'Docker/Containers', level: 7, color: '#2496ed' },
        { skill: 'React/Svelte', level: 8, color: '#61dafb' }
    ];
    
    let experience = [
        {
            title: 'Senior Software Engineer',
            company: 'Your Company',
            period: '2022 - Present',
            description: 'Leading full-stack development with modern technologies',
            technologies: ['TypeScript', 'Azure', 'Microservices']
        },
        {
            title: 'Software Developer',
            company: 'Previous Company',
            period: '2020 - 2022',
            description: 'Full-stack web development and cloud solutions',
            technologies: ['C#', 'React', 'Azure Functions']
        }
    ];
    
    onMount(() => {
        drawRadarChart();
    });
    
    function drawRadarChart() {
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 40;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background circles
        for (let i = 1; i <= 5; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
            ctx.stroke();
        }
        
        // Draw axes
        const angleStep = (2 * Math.PI) / skillsData.length;
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
        
        for (let i = 0; i < skillsData.length; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
            
            // Add labels
            const labelX = centerX + Math.cos(angle) * (radius + 20);
            const labelY = centerY + Math.sin(angle) * (radius + 20);
            
            ctx.fillStyle = '#c8c3bc';
            ctx.font = '12px Source Sans Pro';
            ctx.textAlign = 'center';
            ctx.fillText(skillsData[i].skill, labelX, labelY);
        }
        
        // Draw data
        ctx.beginPath();
        for (let i = 0; i < skillsData.length; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const value = (skillsData[i].level / 10) * radius;
            const x = centerX + Math.cos(angle) * value;
            const y = centerY + Math.sin(angle) * value;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw points
        for (let i = 0; i < skillsData.length; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const value = (skillsData[i].level / 10) * radius;
            const x = centerX + Math.cos(angle) * value;
            const y = centerY + Math.sin(angle) * value;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = skillsData[i].color;
            ctx.fill();
        }
    }
    
    function downloadPDF() {
        // This would integrate with a PDF generation library like jsPDF
        alert('PDF download would be implemented here with jsPDF or similar library');
    }
</script>

<svelte:head>
    <title>Michael Martin - Profile & Resume</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-12">
    <div class="max-w-6xl mx-auto px-4">
        
        <!-- Header -->
        <div class="text-center mb-12">
            <h1 class="text-5xl font-bold text-white mb-4">Michael Martin</h1>
            <p class="text-xl text-blue-300 mb-6">Senior Software Engineer & Full-Stack Developer</p>
            <button 
                on:click={downloadPDF}
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center mx-auto space-x-2"
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span>Download Resume PDF</span>
            </button>
        </div>
        
        <div class="grid lg:grid-cols-3 gap-8">
            
            <!-- Left Column -->
            <div class="lg:col-span-1 space-y-6">
                
                <!-- Skills Radar Chart -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-xl font-bold text-white mb-4">Technical Skills</h3>
                    <div class="flex justify-center">
                        <canvas 
                            bind:this={canvas}
                            width="300" 
                            height="300"
                            class="max-w-full"
                        ></canvas>
                    </div>
                </div>
                
                <!-- Contact Info -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-xl font-bold text-white mb-4">Contact</h3>
                    <div class="space-y-3 text-gray-300">
                        <div class="flex items-center space-x-3">
                            <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>michael@example.com</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                            </svg>
                            <span>linkedin.com/in/michael-martin-dev</span>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <!-- Right Column -->
            <div class="lg:col-span-2 space-y-6">
                
                <!-- About -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-2xl font-bold text-white mb-4">About</h3>
                    <p class="text-gray-300 leading-relaxed">
                        Passionate full-stack developer with expertise in modern web technologies and cloud architecture. 
                        I specialize in building scalable applications using TypeScript, .NET, and Azure. 
                        Always eager to learn new technologies and tackle complex challenges.
                    </p>
                </div>
                
                <!-- Experience -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-2xl font-bold text-white mb-6">Experience</h3>
                    <div class="space-y-6">
                        {#each experience as exp}
                            <div class="border-l-4 border-blue-500 pl-6">
                                <div class="flex flex-wrap justify-between items-start mb-2">
                                    <h4 class="text-lg font-semibold text-white">{exp.title}</h4>
                                    <span class="text-blue-300 text-sm">{exp.period}</span>
                                </div>
                                <p class="text-blue-300 font-medium mb-2">{exp.company}</p>
                                <p class="text-gray-300 mb-3">{exp.description}</p>
                                <div class="flex flex-wrap gap-2">
                                    {#each exp.technologies as tech}
                                        <span class="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm">
                                            {tech}
                                        </span>
                                    {/each}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                
                <!-- Key Projects -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-2xl font-bold text-white mb-6">Key Projects</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-gray-700/50 rounded-lg p-4">
                            <h4 class="text-lg font-semibold text-white mb-2">Personal Website</h4>
                            <p class="text-gray-300 text-sm mb-3">Modern SvelteKit site with Docker deployment</p>
                            <div class="flex flex-wrap gap-1">
                                <span class="bg-orange-600/20 text-orange-300 px-2 py-1 rounded text-xs">SvelteKit</span>
                                <span class="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">Docker</span>
                            </div>
                        </div>
                        <div class="bg-gray-700/50 rounded-lg p-4">
                            <h4 class="text-lg font-semibold text-white mb-2">Azure Functions API</h4>
                            <p class="text-gray-300 text-sm mb-3">Serverless backend with .NET 6</p>
                            <div class="flex flex-wrap gap-1">
                                <span class="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">.NET 6</span>
                                <span class="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">Azure</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        <!-- Back to Home -->
        <div class="text-center mt-12">
            <a href="/" class="text-blue-300 hover:text-blue-200 transition-colors duration-200">
                ← Back to Home
            </a>
        </div>
    </div>
</div>