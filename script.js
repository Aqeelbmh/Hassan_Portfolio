// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

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
    loop: true
});

// Ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.innerHTML = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    pointer-events: none;
    transform: scale(0);
    animation: ripple-effect 0.6s linear;
    z-index: 2;
}
@keyframes ripple-effect {
    to {
        transform: scale(2.5);
        opacity: 0;
    }
}`;
document.head.appendChild(rippleStyle);

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


const technicalSkillsData = [
    'Financial Analysis',
    'Data Analysis & Reporting',
    'Microsoft Excel & Office Suite',
    'Accounting Software',
    'Data Classification',
    'Data Cleaning',
    'Report Creation',
    'Digital & Social Media Literacy'
];

const softSkillsData = [
    'Critical Thinking',
    'Problem-Solving',
    'Attention to Detail',
    'Effective Communication',
    'Team Collaboration',
    'Adaptability',
    'Time Management',
    'Interpersonal Skills'
];

const professionalSkillsData = [
    'Banking & Remote Services',
    'Academic Research',
    'Teaching & Training',
    'Multilingual Communication',
    'Customer Service Excellence',
    'Process Optimization',
    'Project Management',
    'Quality Assurance'
];

const languagesData = [
    {
        language: 'Tajik',
        level: 'Native',
        proficiency: 100
    },
    {
        language: 'Persian',
        level: 'Native',
        proficiency: 100
    },
    {
        language: 'English',
        level: 'Upper-Intermediate',
        proficiency: 80
    },
    {
        language: 'Russian',
        level: 'Excellent',
        proficiency: 90
    },
    {
        language: 'Indonesian',
        level: 'Intermediate',
        proficiency: 70
    }
];

// Function to create education cards
function createEducationCards() {
    const educationContent = document.querySelector('.education-content');
    educationData.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <h3>${edu.title}</h3>
            <p class="institution">${edu.institution}</p>
            <p class="year">${edu.year}</p>
            <p class="description">${edu.description}</p>
            <a href="${edu.link}" target="_blank" class="btn glow-btn">View Certificate</a>
        `;
        educationContent.appendChild(card);
    });
}

// Function to create experience cards
function createExperienceCards() {
    const experienceContent = document.querySelector('.experience-content');
    experienceData.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experience-card';
        
        const descriptionList = exp.description.map(item => 
            `<li>${item}</li>`
        ).join('');
        
        card.innerHTML = `
            <div class="experience-header">
                <h3>${exp.position}</h3>
                <p class="experience-company">${exp.company}</p>
                <p class="experience-location">${exp.location}</p>
                <span class="experience-duration">${exp.duration}</span>
            </div>
            <div class="experience-description">
                <ul>
                    ${descriptionList}
                </ul>
            </div>
        `;
        experienceContent.appendChild(card);
    });
}

// Function to create certification cards
function createCertificationCards() {
    const certificationsContent = document.querySelector('.certifications-content');
    certificationsData.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'certification-card';
        card.innerHTML = `
            <div class="certification-header">
                <h3>${cert.title}</h3>
                <span class="certification-year">${cert.year}</span>
            </div>
            <div class="certification-body">
                <p class="certification-issuer">${cert.issuer}</p>
                <p class="certification-date">${cert.date}</p>
                <p class="certification-description">${cert.description}</p>
            </div>
            <div class="certification-footer">
                <a href="${cert.link}" target="_blank" class="btn glow-btn">
                    <span>View Certificate</span>
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        certificationsContent.appendChild(card);
    });
}

// Function to create skills
function createSkills() {
    const technicalSkillsGrid = document.getElementById('technical-skills');
    const softSkillsGrid = document.getElementById('soft-skills');
    const professionalSkillsGrid = document.getElementById('professional-skills');

    // Mapping of skills to FontAwesome icon classes
    const skillIcons = {
        // Technical Skills
        'Financial Analysis': 'fas fa-chart-line',
        'Data Analysis & Reporting': 'fas fa-chart-pie',
        'Microsoft Excel & Office Suite': 'fas fa-file-excel',
        'Accounting Software': 'fas fa-calculator',
        'Data Classification': 'fas fa-tags',
        'Data Cleaning': 'fas fa-broom',
        'Report Creation': 'fas fa-file-alt',
        'Digital & Social Media Literacy': 'fas fa-share-alt',

        // Soft Skills
        'Critical Thinking': 'fas fa-brain',
        'Problem-Solving': 'fas fa-lightbulb',
        'Attention to Detail': 'fas fa-search',
        'Effective Communication': 'fas fa-comments',
        'Team Collaboration': 'fas fa-users',
        'Adaptability': 'fas fa-sync-alt',
        'Time Management': 'fas fa-clock',
        'Interpersonal Skills': 'fas fa-handshake',

        // Professional Skills
        'Banking & Remote Services': 'fas fa-university',
        'Academic Research': 'fas fa-book',
        'Teaching & Training': 'fas fa-chalkboard-teacher',
        'Multilingual Communication': 'fas fa-language',
        'Customer Service Excellence': 'fas fa-headset',
        'Process Optimization': 'fas fa-cogs',
        'Project Management': 'fas fa-tasks',
        'Quality Assurance': 'fas fa-check-circle'
    };

    // Helper function to create skill item with icon
    function createSkillItem(skill) {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';

        const icon = document.createElement('i');
        icon.className = skillIcons[skill] || 'fas fa-star'; // default icon if not found
        skillItem.appendChild(icon);

        const skillName = document.createElement('h3');
        skillName.textContent = skill;
        skillItem.appendChild(skillName);

        return skillItem;
    }

    // Create technical skills
    technicalSkillsData.forEach(skill => {
        const skillItem = createSkillItem(skill);
        technicalSkillsGrid.appendChild(skillItem);
    });

    // Create soft skills
    softSkillsData.forEach(skill => {
        const skillItem = createSkillItem(skill);
        softSkillsGrid.appendChild(skillItem);
    });

    // Create professional skills
    professionalSkillsData.forEach(skill => {
        const skillItem = createSkillItem(skill);
        professionalSkillsGrid.appendChild(skillItem);
    });
}

// Function to create languages
function createLanguages() {
    const languagesContent = document.querySelector('.languages-content');
    languagesData.forEach(lang => {
        const item = document.createElement('div');
        item.className = 'language-item';
        
        item.innerHTML = `
            <div class="language-header">
                <h3 class="language-name">${lang.language}</h3>
                <span class="language-level">${lang.level}</span>
            </div>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${lang.proficiency}%"></div>
            </div>
        `;
        
        languagesContent.appendChild(item);
    });
}

// Intersection Observer for section reveals
function revealSectionsOnScroll() {
    const sections = document.querySelectorAll('.about, .education, .experience, .certifications, .skills, .languages, .contact');
    const observer = new window.IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Ripple effect for .glow-btn
function addGlowBtnRipple() {
    document.querySelectorAll('.glow-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const circle = document.createElement('span');
            circle.classList.add('ripple');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            circle.style.width = circle.style.height = size + 'px';
            circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
            circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
            btn.appendChild(circle);
            setTimeout(() => circle.remove(), 600);
        });
    });
}

// Navbar hamburger menu and active link highlighting
function setupProfessionalNavbar() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinksAll = navLinks.querySelectorAll('a');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    navLinksAll.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize all content
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    setupProfessionalNavbar();
    revealSectionsOnScroll();
    addGlowBtnRipple();
    
    // Create all content first
    try {
        console.log('Creating education cards...');
        createEducationCards();
        console.log('Creating experience cards...');
        createExperienceCards();
        console.log('Creating certification cards...');
        createCertificationCards();
        console.log('Creating skills...');
        createSkills();
        console.log('Creating languages...');
        createLanguages();
        console.log('All content created successfully');
    } catch (error) {
        console.error('Error creating content:', error);
    }
    
    // Hide loading screen after a short delay to ensure content is rendered
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            console.log('Hiding loading screen');
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        } else {
            console.error('Loading screen element not found');
        }
    }, 1000);
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add floating animation to profile image
const profileImg = document.querySelector('.profile-img');
if (profileImg) {
    profileImg.classList.add('floating');
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
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

// Section Animation
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Activate reveal animations within the section
            const revealElements = entry.target.querySelectorAll('.reveal-element, .reveal-left, .reveal-right');
            revealElements.forEach(el => {
                el.classList.add('revealed');
            });
            
            // Activate staggered animations
            const staggerElements = entry.target.querySelectorAll('.stagger-reveal');
            staggerElements.forEach(el => {
                el.classList.add('revealed');
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll for Navigation Links
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

// Loading screen functionality
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
});

// Initialize scroll progress bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
});

// Add ripple effect to buttons
const rippleButtons = document.querySelectorAll('.ripple-effect');
rippleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX - this.getBoundingClientRect().left;
        const y = e.clientY - this.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Apply tilt effect to cards
const tiltCards = document.querySelectorAll('.tilt-effect');
const cardRotation = 10; // Default rotation value matching CSS variable

tiltCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const cardRect = this.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;
        
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -cardRotation;
        const rotateY = ((x - centerX) / centerX) * cardRotation;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});