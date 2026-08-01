// ==========================
// DARK MODE
// ==========================

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent="☀️";
    }
    else{
        themeBtn.textContent="🌙";
    }

});

// ==========================
// SCROLL ANIMATION
// ==========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.classList.add("show");
        }

    });

});

// Show first section immediately

window.dispatchEvent(new Event("scroll"));


// ==========================
// HAMBURGER MENU
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    });

});