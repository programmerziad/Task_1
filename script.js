// ========== ICONS ==========
const ICONS = [
  { id: "home", name: "Home", icon: "fa-solid fa-house" },
  { id: "search", name: "Search", icon: "fa-solid fa-magnifying-glass" },
  { id: "cart", name: "Cart", icon: "fa-solid fa-cart-shopping" },
  { id: "user", name: "User", icon: "fa-solid fa-user" },
  { id: "heart", name: "Favorite", icon: "fa-solid fa-heart" },
  { id: "phone", name: "Contact", icon: "fa-solid fa-phone" },
  { id: "settings", name: "Settings", icon: "fa-solid fa-gear" },
  { id: "bell", name: "Notification", icon: "fa-solid fa-bell" },
  { id: "camera", name: "Camera", icon: "fa-solid fa-camera" },
  { id: "star", name: "Rating", icon: "fa-solid fa-star" },
  { id: "trash", name: "Delete", icon: "fa-solid fa-trash" },
  { id: "download", name: "Download", icon: "fa-solid fa-download" },
  { id: "edit", name: "Edit", icon: "fa-solid fa-pen" },
  { id: "lock", name: "Lock", icon: "fa-solid fa-lock" },
  { id: "unlock", name: "Unlock", icon: "fa-solid fa-lock-open" },
  { id: "share", name: "Share", icon: "fa-solid fa-share-nodes" },
  { id: "info", name: "Info", icon: "fa-solid fa-circle-info" },
  { id: "question", name: "Help", icon: "fa-solid fa-circle-question" },
  { id: "calendar", name: "Calendar", icon: "fa-solid fa-calendar-days" },
  { id: "message", name: "Message", icon: "fa-solid fa-message" },
  { id: "map", name: "Map", icon: "fa-solid fa-map-location-dot" },
  { id: "music", name: "Music", icon: "fa-solid fa-music" },
  { id: "play", name: "Play", icon: "fa-solid fa-play" },
  { id: "pause", name: "Pause", icon: "fa-solid fa-pause" },
  { id: "stop", name: "Stop", icon: "fa-solid fa-stop" },
  { id: "volume", name: "Volume", icon: "fa-solid fa-volume-high" },
  { id: "mute", name: "Mute", icon: "fa-solid fa-volume-xmark" },
  { id: "clock", name: "Clock", icon: "fa-solid fa-clock" },
  { id: "globe", name: "Globe", icon: "fa-solid fa-globe" },
  { id: "wifi", name: "Wi-Fi", icon: "fa-solid fa-wifi" },
  { id: "battery", name: "Battery", icon: "fa-solid fa-battery-full" },
  { id: "folder", name: "Folder", icon: "fa-solid fa-folder" },
  { id: "file", name: "File", icon: "fa-solid fa-file" },
  { id: "upload", name: "Upload", icon: "fa-solid fa-upload" },
  { id: "tag", name: "Tag", icon: "fa-solid fa-tag" },
  { id: "gift", name: "Gift", icon: "fa-solid fa-gift" },
  { id: "sun", name: "Light Mode", icon: "fa-solid fa-sun" },
  { id: "moon", name: "Dark Mode", icon: "fa-solid fa-moon" },
  { id: "location", name: "Location", icon: "fa-solid fa-location-dot" },
  { id: "eye", name: "View", icon: "fa-solid fa-eye" },
  { id: "eye-slash", name: "Hide", icon: "fa-solid fa-eye-slash" },
  { id: "plus", name: "Add", icon: "fa-solid fa-plus" },
  { id: "minus", name: "Remove", icon: "fa-solid fa-minus" },
  { id: "arrow-up", name: "Up", icon: "fa-solid fa-arrow-up" },
  { id: "arrow-down", name: "Down", icon: "fa-solid fa-arrow-down" },
  { id: "arrow-left", name: "Left", icon: "fa-solid fa-arrow-left" },
  { id: "arrow-right", name: "Right", icon: "fa-solid fa-arrow-right" },
  { id: "cloud", name: "Cloud", icon: "fa-solid fa-cloud" },
  { id: "book", name: "Book", icon: "fa-solid fa-book" },
  { id: "chart", name: "Chart", icon: "fa-solid fa-chart-column" },
  { id: "check", name: "Check", icon: "fa-solid fa-check" },
  { id: "xmark", name: "Cancel", icon: "fa-solid fa-xmark" },
  { id: "thumbs-up", name: "Like", icon: "fa-solid fa-thumbs-up" },
  { id: "thumbs-down", name: "Dislike", icon: "fa-solid fa-thumbs-down" },
  { id: "comment", name: "Comment", icon: "fa-solid fa-comment" },
  { id: "paperclip", name: "Attachment", icon: "fa-solid fa-paperclip" },
  { id: "rocket", name: "Rocket", icon: "fa-solid fa-rocket" },
  { id: "car", name: "Car", icon: "fa-solid fa-car" },
  { id: "bus", name: "Bus", icon: "fa-solid fa-bus" },
  { id: "train", name: "Train", icon: "fa-solid fa-train" },
  { id: "plane", name: "Plane", icon: "fa-solid fa-plane" },
  { id: "shopping-bag", name: "Shopping Bag", icon: "fa-solid fa-bag-shopping" },
  { id: "credit-card", name: "Payment", icon: "fa-solid fa-credit-card" },
  { id: "leaf", name: "Nature", icon: "fa-solid fa-leaf" },
  { id: "bolt", name: "Energy", icon: "fa-solid fa-bolt" },
  { id: "fire", name: "Fire", icon: "fa-solid fa-fire" },
  { id: "trophy", name: "Trophy", icon: "fa-solid fa-trophy" }
];

// ========== ELEMENTS ==========
const iconsGrid = document.getElementById("iconsGrid");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const downloadBtn = document.getElementById("downloadBtn");
const cancelBtn = document.getElementById("cancelBtn");
const darkModeToggle = document.getElementById("darkModeToggle");
const backToTop = document.getElementById("backToTop");

let selectedIcon = null;

// ========== RENDER ICONS ==========
function renderIcons(list) {
  iconsGrid.innerHTML = "";

  if (list.length === 0) {
    const msg = document.createElement("div");
    msg.className = "no-results";
    msg.innerHTML = `<p>😕 No icons found. Try another keyword.</p>`;
    iconsGrid.appendChild(msg);
    return;
  }

  list.forEach((ic) => {
    const card = document.createElement("div");
    card.className = "icon-card";
    card.innerHTML = `
      <i class="${ic.icon}"></i>
      <div class="icon-name">${ic.name}</div>
    `;
    card.addEventListener("click", () => openModal(ic));
    iconsGrid.appendChild(card);
  });
}
renderIcons(ICONS);

// ========== SEARCH ==========
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = ICONS.filter((ic) =>
    ic.name.toLowerCase().includes(value)
  );
  renderIcons(filtered);
});

// ========== MODAL ==========
function openModal(icon) {
  selectedIcon = icon;
  modalTitle.textContent = `Download "${icon.name}" icon?`;
  document.getElementById("modalIcon").className = icon.icon;
  document.getElementById("iconName").textContent = icon.name;
  modal.style.display = "flex";
}

closeModal.onclick = closeModalHandler;
cancelBtn.onclick = closeModalHandler;

function closeModalHandler() {
  modal.style.display = "none";
  selectedIcon = null;
}

window.onclick = (e) => {
  if (e.target === modal) closeModalHandler();
};

// ========== DOWNLOAD FUNCTION ==========
downloadBtn.addEventListener("click", () => {
  if (!selectedIcon) return;
  const html = `<i class="${selectedIcon.icon}"></i>`;
  const blob = new Blob([html], { type: "text/html" });
  saveAs(blob, `${selectedIcon.id}.html`);
  closeModalHandler();
  alert(`"${selectedIcon.name}" icon downloaded! ✅`);
});

// ========== DARK MODE ==========
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkModeToggle.classList.replace("fa-moon", "fa-sun");
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  darkModeToggle.classList.toggle("fa-moon", !isDark);
  darkModeToggle.classList.toggle("fa-sun", isDark);
});

window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });