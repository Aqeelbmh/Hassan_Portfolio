// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#3A6EA5'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#3A6EA5',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Set dark mode as default
document.body.classList.add('dark-mode');

// Typing Animation
const typed = new Typed('.typing-text', {
    strings: [
        'Aspiring Accountant',
        'Budget Planner',
        'Tax Learner',
        'Audit Assistant'
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true
});

// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});

// Scroll Progress
const scrollProgress = document.querySelector('.scroll-progress-bar');
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Navigation and Smooth Scroll
const navLinks = document.querySelectorAll('.nav-links a');
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navLinksContainer.classList.toggle('open');
    document.body.classList.toggle('menu-open');
    
    // Toggle hamburger icon
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinksContainer.contains(e.target) && !navToggle.contains(e.target)) {
        navLinksContainer.classList.remove('open');
        document.body.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        document.body.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation to child elements
            const staggerElements = entry.target.querySelectorAll('.stagger-reveal > *');
            staggerElements.forEach((el, index) => {
                el.style.animationDelay = `${0.1 * index}s`;
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.section-transition').forEach(section => {
    observer.observe(section);
});

// Ripple Effect
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    ripple.classList.add('ripple');
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

document.querySelectorAll('.ripple-effect').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Tilt Effect
const tiltElements = document.querySelectorAll('.tilt-effect');
tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = (y - centerY) / 10;
        const tiltY = (centerX - x) / 10;
        
        element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Sample Data (Replace with your actual data)
const educationData = [
    {
        title: 'Bachelor degree in Accounting',
        institution: 'University of Singaperbangsa Karawang',
        year: '2021 - Present',
        link: 'https://www.linkedin.com/school/universitas-singaperbangsa-karawang/',
        description: 'Accounting, Finance, and Management'
    },
    {
        title: 'Economic lyceum for gifted students',
        institution: 'High School Diploma',
        year: '2016 - 2021',
        link: 'https://www.linkedin.com/school/economic-lyceum-for-gifted-students-in-dushanbe/',
        description: 'General Education'
    },
    {
        title: 'Lyceum Rahnamo',
        institution: 'High School Diploma',
        year: '2010 - 2016',
        link: 'https://g.co/kgs/5CkX3Bt',
        description: 'General Education'
    }
];

const experienceData = [
    {
        position: 'Junior Specialist in Remote Service Center',
        company: 'OJSC "ALIF BANK"',
        location: 'Tajikistan, Dushanbe',
        duration: 'January 2022 – April 2022',
        description: [
            'Provided customer support through remote channels, addressing inquiries and resolving issues with efficiency and professionalism',
            'Assisted in the onboarding of clients to digital banking services, ensuring seamless user experiences',
            'Maintained and updated client records in compliance with company standards and confidentiality policies',
            'Supported senior specialists in handling complex cases and escalations',
            'Gained foundational knowledge of remote banking operations and customer service tools'
        ]
    },
    {
        position: 'Specialist in Remote Service Center',
        company: 'OJSC "ALIF BANK"',
        location: 'Tajikistan, Dushanbe',
        duration: 'April 2022 – August 2022',
        description: [
            'Took ownership of advanced customer service tasks, delivering solutions to complex inquiries and escalated issues',
            'Enhanced service quality by analyzing customer feedback and identifying areas for improvement',
            'Collaborated with cross-functional teams to optimize remote banking processes and introduce new features',
            'Trained and mentored junior specialists to ensure consistent service standards across the team',
            'Leveraged technical skills to troubleshoot system issues, contributing to improved operational efficiency'
        ]
    },
    {
        position: 'Customer Service Volunteer',
        company: 'OJSC "ALIF BANK"',
        location: 'Tajikistan, Dushanbe',
        duration: 'December 2022 (15 days)',
        description: [
            'Assisted customers with inquiries and provided effective solutions, enhancing their overall service experience',
            'Developed communication and interpersonal skills by engaging with diverse clientele',
            'Gained foundational experience in handling customer-related tasks and managing service requests'
        ]
    },
    {
        position: 'Auto Credit Consultant Volunteer',
        company: 'OJSC "ALIF BANK"',
        location: 'Tajikistan, Dushanbe',
        duration: 'December 2022 (15 days)',
        description: [
            'Supported customers in understanding and applying for auto credit services',
            'Guided clients through the loan application process, ensuring clarity and satisfaction',
            'Strengthened analytical skills by reviewing credit applications and advising clients based on their financial profiles'
        ]
    },
    {
        position: 'Inbound Logistics',
        company: 'KKN Unsika',
        location: 'Indonesia',
        duration: 'June 26 – August 5, 2024',
        description: [
            'Managed resource distribution and logistics for program activities',
            'Coordinated food and supplies to support participants and the community',
            'Enhanced teamwork and organizational skills through effective collaboration'
        ]
    },
    {
        position: 'Service Learning Program Participant',
        company: 'SULAM (Service Learning Malaysia - University for Society)',
        location: 'Indonesia',
        duration: 'May 30 - June 2, 2023',
        description: [
            'Collaborated with peers and faculty to address societal challenges through community-based economic projects',
            'Contributed to capacity-building initiatives, applying theoretical knowledge to real-world scenarios',
            'Fostered cross-cultural communication and teamwork within an international academic setting',
            'Conducted assessments of local economic conditions to propose sustainable solutions'
        ]
    },
    {
        position: 'Service Learning Program Participant',
        company: 'SULAM (Service Learning Malaysia - University for Society)',
        location: 'Malaysia',
        duration: 'May 16 - May 25, 2024',
        description: [
            'Engaged in fieldwork that focused on empowering communities through innovative economic strategies',
            'Coordinated with local stakeholders to implement impactful projects, emphasizing sustainability',
            'Enhanced problem-solving skills by addressing complex challenges in a multicultural environment',
            'Presented findings and recommendations to academic and community leaders, showcasing analytical and collaborative abilities'
        ]
    }
];

const certificationsData = [
    {
        title: 'Kangaroo Math Competition',
        issuer: 'Kangaroo Math',
        year: '2019',
        date: '14.04.2019',
        description: 'Certificate for the successful completion of Kangaroo Math competition',
        link: 'https://drive.google.com/file/d/1p_Q2xyk81H-8Lpks-R1hlDu6vGXcsXnd/view?usp=sharing'
    },
    {
        title: '6th International English Language Competition',
        issuer: 'HIPPO 2018 English Without Borders',
        year: '2018',
        date: '2018',
        description: 'Certificate for the participation in the Preliminary Round',
        link: 'https://drive.google.com/file/d/1FJ2ILJIQFAvQoH5r9klxORb_ZY1LhA8l/view?usp=sharing'
    },
    {
        title: 'Microsoft Excel Mastery for Finance Webinar',
        issuer: 'Smart Path',
        year: '2024',
        date: '2024',
        description: 'Certificate for participation in Microsoft Excel Mastery for Finance Webinar',
        link: 'https://drive.google.com/file/d/1IVnuq2yWoP3KfsA2C4jXJvXETdtAXfOX/view?usp=sharing'
    },
    {
        title: 'ISFL23 Participation: Enriching International Security',
        issuer: 'UNSIKA, Faculty of Law',
        year: '2023',
        date: '18th December 2023',
        description: 'Certificate for participation in International Seminar Faculty of Law',
        link: 'https://drive.google.com/file/d/1mAKqsjRLY9vB0WbKjqjroLUyNh6Gfj9z/view?usp=drive_link'
    },
    {
        title: 'MINI BIPA: Popular Culture in Indonesia Certificate',
        issuer: 'Faculty of Humanities, Universitas Diponegoro',
        year: '2023',
        date: '03rd Augest 2024',
        description: 'Certificate for participation in MINI BIPA: Popular Culture in Indonesia, Online Summer Course Program',
        link: 'https://drive.google.com/file/d/1cACGCv94ANbQmGndbtoXQlSXJ0Cf-H09/view?usp=sharing'
    },
    {
        title: 'Certificate of Appreciation: Guest Speaker at 2nd FSS Special Edition',
        issuer: 'ULCC',
        year: '2022',
        date: '27th November 2022',
        description: 'Certificate of Appreciation for being a guest speaker at the 2nd FSS Special Edition',
        link: 'https://drive.google.com/file/d/1h3VLHYx6ioeCGh5bSP6fMNTd5th6wg9q/view?usp=sharing'
    },
    {
        title: 'Most Impactful Recommendations Award Inbound Logistics Teams',
        issuer: 'Universiti Teknologi Mara',
        year: '',
        date: '',
        description: 'Certificate for the Most Impactful Recommendations Award Inbound Logistics Teams',
        link: 'https://drive.google.com/file/d/1ep-9Zg32lt_BMjJTuuc8c63mtVeRD4Da/view?usp=sharing'
    },
    {
        title: 'UITM - UNSIKA International SULAM Program Participant',
        issuer: 'UITM and UNSIKA',
        year: '2023',
        date: 'May - July 2023',
        description: 'Certificate for the UITM - UNSIKA International SULAM Program Participant',
        link: 'https://drive.google.com/file/d/1nZe-uHLZyl8w6b7Z2UB4OfrEJQP3YZLL/view?usp=sharing'
    },
    {
        title: 'Singaperbangsa English Proficiency Test(SEP-T) S1 Level',
        issuer: 'UPA Bahasa, Universitas Singaperbangsa Karawang',
        year: '2024',
        date: '10th November 2024',
        description: 'Certificate for the Singaperbangsa English Proficiency Test(SEP-T) S1 Level',
        link: 'https://drive.google.com/file/d/1HjekFmC-rYtr2O-daSCyq8VxuNdQ61_v/view?usp=sharing'
    },
    {
        title: 'Interational BIPA Seminar 2024 - Organizing Committee',
        issuer: 'FKIP UNSIKA',
        year: '2024',
        date: '15th November 2024',
        description: 'Certificate for the Interational BIPA Seminar 2024 - Organizing Committee',
        link: 'https://drive.google.com/file/d/1tFHcyxI8hviMC0QsUBEN1HLb5ypP8DoK/view?usp=sharing'
    },
    {
        title: 'Innovation and Technology Festival 2024',
        issuer: 'LPPM, Universitas Singaperbangsa Karawang',
        year: '2024',
        date: '16th - 17th November 2024',
        description: 'Certificate for the Innovation and Technology Festival 2024',
        link: 'https://drive.google.com/file/d/1OUYcbIQirP-JkCNrAuDoq6a-Jf2XX0KE/view?usp=sharing'
    },
    {
        title: 'Certificate of Participation, Penyuluhan dan Bimbingan Kerja Tahun 2024',
        issuer: 'Universitas Singaperbangsa Karawang',
        year: '2024',
        date: '22th - 26th July 2024',
        description: 'Certificate for the participation in the Penyuluhan dan Bimbingan Kerja Tahun 2024',
        link: 'https://drive.google.com/file/d/1hOS14_R3Cvz5nzflH8SgOx5cPzcILFkc/view?usp=sharing'
    },
    {
        title: 'Heads Up, Buddies Voyage',
        issuer: '(SMF) Student Sekretarist of the Faculty of Accountancy, Universiti Teknologi Mara',
        year: '2023/2024',
        date: '21st - 25th May 2024',
        description: 'Certificate for the participation in the Heads Up, Buddies Voyage',
        link: 'https://drive.google.com/file/d/16ztgzU7ZxfV699NDEvL8aS17vBrLl6pG/view?usp=sharing'
    },
    {
        title: 'Data Analytics Job Simulation',
        issuer: 'Deloitte',
        year: '2025',
        date: '08th April 2025',
        description: 'Certificate for the Completion of Data Analytics Job Simulation',
        link: 'https://drive.google.com/file/d/1NZ-N-3yHbmuCiZFwGEOsJvBrVx__ISoZ/view?usp=sharing'
    },
    {
        title: 'Debate Cources Participation',
        issuer: '',
        year: '2019',
        date: 'July 08th - August 19th 2019',
        description: 'Certificate for the participation in the Debate Cources',
        link: 'https://drive.google.com/file/d/169dzHIj2W9txxPYYRV_swVbLZaIxf57Q/view?usp=sharing'
    },
    {
        title: 'Webinar: Strengthening Cybersecurity in the Cyber World',
        issuer: 'Nusa Putra University',
        year: '2024',
        date: '27th July 2024',
        description: 'Certificate for the participation in the Webinar: Strengthening Cybersecurity in the Cyber World',
        link: 'https://drive.google.com/file/d/18t6RXdFDVXaeoofkRL2eTVAQ3yy73Q4P/view?usp=sharing'
    }
];

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

const languagesData = [
    { name: 'English', level: 90 },
    { name: 'Russian', level: 95 },
    { name: 'Tajik', level: 100 },
    { name: 'Indonesian', level: 85 }
];

// Create Education Cards
function createEducationCards() {
    const educationTimeline = document.querySelector('.education-timeline');
    if (!educationTimeline) {
        console.error('Education timeline element not found');
        return;
    }

    educationData.forEach((edu, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const card = document.createElement('div');
        card.className = 'timeline-card';
        
        card.innerHTML = `
            <div class="timeline-header">
                <h3 class="timeline-title">${edu.title}</h3>
                <span class="timeline-date">${edu.year}</span>
            </div>
            <h4 class="timeline-subtitle">${edu.institution}</h4>
            <p class="timeline-description">${edu.description}</p>
            <a href="${edu.link}" target="_blank" rel="noopener noreferrer" class="timeline-link">
                View Institution <i class="fas fa-external-link-alt"></i>
            </a>
        `;
        
        // Add click event listener to the link
        const link = card.querySelector('.timeline-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (edu.link) {
                window.open(edu.link, '_blank', 'noopener,noreferrer');
            }
        });
        
        timelineItem.appendChild(card);
        educationTimeline.appendChild(timelineItem);
    });
}

// Create Experience Cards
function createExperienceCards() {
    const experienceTimeline = document.querySelector('.experience-timeline');
    experienceData.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const card = document.createElement('div');
        card.className = 'timeline-card';
        card.innerHTML = `
            <div class="timeline-header">
                <h3 class="timeline-title">${exp.position}</h3>
                <span class="timeline-date">${exp.duration}</span>
            </div>
            <h4 class="timeline-subtitle">${exp.company} | ${exp.location}</h4>
            <div class="timeline-description">
                <ul>
                    ${exp.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
        
        timelineItem.appendChild(card);
        experienceTimeline.appendChild(timelineItem);
    });
}

// Create Certification Cards
function createCertificationCards() {
    const certificationsContainer = document.querySelector('.certifications-grid');
    if (!certificationsContainer) return;

    certificationsData.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'certification-card';

        // Validate and format the date
        const formattedDate = cert.date ? cert.date : 'Date not specified';
        
        card.innerHTML = `
            <div class="certification-header">
                <div class="certification-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <div>
                    <h3 class="certification-title">${cert.title}</h3>
                    <p class="certification-issuer">${cert.issuer || 'Issuer not specified'}</p>
                </div>
            </div>
            <span class="certification-date">${formattedDate}</span>
            <p class="certification-description">${cert.description}</p>
            <a href="${cert.link}" class="certification-link" target="_blank" rel="noopener noreferrer" 
               onclick="event.preventDefault(); window.open('${cert.link}', '_blank', 'noopener,noreferrer');">
                View Certificate
                <i class="fas fa-external-link-alt"></i>
            </a>
        `;

        // Add error handling for the link
        const link = card.querySelector('.certification-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            try {
                if (cert.link) {
                    window.open(cert.link, '_blank', 'noopener,noreferrer');
                } else {
                    console.error('No link provided for certificate:', cert.title);
                }
            } catch (error) {
                console.error('Error opening certificate link:', error);
            }
        });

        certificationsContainer.appendChild(card);
    });
}

// Skills Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillsCategories = document.querySelectorAll('.skills-category');

    // Initialize all categories as visible
    skillsCategories.forEach(category => {
        category.style.display = 'block';
        category.style.opacity = '1';
        category.style.transform = 'translateY(0)';
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter skills categories
            skillsCategories.forEach(category => {
                if (filter === 'all' || category.classList.contains(filter)) {
                    category.style.display = 'block';
                    setTimeout(() => {
                        category.style.opacity = '1';
                        category.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    category.style.opacity = '0';
                    category.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        category.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Create Skills
    function createSkills() {
        Object.entries(skillsData).forEach(([category, skills]) => {
            const container = document.getElementById(`${category}-skills`);
            if (!container) return;
            
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

// Create Languages
function createLanguages() {
    const languagesContainer = document.querySelector('.languages-flex');
    languagesData.forEach(lang => {
        const langItem = document.createElement('div');
        langItem.className = 'language-item';
        langItem.innerHTML = `
            <div class="language-header">
                <h3>${lang.name}</h3>
                <span>${lang.level}%</span>
            </div>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${lang.level}%"></div>
            </div>
        `;
        languagesContainer.appendChild(langItem);
    });
}

// Error Handling and Performance Optimizations
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize dark mode
        document.body.classList.add('dark-mode');
    
        // Initialize components with error handling
        const initComponents = () => {
            try {
                createEducationCards();
                createExperienceCards();
                createCertificationCards();
                createSkills();
                createLanguages();
            } catch (error) {
                console.error('Error initializing components:', error);
            }
        };

        // Initialize animations and particles with error handling
        const initAnimations = () => {
            try {
                initHeroAnimations();
                initParticles();
            } catch (error) {
                console.error('Error initializing animations:', error);
            }
        };

        // Initialize smooth scroll with error handling
        const initSmoothScroll = () => {
            try {
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    });
                });
            } catch (error) {
                console.error('Error initializing smooth scroll:', error);
            }
        };

        // Initialize mobile navigation with error handling
        const initMobileNav = () => {
            try {
                const navToggle = document.querySelector('.nav-toggle');
                const navLinks = document.querySelector('.nav-links');

                if (navToggle && navLinks) {
                    navToggle.addEventListener('click', () => {
                        navLinks.classList.toggle('open');
                    });

                    document.addEventListener('click', (e) => {
                        if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
                            navLinks.classList.remove('open');
                        }
                    });
                }
            } catch (error) {
                console.error('Error initializing mobile navigation:', error);
            }
        };

        // Initialize all features
        initComponents();
        initAnimations();
        initSmoothScroll();
        initMobileNav();

        // Add performance monitoring
        const performanceMetrics = {
            startTime: performance.now(),
            componentsLoaded: false,
            animationsLoaded: false
        };

        // Log performance metrics
        window.addEventListener('load', () => {
            const loadTime = performance.now() - performanceMetrics.startTime;
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        });

    } catch (error) {
        console.error('Critical error during initialization:', error);
    }
});

// Optimize external link handling
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        try {
            window.open(link.href, '_blank', 'noopener,noreferrer');
        } catch (error) {
            console.error('Error opening external link:', error);
        }
    });
});

// Optimize contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        try {
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                contactForm.reset();
                
                setTimeout(() => {
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                }, 3000);
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            submitButton.innerHTML = '<i class="fas fa-times"></i> Error!';
            console.error('Form submission error:', error);
            
            setTimeout(() => {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            }, 3000);
        }
    });
}

// Optimize scroll handling
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const scrollProgress = document.querySelector('.scroll-progress-bar');
        if (scrollProgress) {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }

        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    }, 100);
});

// Optimize loading screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
});

// Hero Section Animations
const heroContent = document.querySelector('.hero-content');
const heroElements = document.querySelectorAll('.reveal-element');
const heroButtons = document.querySelectorAll('.hero-buttons .btn');

// Initialize animations
function initHeroAnimations() {
    // Add initial styles
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    
    // Animate elements in sequence
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
        heroContent.style.transition = 'all 0.8s ease-out';
        
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });

        // Add hover effects to buttons
        heroButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-5px)';
                button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
        });
    }, 500);
}

// Initialize particles
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('open');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('open');
        }
    });

    // Scroll behavior
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class based on scroll position
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active section
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });

        lastScrollTop = scrollTop;
    });

    // Smooth scroll for navigation links
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('open');
            }
        });
    });
});

// Responsive behavior handling
function handleResponsiveBehavior() {
    const isMobile = window.innerWidth <= 768;
    const isLandscape = window.innerHeight <= 500 && window.innerWidth > window.innerHeight;
    
    // Adjust hero section height for landscape mode
    if (isLandscape) {
        document.querySelector('.hero').style.minHeight = 'auto';
    }
    
    // Handle mobile navigation
    if (isMobile) {
        const navLinks = document.querySelector('.nav-links');
        const navToggle = document.querySelector('.nav-toggle');
        
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('open');
            
            // Prevent body scroll when mobile menu is open
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Adjust font sizes based on viewport
    const adjustFontSizes = () => {
        const vw = window.innerWidth;
        const baseSize = Math.max(16, Math.min(20, vw / 75));
        document.documentElement.style.fontSize = `${baseSize}px`;
    };
    
    adjustFontSizes();
    window.addEventListener('resize', adjustFontSizes);
}

// Initialize responsive behavior
document.addEventListener('DOMContentLoaded', () => {
    handleResponsiveBehavior();
    
    // Handle orientation changes
    window.addEventListener('orientationchange', () => {
        setTimeout(handleResponsiveBehavior, 100);
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResponsiveBehavior, 250);
    });
});