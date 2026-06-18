// Interactive elements and scroll animations

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.85)';
        }
    });

    // Scroll Reveal Animation with Intersection Observer
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Fetch LeetCode Stats dynamically
    async function fetchLeetCodeStats() {
        const username = 'fb1dKeCGeH';
        const url = `https://alfa-leetcode-api.onrender.com/${username}/solved`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            
            if (data.solvedProblem !== undefined) {
                document.getElementById('lc-solved').textContent = data.solvedProblem;
                // Calculate progress based on a goal of 300 problems
                const goal = 300;
                const percentage = Math.min((data.solvedProblem / goal) * 100, 100);
                
                // Animate width after a slight delay for better effect
                setTimeout(() => {
                    document.getElementById('lc-progress-fill').style.width = `${percentage}%`;
                }, 500);
            }
        } catch (error) {
            console.error('Error fetching LeetCode stats:', error);
            document.getElementById('lc-solved').textContent = '75+'; // Fallback
            document.getElementById('lc-progress-fill').style.width = '25%'; // Fallback
        }
    }

    fetchLeetCodeStats();
});
