document.addEventListener('DOMContentLoaded', function() {
    // 3 ডট মেনু এলিমেন্ট সিলেক্ট
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // মেনু টগল ফাংশন
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // মেনু খোলা থাকলে স্ক্রল বন্ধ
        if(mainNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    
    // 3 ডট মেনু ক্লিক ইভেন্ট
    menuToggle.addEventListener('click', toggleMenu);
    
    // মেনু লিংকে ক্লিক করলে মেনু বন্ধ হবে
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // স্মুথ স্ক্রোলিং
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
