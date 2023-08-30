// Function to handle clicking on the menu links
// Function to handle clicking on the menu links
function navigateToPage(pageName) {
    window.location.href = pageName + ".html";
}

// Add click event listeners to menu links
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageName = link.getAttribute('href').split('.')[0];
            navigateToPage(pageName);
        });
    });
});



function moveButton() {
    var maxWidth = window.innerWidth - button.offsetWidth;
    var maxHeight = window.innerHeight - button.offsetHeight;
    
    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);
    
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

button.addEventListener("mouseover", moveButton);
