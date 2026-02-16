  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
  }

  function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  }

  openBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
  document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".swiper-slide");
      const img = card.querySelector("img");
      const cart = document.getElementById("navbar-cart");

      if (!img || !cart) return;

      const imgRect = img.getBoundingClientRect();
      const cartRect = cart.getBoundingClientRect();

      const flyingImg = img.cloneNode(true);
      flyingImg.style.position = "fixed";
      flyingImg.style.left = imgRect.left + "px";
      flyingImg.style.top = imgRect.top + "px";
      flyingImg.style.width = imgRect.width + "px";
      flyingImg.style.zIndex = 40;
      flyingImg.style.pointerEvents = "none";
      flyingImg.style.transition =
        "all 0.7s cubic-bezier(.4,0,.2,1)";

      document.body.appendChild(flyingImg);

      requestAnimationFrame(() => {
        flyingImg.style.left =
          cartRect.left + cartRect.width / 2 - 10 + "px";
        flyingImg.style.top =
          cartRect.top + cartRect.height / 2 - 10 + "px";
        flyingImg.style.width = "20px";
        flyingImg.style.opacity = "0";
      });

      flyingImg.addEventListener("transitionend", () => {
        flyingImg.remove();
      });
    });
  });

cart.classList.add("scale-110");
setTimeout(() => {
  cart.classList.remove("scale-110");
}, 180);
