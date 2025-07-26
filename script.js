/**
 * This script uses the Intersection Observer API to add a 'is-visible' class
 * to project cards when they enter the viewport. This triggers a fade-in
 * and slide-up animation defined in the CSS.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Set up the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Select all elements with the .project-card class
    const cards = document.querySelectorAll('.project-card');
    
    // Observe each card
    cards.forEach(card => {
        observer.observe(card);
    });
});
