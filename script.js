const contactBtn = document.getElementById("contactBtn");
const clickInfo = document.getElementById("clickInfo");
const themeToggle = document.getElementById("themeToggle");

let clicks = 0;

contactBtn.addEventListener("click", () => {
  clicks += 1;
  clickInfo.textContent = `Thanks for visiting MahamCodes. Contact intent recorded (${clicks}).`;
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("alt-accent");
});
