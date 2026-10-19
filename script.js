// ===================================
// Language Translations
// ===================================
const translations = {
    ka: {
        'nav.home': 'მთავარი',
        'nav.about': 'ჩემ შესახებ',
        'nav.skills': 'უნარები',
        'nav.projects': 'პროექტები',
        'nav.certifications': 'სერტიფიკატები',
        'nav.achievements': 'მიღწევები',
        'nav.stem': 'STEM და ლიდერობა',
        'nav.video': 'ვიდეო',
        'nav.contact': 'კონტაქტი',
        'hero.headline': 'Full-Stack დეველოპერი | ტექნოლოგიების ენთუზიასტი | STEM კლუბის ლიდერი',
        'hero.intro': 'მე მიყვარს პროგრამირება, ხელოვნური ინტელექტი, რობოტიკა, სტარტაპები და პრაქტიკული STEM განათლება. ვმუშაობ ტექნოლოგიურ პროექტებზე და ვეხმარები ახალგაზრდებს ტექნოლოგიების შესწავლაში.',
        'hero.projects': 'ჩემი პროექტები',
        'hero.about': 'ჩემ შესახებ',
        'hero.contact': 'დამიკავშირდი',
        'about.title': 'ჩემ შესახებ',
        'about.p1': 'ჩემი სახელია შოთიკო ბეროშვილი. ვცხოვრობ გურჯაანში, საქართველო. მაინტერესებს full-stack დეველოპმენტი, ხელოვნური ინტელექტი, რობოტიკა, სტარტაპები, აგრარული ტექნოლოგიები და STEM განათლება.',
        'about.p2': 'მიყვარს ციფრული პროექტების შექმნა, ახალი ტექნოლოგიების შესწავლა, პრაქტიკული იდეების ექსპერიმენტირება და ახალგაზრდების დახმარება ტექნოლოგიებისა და სტარტაპ იდეების შესწავლაში.',
        'about.p3': 'ჩემი გამოცდილება მოიცავს პროგრამირების სწავლებას, სტარტაპ კონცეფციებს, რობოტიკას, ტექნიკურ პროექტებსა და ახალგაზრდულ STEM აქტივობებს.',
        'about.p4': 'მუდმივად ვსწავლობ და ვეძებ შესაძლებლობებს, რათა შევქმნა სასარგებლო ტექნოლოგიური გადაწყვეტები, თანამშრომლობ სხვებთან და მივიღო პრაქტიკული გამოცდილება.',
        'skills.title': 'უნარები',
        'skills.web': 'Web დეველოპმენტი',
        'skills.frontend': 'Frontend დეველოპმენტი',
        'skills.backend': 'Backend დეველოპმენტი',
        'skills.fullstack': 'Full-stack დეველოპმენტი',
        'skills.programming': 'პროგრამირება',
        'skills.technology': 'ტექნოლოგია და პროტოტიპირება',
        'skills.electronics': 'ელექტრონიკა და სენსორები',
        'skills.robotics': 'რობოტიკა',
        'skills.ai': 'AI ხელსაწყოები და პროტოტიპირება',
        'projects.title': 'პროექტები',
        'projects.status.concept': 'კონცეფცია',
        'projects.status.inprogress': 'განვითარებაში',
        'projects.status.completed': 'დასრულებული',
        'projects.dist.title': 'DIST — Peer Learning Platform',
        'projects.dist.desc': 'Peer-learning პლატფორმის კონცეფცია, რომელიც აკავშირებს სტუდენტ-მენტორებს სწავლებთან ხელმისაწვდომი აკადდემიური მხარდაჭერისთვის.',
        'projects.dist.feature1': 'მენტორების მოძებნა საგნის, ფასისა და დროის მიხედვით',
        'projects.dist.feature2': 'მენტორის პროფილები და რეიტინგები',
        'projects.dist.feature3': 'ონლაინ სწავლების ინტეგრაცია',
        'projects.arduino.title': 'Arduino-Based Composting Device',
        'projects.arduino.desc': 'Arduino-ზე დაფუძნებული ექსპერიმენტული მოწყობილობა კომპოსტირების პირობების მონიტორინგისა და აპარატურის კონტროლისთვის.',
        'projects.arduino.feature1': 'Arduino Uno',
        'projects.arduino.feature2': 'DHT11 ტემპერატურისა და ტენიანობის სენსორი',
        'projects.arduino.feature3': 'MQ-7 გაზის სენსორი',
        'projects.arduino.feature4': 'ნიადაგის ტენიანობის სენსორი',
        'projects.arduino.feature5': 'I2C LCD დისპლეი',
        'projects.arduino.feature6': 'ვენტილატორისა და მიქსერის კონტროლი',
        'projects.agrolink.title': 'AgroLink',
        'projects.agrolink.desc': 'აგრარული ტექნოლოგიების მარკეტფლეისის კონცეფცია, რომელიც აკავშირებს ფერმერებს ტრაქტორის ოპერატორებთან და სასოფლო-სამეურნეო ტექნიკის სერვისებთან.',
        'projects.agrolink.feature1': 'ტექნიკის სია',
        'projects.agrolink.feature2': 'აღჭურვილობის სპეციფიკაციები',
        'projects.agrolink.feature3': 'სერვისის დაჯავშნა',
        'projects.agrolink.feature4': 'ლოკაციის ინფორმაცია',
        'projects.agrolink.feature5': 'კომუნიკაცია და განხილვები',
        'projects.dog.title': 'AI Dog Breed Recognition',
        'projects.dog.desc': 'AI აპლიკაციის კონცეფცია ძაღლის ჯიშების ამოსაცნობად სურათებიდან და ინფორმაციის მიღება ქართულ ენაზე.',
        'projects.dog.feature1': 'სურათის ატვირთვა',
        'projects.dog.feature2': 'ვებკამერის შეყვანა',
        'projects.dog.feature3': 'AI-ზე დაფუძნნებული კლასიფიკაცია',
        'projects.vineyard.title': 'Georgian Vineyard and Agriculture Simulator',
        'projects.vineyard.desc': 'ინტერაქტიული სასოფლო-სამეურნეო სიმულატორის კონცეფცია, რომელიც შექმნილია ქართული ვენახებისა და სოფლის მეურნეობის შთაგონებით.',
        'projects.vineyard.feature1': 'ვენახის მართვა',
        'projects.vineyard.feature2': 'სეზონური ყურძნის მოყვანა',
        'projects.vineyard.feature3': 'მოვლა, შეკვრა და ვენახის მოვლა',
        'projects.vineyard.feature4': 'ყურძნის აღება',
        'projects.vineyard.feature5': 'სასოფლო-სამეურნეო პროდუქტების გაყიდვა',
        'projects.vineyard.feature6': 'ღვინოს წარმოება და ქართული აგრარული კულტურა',
        'certifications.title': 'სერტიფიკატები',
        'certifications.google.title': 'Google Ads Certification — 2026',
        'certifications.view': 'სერტიფიკატის ნახვა',
        'certifications.tbc.title': 'TBC TechSchool — Backend Development',
        'certifications.step.title': 'IT Academy STEP — IT Support',
        'certifications.tbc': 'Backend Development კურსი',
        'certifications.step': 'IT Support კურსი',
        'achievements.title': 'მიღწევები',
        'achievements.robotics': 'რობოტიკის კონკურსებში მონაწილეობა',
        'achievements.robotics.desc': 'მონაწილეობა რობოტიკის კონკურსებსა და ტექნოლოგიურ შეჯიბრებში.',
        'achievements.startup': 'სტარტაპ კონცეფციების განვითარება',
        'achievements.startup.desc': 'სტარტაპ იდეებისა და ტექნოლოგიური პროტოტიპების შექმნა და განვითარება.',
        'achievements.gita': 'GITA პროგრამებში მონაწილეობა',
        'achievements.gita.desc': 'მონაწილეობა ტექნოლოგიურ განათლებისა და ინოვაციის პროგრამებში.',
        'achievements.fablab': 'FabLab ტექნიკური მოხალისეობა',
        'achievements.fablab.desc': 'ტექნიკური მოხალისეობა და მხარდაჭერა FabLab გარემოში.',
        'achievements.projects': 'ტექნიკური პროექტები',
        'achievements.projects.desc': 'პროგრამირების, ელექტრონიკისა და AI-სთან დაკავშირებული პროექტების შექმნა.',
        'stem.title': 'STEM და ლიდერობა',
        'stem.p1': 'მე ვაწყობ და ვხელმძღვანელობ STEM კლუბის აქტივობებს გურჯაანში და ვეხმარები ახალგაზრდებს ტექნოლოგიების, თანამშრომლობისა და იდეების პროექტებად ქცევის შესწავლაში.',
        'stem.p2': 'ჩემი მიზანია შევიყვანო ახალგაზრდები STEM-სა და ტექნოლოგიებში, ხელი შევუწყო გუნდურ მუშაობასა და კოლექტიურ პრობლემის გადაჭრას, მხარი შევუწყო სტარტაპ იდეების გენერაციასა და პროტოტიპირებას, ხელი შევუწყო პროექტების პრეზენტაციასა და კონსტრუქტიულ განხილვას.',
        'stem.p3': 'მჯერა, რომ პრაქტიკული სწავლება და ახალგაზრდული ინოვაცია მნიშვნელოვან როლს ასრულებს მომავლის ტექნოლოგიურ ლიდერების აღზრდაში.',
        'video.title': 'გამორჩეული ვიდეო',
        'video.fallback': 'ვიდეოს ჩატვირთვა შეუძლებელია',
        'video.watch': 'ნახვა Facebook-ზე',
        'contact.title': 'კონტაქტი',
        'contact.intro': 'დამიკავშირდით პროექტების, თანამშრომლობის, ტექნოლოგიებისა და სწავლების შესაძლებლობების შესახებ.',
        'contact.placeholder': 'დაამატეთ თქვენი ელ-ფოსტა და LinkedIn ბმულები აქ',
        'footer.copyright': '© 2026 Shotiko Beroshvili. ყველა უფლება დაცულია.'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.certifications': 'Certifications',
        'nav.achievements': 'Achievements',
        'nav.stem': 'STEM & Leadership',
        'nav.video': 'Featured Video',
        'nav.contact': 'Contact',
        'hero.headline': 'Full-Stack Developer | Technology Enthusiast | STEM Club Leader',
        'hero.intro': 'I am interested in software development, AI, robotics, entrepreneurship, agricultural technology, and practical STEM education. I work on technology projects and help young people explore technology and entrepreneurship.',
        'hero.projects': 'Explore Projects',
        'hero.about': 'About Me',
        'hero.contact': 'Contact Me',
        'about.title': 'About Me',
        'about.p1': 'My name is Shotiko Beroshvili. I am from Gurjaani, Georgia. I am interested in full-stack development, artificial intelligence, robotics, entrepreneurship, agricultural technology, and STEM education.',
        'about.p2': 'I enjoy developing digital projects, learning new technologies, experimenting with practical ideas, and helping young people explore technology and entrepreneurship.',
        'about.p3': 'My experience includes programming education, startup concepts, robotics, technical projects, and youth STEM activities.',
        'about.p4': 'I am continuously learning and looking for opportunities to develop useful technology solutions, collaborate with others, and gain practical experience.',
        'skills.title': 'Skills',
        'skills.web': 'Web Development',
        'skills.frontend': 'Frontend Development',
        'skills.backend': 'Backend Development',
        'skills.fullstack': 'Full-stack Development',
        'skills.programming': 'Programming',
        'skills.technology': 'Technology & Prototyping',
        'skills.electronics': 'Electronics & Sensors',
        'skills.robotics': 'Robotics',
        'skills.ai': 'AI Tools & Prototyping',
        'projects.title': 'Projects',
        'projects.status.concept': 'Concept',
        'projects.status.inprogress': 'In Development',
        'projects.status.completed': 'Completed',
        'projects.dist.title': 'DIST — Peer Learning Platform',
        'projects.dist.desc': 'A peer-learning platform concept designed to connect learners with student mentors for affordable academic support.',
        'projects.dist.feature1': 'Find mentors by subject, price, time, and availability',
        'projects.dist.feature2': 'Mentor profiles and ratings',
        'projects.dist.feature3': 'Online learning and meeting integration',
        'projects.arduino.title': 'Arduino-Based Composting Device',
        'projects.arduino.desc': 'An Arduino-based experimental device for monitoring composting-related conditions and controlling hardware components.',
        'projects.arduino.feature1': 'Arduino Uno',
        'projects.arduino.feature2': 'DHT11 temperature and humidity sensor',
        'projects.arduino.feature3': 'MQ-7 gas sensor',
        'projects.arduino.feature4': 'Soil moisture sensor',
        'projects.arduino.feature5': 'I2C LCD display',
        'projects.arduino.feature6': 'Fan and mixer motor control',
        'projects.agrolink.title': 'AgroLink',
        'projects.agrolink.desc': 'An agricultural technology marketplace concept intended to connect farmers with tractor operators and agricultural machinery services.',
        'projects.agrolink.feature1': 'Machinery listings',
        'projects.agrolink.feature2': 'Equipment specifications',
        'projects.agrolink.feature3': 'Service bookings',
        'projects.agrolink.feature4': 'Location information',
        'projects.agrolink.feature5': 'Communication and reviews',
        'projects.dog.title': 'AI Dog Breed Recognition',
        'projects.dog.desc': 'An AI application concept for recognizing dog breeds from images and providing information in Georgian.',
        'projects.dog.feature1': 'Image upload',
        'projects.dog.feature2': 'Webcam input',
        'projects.dog.feature3': 'AI-based classification',
        'projects.vineyard.title': 'Georgian Vineyard and Agriculture Simulator',
        'projects.vineyard.desc': 'An interactive farming simulator concept inspired by Georgian vineyards and agriculture.',
        'projects.vineyard.feature1': 'Vineyard management',
        'projects.vineyard.feature2': 'Seasonal grape cultivation',
        'projects.vineyard.feature3': 'Pruning, tying, and vineyard care',
        'projects.vineyard.feature4': 'Harvesting grapes',
        'projects.vineyard.feature5': 'Selling agricultural products',
        'projects.vineyard.feature6': 'Wine production and traditional Georgian agricultural culture',
        'certifications.title': 'Certifications',
        'certifications.google.title': 'Google Ads Certification — 2026',
        'certifications.view': 'View Certificate',
        'certifications.tbc.title': 'TBC TechSchool — Backend Development',
        'certifications.step.title': 'IT Academy STEP — IT Support',
        'certifications.tbc': 'Backend Development course',
        'certifications.step': 'IT Support course',
        'achievements.title': 'Achievements',
        'achievements.robotics': 'Robotics Competition Participation',
        'achievements.robotics.desc': 'Participation in robotics competitions and technology challenges.',
        'achievements.startup': 'Startup Concept Development',
        'achievements.startup.desc': 'Developing startup ideas and technology prototypes.',
        'achievements.gita': 'GITA Program Participation',
        'achievements.gita.desc': 'Participation in technology education and innovation programs.',
        'achievements.fablab': 'FabLab Technical Volunteering',
        'achievements.fablab.desc': 'Technical volunteering and support in FabLab environment.',
        'achievements.projects': 'Technical Projects',
        'achievements.projects.desc': 'Creating projects related to programming, electronics, and AI.',
        'stem.title': 'STEM & Leadership',
        'stem.p1': 'I organize and lead STEM club activities in Gurjaani, helping young people explore technology, collaboration, and turning ideas into projects.',
        'stem.p2': 'My goal is to introduce young people to STEM and technology, foster teamwork and collaborative problem-solving, support startup ideation and prototyping, and facilitate project presentations and constructive feedback.',
        'stem.p3': 'I believe that practical learning and youth innovation play an important role in developing future technology leaders.',
        'video.title': 'Featured Video',
        'video.fallback': 'Video loading unavailable',
        'video.watch': 'Watch on Facebook',
        'contact.title': 'Contact',
        'contact.intro': 'Connect with me about projects, collaboration, technology, and learning opportunities.',
        'contact.placeholder': 'Add your email and LinkedIn links here',
        'footer.copyright': '© 2026 Shotiko Beroshvili. All rights reserved.'
    }
};

// ===================================
// Language Switching
// ===================================
let currentLang = 'ka';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Save to localStorage
    try {
        localStorage.setItem('language', lang);
    } catch (e) {
        // localStorage not available, silently fail
    }
}

function initLanguage() {
    // Try to load from localStorage
    try {
        const savedLang = localStorage.getItem('language');
        if (savedLang && (savedLang === 'ka' || savedLang === 'en')) {
            setLanguage(savedLang);
        }
    } catch (e) {
        // localStorage not available, use default
    }
}

// ===================================
// Mobile Navigation
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function toggleMenu() {
    const isOpen = navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
}

function closeMenu() {
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
}

// ===================================
// Active Section Indicator
// ===================================
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===================================
// Back to Top Button
// ===================================
const backToTop = document.getElementById('back-to-top');

function toggleBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                closeMenu();
            }
        });
    });
}

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    initLanguage();
    
    // Language switcher
    const langSwitch = document.getElementById('lang-switch');
    if (langSwitch) {
        langSwitch.addEventListener('click', function() {
            const newLang = currentLang === 'ka' ? 'en' : 'ka';
            setLanguage(newLang);
        });
    }
    
    // Mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Scroll event listeners
    window.addEventListener('scroll', function() {
        updateActiveSection();
        toggleBackToTop();
    });
    
    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
    }
    
    // Initial active section update
    updateActiveSection();
});
