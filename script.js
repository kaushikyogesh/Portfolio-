const btn = document.getElementById("theme-btn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
});

// ===== Animated Stars =====
 stars = document.createElement("div");
stars.className = "stars";
document.body.appendChild(stars);

for (i = 0; i < 150; i++) {
     star = document.createElement("span");
    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.opacity = Math.random();
    star.style.animation = twinkle (2 + Math.random() * 3);
    stars.appendChild(star);
}

// ===== Floating Particles =====
 particles = document.createElement("div");
particles.className = "particles";
document.body.appendChild(particles);

for ( i = 0; i < 30; i++) {
     p = document.createElement("span");
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDelay = Math.random() * 8 + "s";
    particles.appendChild(p);
}