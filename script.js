// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Scroll Animation using Intersection Observer (more efficient)
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

// Gallery Data - Updated with correct paths and existing files
const galleryData = [
  {
    type: "banner",
    title: "Menu Card Design",
    desc: "Web Banner Creative",
    img: "assets/1.jpg",
    link: "https://www.linkedin.com/posts/ajith-t-15855824b_graphicdesigner-aspiringdesigner-canvadesigner-activity-7420788928636530688-zUQY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiEWFkB11xqnBvyP8LaLDnq4mvZi_pwkvQ"
  },
  {
    type: "logo",
    isFolder: true,
    title: "Modern Logo Collection",
    desc: "View All Logo Designs",
    img: "assets/Black and Orange Fire Logo.png",
    images: [
      "assets/Black and Orange Fire Logo.png",
      "assets/logo/img_1.png",
      "assets/logo/img_2.png",
      "assets/logo/img_3.jpeg"
    ]
  },
  {
    type: "logo",
    isFolder: true,
    title: "Corporate Branding",
    desc: "Minimalist Style Logo",
    img: "assets/g1.jpg",  // Thumbnail image
    images: [
      "assets/logo2/1.png",
      "assets/logo2/2.png",
      "assets/logo2/3.png",
      "assets/logo2/4.png",
      "assets/logo2/5.png",
      "assets/logo2/6.png"
    ]
  }, 
  {
    type: "poster",
    title: "Promotional Banner",
    desc: "Digital Marketing Work",
    img: "assets/B couse.png",
    link: "https://www.linkedin.com/posts/ajith-t-15855824b_graphicdesign-canvadesign-posterdesign-activity-7421124938205552640-kgU0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiEWFkB11xqnBvyP8LaLDnq4mvZi_pwkvQ"
  },
  {
    type: "graphical",
    isFolder: true,
    title: "Websites",
    desc: "Explore Web Projects",
    img: "assets/d3.avif",
    images: [
      { title: "Website 1", img: "assets/web1.png", link: "#" },
      { title: "Website 2", img: "assets/web2.png", link: "#" },
      { title: "Website 3", img: "assets/web3.png", link: "https://ajith8754.github.io/ASM/" },
      { title: "Website 4", img: "assets/web4.png", link: "#" },
      { title: "Website 5", img: "assets/web5.png", link: "#" }
    ]
  },
];



// Render Gallery
const gallery = document.getElementById("gallery");

function renderGallery(filter = "all") {
  gallery.innerHTML = "";

  const filteredData = galleryData.filter(item => filter === "all" || item.type === filter);

  filteredData.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.transitionDelay = `${index * 0.1}s`; // Staggered entrance

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        ${item.isFolder ? '<div class="folder-badge"><i class="fas fa-folder-open"></i> Collection</div>' : ''}
      </div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    `;

    card.addEventListener("click", () => {
      if (item.link) {
        window.open(item.link, '_blank');
      } else if (item.isFolder) {
        openFolder(item.images, item.title);
      } else {
        openPopup(item.img);
      }
    });
    gallery.appendChild(card);
  });
}

// Initial Render
renderGallery();

// Filter Buttons
const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
});

// Popup Logic
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.getElementById("close");

function openPopup(src) {
  popupImg.src = src;
  popup.classList.add("show");
  document.body.style.overflow = "hidden"; // Prevent scroll
}

function closePopup() {
  popup.classList.remove("show");
  popup.classList.remove("folder-view");
  document.body.style.overflow = "auto";
}

function openFolder(images, title) {
  popup.classList.add("folder-view");
  const container = document.createElement("div");
  container.className = "folder-content";
  container.innerHTML = `
    <div class="folder-header">
      <h2>${title}</h2>
    </div>
    <div class="folder-grid">
      ${images.map((img, i) => {
        if (typeof img === 'object') {
          return `
            <div class="folder-item website-item" onclick="if ('${img.link}' && '${img.link}' !== '#') { window.open('${img.link}', '_blank'); } else { alert('${img.title} is coming soon!'); }">
              <div class="folder-item-image">
                <img src="${img.img}" alt="${img.title}">
              </div>
              <div class="folder-item-info">
                <h3>${img.title}</h3>
                <span class="view-btn">Visit Website <i class="fas fa-external-link-alt"></i></span>
              </div>
            </div>
          `;
        } else {
          return `
            <div class="folder-item" onclick="window.AntigravityOpenSingle('${img}')">
              <img src="${img}" alt="Logo">
            </div>
          `;
        }
      }).join('')}
    </div>
  `;

  // Clear existing popup content except close button
  const oldContent = popup.querySelector('.folder-content');
  if (oldContent) oldContent.remove();
  popupImg.style.display = "none";
  popup.appendChild(container);
  popup.classList.add("show");
  document.body.style.overflow = "hidden";
}

// Global helper for single image view from folder
window.AntigravityOpenSingle = (src) => {
  popupImg.src = src;
  popupImg.style.display = "block";
  popup.querySelector('.folder-content').style.display = "none";
  // Add a back button
  let backBtn = popup.querySelector('.back-btn');
  if (!backBtn) {
    backBtn = document.createElement('div');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Collection';
    backBtn.onclick = () => {
      popupImg.style.display = "none";
      popup.querySelector('.folder-content').style.display = "block";
      backBtn.style.display = "none";
    };
    popup.appendChild(backBtn);
  }
  backBtn.style.display = "flex";
};

closeBtn.addEventListener("click", closePopup);
popup.addEventListener("click", (e) => {
  if (e.target === popup) closePopup();
});

// Close popup on Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});
// Navigation Slider Logic
const navToggle = document.getElementById("navToggle");
const navSlider = document.getElementById("navSlider");
const navClose = document.getElementById("navClose");
const navLinks = document.querySelectorAll(".nav-slider ul li a");

navToggle.addEventListener("click", () => {
  navSlider.classList.add("open");
});

navClose.addEventListener("click", () => {
  navSlider.classList.remove("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navSlider.classList.remove("open");
  });
});
