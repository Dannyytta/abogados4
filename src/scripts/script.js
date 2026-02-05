        // Initialize AOS animation library
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mainNav = document.getElementById('main-nav');

        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('#main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if(this.getAttribute('href') === '#') return;
                
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form Validation
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Validate Name
            const name = document.getElementById('name');
            if(name.value.trim() === '') {
                isValid = false;
                name.style.boxShadow = '0 0 0 2px #e53e3e';
            } else {
                name.style.boxShadow = 'none';
            }
            
            // Validate Email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email.value)) {
                isValid = false;
                email.style.boxShadow = '0 0 0 2px #e53e3e';
            } else {
                email.style.boxShadow = 'none';
            }
            
            // Validate Service
            const service = document.getElementById('service');
            if(service.value === '') {
                isValid = false;
                service.style.boxShadow = '0 0 0 2px #e53e3e';
            } else {
                service.style.boxShadow = 'none';
            }
            
            // Validate Message
            const message = document.getElementById('message');
            if(message.value.trim() === '') {
                isValid = false;
                message.style.boxShadow = '0 0 0 2px #e53e3e';
            } else {
                message.style.boxShadow = 'none';
            }
            
            // If form is valid, submit it (in a real scenario, you would send to server)
            if(isValid) {
                alert('Gracias por su mensaje. Nos pondremos en contacto con usted pronto.');
                contactForm.reset();
            }
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if(window.scrollY > 100) {
                header.style.boxShadow = '0 5px 20px rgba(2, 12, 27, 0.7)';
                header.style.background = 'rgba(10, 25, 47, 0.95)';
            } else {
                header.style.boxShadow = 'none';
                header.style.background = 'rgba(10, 25, 47, 0.9)';
            }
        });

        // Testimonial slider
        let currentTestimonial = 0;
        const testimonials = [
            {
                quote: "El equipo de Lexford logró resolver mi complejo caso corporativo con resultados excepcionales. Su conocimiento del derecho mercantil y su enfoque estratégico fueron determinantes para el éxito.",
                name: "Carlos Martínez",
                case: "Caso Corporativo",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
                quote: "Excelente servicio en mi divorcio. Lograron un acuerdo justo en tiempo récord. Su profesionalismo y empatía hicieron el proceso mucho más llevadero.",
                name: "Ana Rodríguez",
                case: "Caso de Familia",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
            },
            {
                quote: "Representación impecable en mi caso laboral. Obtuvieron una indemnización mayor de lo esperado. Muy agradecido por su dedicación y resultados.",
                name: "Javier López",
                case: "Caso Laboral",
                image: "https://randomuser.me/api/portraits/men/45.jpg"
            }
        ];

        function updateTestimonial() {
            const testimonialCard = document.querySelector('.testimonial-card');
            const testimonial = testimonials[currentTestimonial];
            
            testimonialCard.innerHTML = `
                <p class="testimonial-quote">"${testimonial.quote}"</p>
                <div class="client-info">
                    <div class="client-image">
                        <img src="${testimonial.image}" alt="Cliente satisfecho">
                    </div>
                    <div class="client-details">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.case}</p>
                    </div>
                </div>
            `;
            
            // Re-initialize AOS for new content
            AOS.refreshHard();
            
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }

        // Rotate testimonials every 5 seconds
        setInterval(updateTestimonial, 5000);