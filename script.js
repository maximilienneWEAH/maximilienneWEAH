document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.toggle-header');
    const reveals = document.querySelectorAll('.reveal');

    // Function to toggle content visibility
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling; // Get the next sibling (the content div)
            content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
        });
    });

    // Function to reveal sections on scroll
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        console.log(windowHeight);
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;

            // Check if the element is in view
            if (revealTop < windowHeight - 50) { // Adjust threshold as needed
                reveal.classList.add('visible');
            } else {
                reveal.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Initial call to reveal elements if they are already in view
    revealOnScroll();
});