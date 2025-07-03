// Simple Terminal Portfolio Navigation

// Function to show different sections
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active state from all navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show the selected section
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Add active state to the clicked button
    const activeButton = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Show about section by default
    showSection('about');
    
    // Add click handlers to terminal controls (optional visual effects)
    document.querySelector('.control.close')?.addEventListener('click', function() {
        if (confirm('Close terminal?')) {
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.close();
            }, 500);
        }
    });
    
    document.querySelector('.control.minimize')?.addEventListener('click', function() {
        const container = document.querySelector('.terminal-container');
        container.style.transform = 'scale(0.9)';
        container.style.opacity = '0.7';
        setTimeout(() => {
            container.style.transform = 'scale(1)';
            container.style.opacity = '1';
        }, 300);
    });
    
    document.querySelector('.control.maximize')?.addEventListener('click', function() {
        const container = document.querySelector('.terminal-container');
        container.style.transform = 'scale(1.02)';
        setTimeout(() => {
            container.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Add keyboard navigation (optional)
    document.addEventListener('keydown', function(e) {
        // Press 1-4 to navigate sections
        const keyMap = {
            '1': 'about',
            '2': 'projects', 
            '3': 'skills',
            '4': 'contact'
        };
        
        if (keyMap[e.key]) {
            showSection(keyMap[e.key]);
        }
    });
});

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            scroll-behavior: smooth;
        }
    `;
    document.head.appendChild(style);
});
