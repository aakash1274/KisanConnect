document.addEventListener('DOMContentLoaded', function() {
    // Create voice assistant button
    const button = document.createElement('button');
    button.id = 'start-button';
    button.className = 'voice-btn';
    button.innerHTML = '<i class="fas fa-microphone"></i>';
    
    // Style the button
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #4CAF50;
        border: none;
        color: white;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        z-index: 1000;
    `;
    
    // Add button to page
    document.body.appendChild(button);
});
