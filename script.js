
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".love-container");
  for (let i = 0; i < 30; i++) {
    const love = document.createElement("div");
    love.classList.add("love");
    love.style.left = Math.random() * 100 + "vw";
    love.style.animationDuration = (Math.random() * 3 + 2) + "s";
    love.style.opacity = Math.random();
    container.appendChild(love);
  }
});

// Bintang love jatuh
function createLove() {
  const love = document.createElement("div");
  love.classList.add("love");
  love.style.left = Math.random() * 100 + "vw";
  love.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.querySelector(".love-container").appendChild(love);
  setTimeout(() => love.remove(), 5000);
}
setInterval(createLove, 300);

const style = document.createElement('style');
style.innerHTML = `
  .love {
    width: 20px;
    height: 20px;
    background-image: url('https://cdn-icons-png.flaticon.com/512/833/833472.png');
    background-size: cover;
    position: absolute;
    top: 0;
    animation: fall linear;
    z-index: 0;
  }
  @keyframes fall {
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

<script>
  // Tombol easter egg
  document.getElementById("easterEgg").addEventListener("click", function () {
    window.location.href = "ucapan.html"
  });
</script>
