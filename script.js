document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > 50) { // Change after scrolling 50px
            navbar.classList.add('bg-dark-scrolled');
            navbar.classList.remove('bg-dark'); // Optional: adjust based on your initial navbar setup
        } else {
            navbar.classList.remove('bg-dark-scrolled');
            navbar.classList.add('bg-dark'); // Optional: adjust based on your initial navbar setup
        }
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll);
});

// You'd also need to add a corresponding class to style.css for 'bg-dark-scrolled':
/*
.bg-dark-scrolled {
    background-color: #1a1a1a !important; 
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
*/