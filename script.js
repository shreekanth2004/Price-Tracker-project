// static/script.js

document.addEventListener('DOMContentLoaded', () => {
    const trackForm = document.getElementById('track-form');

    if (trackForm) {
        trackForm.addEventListener('submit', function() {
            const trackButton = document.getElementById('track-button');
            const buttonText = trackButton.querySelector('.button-text');
            const buttonLoader = trackButton.querySelector('.button-loader');

            // Disable the button to prevent multiple submissions
            trackButton.disabled = true;

            // Change text and show spinner
            if (buttonText) buttonText.textContent = 'Adding...';
            if (buttonLoader) buttonLoader.classList.remove('d-none');
        });
    }
});

/**
 * Displays a toast notification on the screen. (This function is unchanged)
 * @param {string} message The message to display.
 * @param {boolean} isError If true, the toast will have an error-style background.
 */
function showToast(message, isError = false) {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: isError 
                ? "linear-gradient(to right, #e53935, #b71c1c)" // Red gradient for error
                : "linear-gradient(to right, #00b09b, #96c93d)", // Green gradient for success
        },
        onClick: function(){} // Callback after click
    }).showToast();
}