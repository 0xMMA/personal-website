<script>
    import { onMount } from 'svelte';
    
    let canvas;
    let skillsData = [
        { skill: 'C# .NET', level: 10, color: '#512bd4' },
        { skill: 'WinForms', level: 10, color: '#0078d4' },
        { skill: 'WPF', level: 9, color: '#0078d4' },
        { skill: 'React/TypeScript', level: 8, color: '#3178c6' },
        { skill: 'SQL Databases', level: 10, color: '#00758f' },
        { skill: 'DevExpress', level: 10, color: '#ff7200' },
        { skill: 'Entity Framework', level: 9, color: '#512bd4' },
        { skill: 'Team Leadership', level: 9, color: '#28a745' }
    ];
    
    let certifications = [
        {
            name: 'Professional Scrum Master I (PSM I)',
            provider: 'Scrum.org',
            description: 'Agile project management',
            logo: '/badge-psm-I.svg',
            color: 'bg-purple-600/20 text-purple-300'
        },
        {
            name: 'Microsoft Certified Fundamentals',
            provider: 'Microsoft',
            description: 'Azure cloud platform expertise',
            logo: '/microsoft-certified-fundamentals-badge.svg',
            color: 'bg-blue-600/20 text-blue-300'
        },
        {
            name: 'AWS Certified Cloud Practitioner',
            provider: 'Amazon Web Services',
            description: 'Cloud solutions architecture',
            logo: '/aws-certified-cloud-practitioneer.png',
            color: 'bg-orange-600/20 text-orange-300'
        },
        {
            name: 'Certified Trainer (Ausbilderschein)',
            provider: 'IHK Germany',
            description: 'Professional training & mentoring',
            logo: null, // Will use icon placeholder for now
            color: 'bg-blue-600/20 text-blue-300'
        }
    ];

    let dailyTools = [
        {
            name: 'Visual Studio',
            category: 'IDE',
            icon: '🛠️'
        },
        {
            name: 'ReSharper',
            category: 'Code Analysis',
            icon: '🔍'
        },
        {
            name: 'Claude Code',
            category: 'AI Assistant',
            icon: '🤖'
        },
        {
            name: 'Docker',
            category: 'Containerization',
            icon: '🐳'
        },
        {
            name: 'GitKraken',
            category: 'Version Control',
            icon: '🐙'
        },
        {
            name: 'Obsidian',
            category: 'Knowledge Management',
            icon: '🧠'
        }
    ];

    let experience = [
        {
            title: 'Expert Consultant',
            company: 'valantic ace GmbH',
            period: '2024 - Present',
            description: 'Leading enterprise data governance solutions and banking data pipeline projects with modern tech stack',
            technologies: ['React', 'TypeScript', '.NET 8', 'Entity Framework', 'ASP.NET Core', 'DevExpress', 'PostgreSQL', 'Azure DevOps']
        },
        {
            title: 'Lead Developer & Team Leader',
            company: 'medDV GmbH',
            period: '2022 - 2024',
            description: 'Led team of 6 developers + 3 trainees. Strategic architecture decisions, Scrum/Kanban processes, and modern development practices',
            technologies: ['C#', 'WinForms', 'WPF', 'ASP.NET Core', 'gRPC', 'DevExpress','GitLab']
        },
        {
            title: 'Full Stack Developer',
            company: 'medDV GmbH',
            period: '2018 - 2022',
            description: 'Touch-optimized rescue service software, modular configuration systems, legacy modernization with event-driven design',
            technologies: ['C#', 'WinForms', 'WPF', 'XML', 'ASP.NET Core', 'Unit Testing', 'Clean Code']
        },
        {
            title: 'Software Developer',
            company: 'KoCoS Messtechnik AG',
            period: '2011 - 2018',
            description: 'Measurement data visualization, embedded device management, high-performance data storage protocols. Started as trainee, graduated as best in the state 2014',
            technologies: ['C#', 'WinForms', 'DevExpress', 'Embedded Systems', 'Data Protocols']
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
        const radius = Math.min(centerX, centerY) - 80; // More padding for labels
        
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
            
            // Add labels with better positioning
            const labelX = centerX + Math.cos(angle) * (radius + 20);
            const labelY = centerY + Math.sin(angle) * (radius + 20);
            
            ctx.fillStyle = '#c8c3bc';
            ctx.font = '12px "Source Sans Pro", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif';
            
            // Smart text alignment based on position
            if (Math.cos(angle) > 0.1) {
                ctx.textAlign = 'left';
            } else if (Math.cos(angle) < -0.1) {
                ctx.textAlign = 'right';
            } else {
                ctx.textAlign = 'center';
            }
            
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

<div class="min-h-screen py-12" style="background: linear-gradient(135deg, #111827 0%, #1e3a8a 50%, #111827 100%); background-attachment: fixed;">
    <div class="max-w-6xl mx-auto px-4">
        
        <!-- Header -->
        <div class="text-center mb-12">
            <h1 class="text-5xl font-bold text-white mb-4">Michael Martin</h1>
            <p class="text-xl text-blue-300 mb-2">Expert Consultant & .NET Developer</p>
            <p class="text-lg text-gray-300 mb-6">13+ years experience • Best in the state 2014 • Team Leader</p>
            <!-- <button 
                on:click={downloadPDF}
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center mx-auto space-x-2"
            >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span>Download Resume PDF</span>
            </button> -->
        </div>
        
        <div class="grid lg:grid-cols-3 gap-8">
            
            <!-- Left Column -->
            <div class="lg:col-span-1 space-y-6">
                
                <!-- Skills Radar Chart -->
                <!-- <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-xl font-bold text-white mb-4">Technical Skills</h3>
                    <div class="flex justify-center">
                        <canvas 
                            bind:this={canvas}
                            width="300" 
                            height="300"
                            class="max-w-full w-80 h-80"
                        ></canvas>
                    </div>
                </div> -->
                
               
                <!-- Certifications -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-xl font-bold text-white mb-4">Certifications</h3>
                    <div class="space-y-4">
                        {#each certifications as cert}
                            <div class="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg">
                                <!-- Certification Badge -->
                                <div class="w-20 h-20 flex items-center justify-center flex-shrink-0">
                                    {#if cert.logo}
                                        <img 
                                            src={cert.logo} 
                                            alt={cert.name}
                                            class="w-20 h-20 object-contain"
                                            loading="lazy"
                                        />
                                    {:else}
                                        <!-- Fallback icon for Ausbilderschein -->
                                        <div class="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                            <svg class="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                            </svg>
                                        </div>
                                    {/if}
                                </div>
                                
                                <div class="flex-1">
                                    <h4 class="text-white font-semibold text-sm">{cert.name}</h4>
                                    <p class="text-gray-400 text-xs">{cert.provider}</p>
                                    <p class="text-gray-300 text-xs mt-1">{cert.description}</p>
                                </div>
                                
                            </div>
                        {/each}
                    </div>
                </div>

                                <!-- Contact Info -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-xl font-bold text-white mb-4">Contact</h3>
                    <div class="space-y-3 text-gray-300">
                        <!-- <div class="flex items-center space-x-3">
                            <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>mmartin@outlook.de</span>
                        </div> -->
                        <div class="flex items-center space-x-3">
                            <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                            <span>Frankfurt/Rhein-Main, Germany</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                            </svg>
                            <a href="https://www.linkedin.com/in/michael-martin-dev/" target="_blank" class="hover:text-blue-300">linkedin.com/in/michael-martin-dev</a>
                        </div>
                    </div>
                </div>

                <!-- Daily Toolbox -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-xl font-bold text-white mb-4">Daily Toolbox</h3>
                    <div class="grid grid-cols-1 gap-3">
                        {#each dailyTools as tool}
                            <div class="flex items-center space-x-3 p-2 bg-gray-700/30 rounded-lg">
                                <div class="text-xl flex-shrink-0">
                                    {tool.icon}
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h4 class="text-white font-medium text-sm truncate">{tool.name}</h4>
                                    <p class="text-gray-400 text-xs">{tool.category}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                
            </div>
            
            <!-- Right Column -->
            <div class="lg:col-span-2 space-y-6">
                
                <!-- About -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-2xl font-bold text-white mb-4">About</h3>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        Expert Consultant and .NET Developer with 13+ years of professional experience spanning desktop applications, 
                        web development, and data engineering. Graduated as the <strong class="text-blue-300">best in the state of Hesse 2014</strong> 
                        with 96 points in IT Specialist Application Development.
                    </p>
                    <p class="text-gray-300 leading-relaxed">
                        Currently working as Expert Consultant at valantic ACE GmbH on enterprise data governance solutions and banking data pipeline projects. 
                        Strong background in team leadership, having led teams of 9+ people while driving strategic architecture decisions and modern development practices.
                        Passionate about clean code, mentoring, and continuous learning.
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
                
                <!-- Key Projects & Achievements -->
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 class="text-2xl font-bold text-white mb-6">Key Projects & Achievements</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-gray-700/50 rounded-lg p-4">
                            <h4 class="text-lg font-semibold text-white mb-2">FixMyTex (Open Source)</h4>
                            <p class="text-gray-300 text-sm mb-3">AI-powered grammar assistant desktop application</p>
                            <div class="flex flex-wrap gap-1">
                                <span class="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">C#</span>
                                <span class="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">WPF</span>
                                <span class="bg-orange-600/20 text-orange-300 px-2 py-1 rounded text-xs">AI</span>
                                <span class="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs">Github</span>
                            </div>
                        </div>
                        <div class="bg-gray-700/50 rounded-lg p-4">
                            <h4 class="text-lg font-semibold text-white mb-2">Data Governance Platform</h4>
                            <p class="text-gray-300 text-sm mb-3">Enterprise data management with React/.NET 8</p>
                            <div class="flex flex-wrap gap-1">
                                <span class="bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded text-xs">React</span>
                                <span class="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">.NET 8</span>
                                <span class="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">TypeScript</span>
                            </div>
                        </div>
                        <div class="bg-gray-700/50 rounded-lg p-4">
                            <h4 class="text-lg font-semibold text-white mb-2">Banking Data Pipeline</h4>
                            <p class="text-gray-300 text-sm mb-3">Social media data analysis for financial sector</p>
                            <div class="flex flex-wrap gap-1">
                                <span class="bg-red-600/20 text-red-300 px-2 py-1 rounded text-xs">Ruby</span>
                                <span class="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">PostgreSQL</span>
                                <span class="bg-yellow-600/20 text-yellow-300 px-2 py-1 rounded text-xs">Data Pipeline</span>
                            </div>
                        </div>
                        <div class="bg-gray-700/50 rounded-lg p-4">
                            <h4 class="text-lg font-semibold text-white mb-2">🏆 Best in the state 2014</h4>
                            <p class="text-gray-300 text-sm mb-3">Best graduate in state of Hesse (96/100 points)</p>
                            <div class="flex flex-wrap gap-1">
                                <span class="bg-yellow-600/20 text-yellow-300 px-2 py-1 rounded text-xs">Achievement</span>
                                <span class="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs">Excellence</span>
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