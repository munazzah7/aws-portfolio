// ================================
// DARK MODE
// ================================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeToggle.textContent = "☀️";
    }
    else{
        themeToggle.textContent = "🌙";
    }

});


// ================================
// SCROLL ANIMATION
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

sections.forEach((section)=>{
    observer.observe(section);
});