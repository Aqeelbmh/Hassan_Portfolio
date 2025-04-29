// Skills Data and Creation
document.addEventListener('DOMContentLoaded', function() {
    // Skills Data
    const skillsData = {
        technical: [
            { name: 'Financial Analysis', icon: 'fas fa-chart-line' },
            { name: 'Tax Planning', icon: 'fas fa-calculator' },
            { name: 'Auditing', icon: 'fas fa-search-dollar' },
            { name: 'Microsoft Excel', icon: 'fas fa-file-excel' },
            { name: 'Accounting Software', icon: 'fas fa-cogs' }
        ],
        soft: [
            { name: 'Communication', icon: 'fas fa-comments' },
            { name: 'Teamwork', icon: 'fas fa-users' },
            { name: 'Problem Solving', icon: 'fas fa-puzzle-piece' },
            { name: 'Time Management', icon: 'fas fa-clock' },
            { name: 'Adaptability', icon: 'fas fa-random' }
        ],
        professional: [
            { name: 'Banking', icon: 'fas fa-university' },
            { name: 'Project Management', icon: 'fas fa-tasks' },
            { name: 'Quality Assurance', icon: 'fas fa-check-circle' },
            { name: 'Customer Service', icon: 'fas fa-headset' },
            { name: 'Data Analysis', icon: 'fas fa-database' }
        ]
    };

    // Create Skills
    function createSkills() {
        Object.entries(skillsData).forEach(([category, skills]) => {
            const container = document.getElementById(`${category}-skills`);
            if (!container) {
                console.log('Container not found:', category);
                return;
            }
            
            // Clear existing content
            container.innerHTML = '';
            
            skills.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.innerHTML = `
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                `;
                container.appendChild(skillItem);
            });
        });
    }

    // Initialize skills
    createSkills();
}); 