// Function to redirect after a delay
function redirectToURL() {
    console.log("Redirecting in 0.5 seconds...");
    // Wait for 500 milliseconds (0.5 seconds)
    setTimeout(function() {
        console.log("Redirecting now...");
        // Redirect to the specified URL
        window.location.href = "https://gold-ibis-ar0j1z489rc5k6w2.builder-preview.com/";
    }, 500);
}

// Ensure the DOM is fully loaded before redirecting
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
    redirectToURL();
});
