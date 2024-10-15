document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    
    const logo = document.getElementById("logo");
    const logoText = logo.textContent;
    const highlightedText = logoText
        .replace('D', '<span class="highlight-initials">D</span>')
        .replace('F', '<span class="highlight-initials">F</span>')
        .replace('S', '<span class="highlight-initials">S</span>'); 
    logo.innerHTML = highlightedText;

    const navLinksItems = document.querySelectorAll("#nav-links li a");
    navLinksItems.forEach(link => {
        const linkText = link.textContent;
        const highlightedLinkText = linkText
            .replace('I', '<span class="highlight-initials">I</span>')
            .replace('Q', '<span class="highlight-initials">Q</span>')
            .replace('C', '<span class="highlight-initials">C</span>')
            .replace('P', '<span class="highlight-initials">P</span>');
        link.innerHTML = highlightedLinkText;
    });
});
