//list view change 

const menuIcon = document.getElementById("menuIcon");
const sidePanel = document.getElementById("sidePanel");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// Open panel
menuIcon.onclick = () => {
  sidePanel.classList.add("active");
  overlay.classList.add("active");
};

// Close panel
closeBtn.onclick = () => {
  sidePanel.classList.remove("active");
  overlay.classList.remove("active");
};

// Close by clicking outside
overlay.onclick = () => {
  sidePanel.classList.remove("active");
  overlay.classList.remove("active");
};
