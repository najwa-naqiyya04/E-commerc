  document.addEventListener("DOMContentLoaded", () => {
    const frames = document.querySelectorAll(".frame");
    const loader = document.getElementById("loading");

    let current = 0;

    // animasi maskot
    const animation = setInterval(() => {
      frames[current].classList.add("hidden");
      current = (current + 1) % frames.length;
      frames[current].classList.remove("hidden");
    }, 300);

    // selesai loading
    setTimeout(() => {
      clearInterval(animation);           // stop animasi
      loader.classList.add("opacity-0");  // fade out

      setTimeout(() => {
        window.location.href = "loginPage.html";
      }, 500); // tunggu fade
    }, 2500); // durasi loading (ms)
  });

window.addEventListener("load", () => {
    const mascot = document.getElementById("mascot");
    const welcomeText = document.getElementById("welcomeText");
    const subtitle = document.getElementById("subtitle");
    const shopBtn = document.getElementById("shopBtn");

    // STEP 1: maskot naik dikit
    setTimeout(() => {
        mascot.classList.add("-translate-y-6");
    }, 500);

    // STEP 2: text muncul
    setTimeout(() => {
        welcomeText.classList.remove("opacity-0", "translate-y-4");
    }, 1200);

    // STEP 3: subtitle muncul
    setTimeout(() => {
        subtitle.classList.remove("opacity-0", "translate-y-4");
    }, 1500);

    // STEP 4: button muncul
    setTimeout(() => {
        shopBtn.classList.remove("opacity-0", "translate-y-4");
    }, 1800);

    // STEP 5: floating animation
    setTimeout(() => {
        mascot.classList.add("floating");
    }, 2300);
    
});


const reveals = document.querySelectorAll('.reveal, .reveal-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.20
});

reveals.forEach(el => observer.observe(el));

