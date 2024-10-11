        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('navbar-scroll'); 
            } else {
                navbar.classList.remove('navbar-scroll'); 
            }
        });
    
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const logo = document.getElementById('logo');
    
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            logo.classList.toggle('hidden'); 
            mobileMenu.classList.toggle('rounded-lg');
            mobileMenu.classList.toggle('shadow-lg');
        });
    
        
        const mobileMenuButtonClose = document.getElementById('mobile-menu-button-close');
        mobileMenuButtonClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            logo.classList.remove('hidden'); 
        });
    
        
        const mobileSubmenuButtons = document.querySelectorAll('.mobile-submenu-button');
    
        mobileSubmenuButtons.forEach(button => {
            button.addEventListener('click', () => {
                const submenu = button.nextElementSibling;
                submenu.classList.toggle('hidden');
            });
        });
    
        

        // 
        const slides = document.querySelectorAll('.slide');
        const sliderNav = document.querySelector('.slider-nav');
        let currentSlide = 0;
        let slideInterval;
    
        slides.forEach((slide, index) => {
            const button = document.createElement('button');
            button.addEventListener('click', () => {
                clearInterval(slideInterval);
                goToSlide(index);
                startSlider();
            });
            sliderNav.appendChild(button);
        });
    
        const goToSlide = (index) => {
            slides[currentSlide].classList.remove('active');
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            updateNavButtons();
        };
    
        const updateNavButtons = () => {
            sliderNav.querySelectorAll('button').forEach((button, index) => {
                button.classList.toggle('active', index === currentSlide);
            });
        };
    
        const startSlider = () => {
            slideInterval = setInterval(() => {
                const nextSlide = (currentSlide + 1) % slides.length;
                goToSlide(nextSlide);
            }, 5000); 
        };
    
        startSlider();