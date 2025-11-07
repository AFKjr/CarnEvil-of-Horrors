// Spooky Effects JavaScript

// Random screen flicker effect
function triggerScreenFlicker() 
{
    const flickerScreen = document.getElementById('flickerScreen');
    flickerScreen.classList.add('active');
    
    setTimeout(() => {
        flickerScreen.classList.remove('active');
    }, 100);
}

// Random flicker at intervals
function startRandomFlicker() 
{
    const minInterval = 3000; // 3 seconds
    const maxInterval = 5000; // 5 seconds

    const randomInterval = Math.random() * (maxInterval - minInterval) + minInterval;
    
    setTimeout(() => {
        triggerScreenFlicker();
        startRandomFlicker(); // Schedule next flicker
    }, randomInterval);
}

// Glitch effect on titles
function triggerGlitchEffect(element) 
{
    element.classList.add('active');
    
    setTimeout(() => {
        element.classList.remove('active');
    }, 300);
}

// Random glitch on section titles
function startRandomGlitch() 
{
    const glitchElements = document.querySelectorAll('.glitch');
    
    setInterval(() => {
        const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        triggerGlitchEffect(randomElement);
    }, 8000); // Every 8 seconds
}

// Create blood drip effect
function createBloodDrip() 
{
    const bloodContainer = document.getElementById('bloodDripsContainer');
    const drip = document.createElement('div');
    drip.className = 'blood-drip';
    
    // Random horizontal position
    drip.style.left = Math.random() * 100 + '%';
    
    // Random animation delay
    drip.style.animationDelay = Math.random() * 2 + 's';
    
    bloodContainer.appendChild(drip);
    
    // Remove drip after animation
    setTimeout(() => {
        drip.remove();
    }, 3000);
}

// Start blood drips at random intervals
function startBloodDrips() 
{
    setInterval(() => {
        // Create 3-6 drips
        const numberOfDrips = Math.floor(Math.random() * 4) + 3;
        for (let i = 0; i < numberOfDrips; i++) {
            setTimeout(() => {
                createBloodDrip();
            }, i * 200);
        }
    }, 1000); // Every 1 second
}

// Add glitch effect on hover for attraction cards
function addAttractionHoverEffects() 
{
    const attractionCards = document.querySelectorAll('.attraction-card');
    
    attractionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const title = card.querySelector('.attraction-title');
            if (Math.random() > 0.5) { // 50% chance
                title.classList.add('glitch');
                title.setAttribute('data-text', title.textContent);
                triggerGlitchEffect(title);
            }
        });
    });
}

// Flicker effect on ticket buttons
function addTicketButtonEffects() 
{
    const ticketButtons = document.querySelectorAll('.ticket-button');
    
    ticketButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            triggerScreenFlicker();
            
            // Change button text temporarily
            const originalText = button.textContent;
            button.textContent = 'NO ESCAPE...';
            button.style.backgroundColor = '#8b0000';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        });
    });
}

// Initialize all spooky effects
function initializeSpookyEffects() 
{
    startRandomFlicker();
    startRandomGlitch();
    startBloodDrips();
    addAttractionHoverEffects();
    addTicketButtonEffects();
}

// Start effects when page loads
window.addEventListener('load', () => {
    initializeSpookyEffects();
});
