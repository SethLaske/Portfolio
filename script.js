$(document).ready(function () {
    const pageLinks = document.querySelectorAll('.page-link');
        const sections = document.querySelectorAll('.page');

        // Add a click event listener to each page link
        pageLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Hide all sections
                sections.forEach(section => {
                    section.style.display = 'none';
                });

                // Get the target section ID from the link's href
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                // Display the target section
                if (targetSection) {
                    if (targetId === "about-me") {
                        targetSection.style.display = 'flex';
                    } else {
                        targetSection.style.display = 'block';
                    }
                }
            });
        });

    // Show the initial section (e.g., About Me) when the page loads
    document.getElementById("about-me").style.visibility = "visible";

    // Get the path from the URL (e.g., "/branch-battles")
    const path = window.location.pathname;

    // Load the appropriate project page based on the path
    switch (path) {
        case '/branch-battles':
            $('#project-page').load('branch-battles.html');
            break;
        case '/bee-free':
            $('#project-page').load('bee-free.html');
            break;
        // Add more cases for other project pages as needed
        default:
            // Handle cases for unrecognized paths (e.g., show a default page)
            break;
    }
});
