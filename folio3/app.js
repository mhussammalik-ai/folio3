// Toggle dropdown panel
document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("dropdownPanel").classList.toggle("open");
});

// Custom carousel indicators with random color
const indicators = document.querySelectorAll(".carousel-indicators li");
const carouselElement = document.querySelector("#folio3Carousel");
const carousel = new bootstrap.Carousel(carouselElement, { interval: 4000, ride: "carousel" });

indicators.forEach((li, index) => {
  li.addEventListener("click", () => {
    indicators.forEach(i => i.classList.remove("active"));
    li.classList.add("active");

    // Random color for active indicator
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
    li.style.color = randomColor;

    carousel.to(index);
  });
});

// Setup marquee with continuous loop
function setupMarquee(selector, direction = "left") {
  const track = document.querySelector(selector);
  if (!track) return;

  // Apply correct direction animation
  track.style.animation = direction === "left"
    ? "moveLeft 30s linear infinite"
    : "moveRight 30s linear infinite";

  // Ensure animation is running
  track.style.animationPlayState = "running";

  // Pause after 0 min, resume after 0 min
  function togglePause() {
    track.style.animationPlayState = "paused";
    setTimeout(() => {
      track.style.animationPlayState = "running";
    }, 60000); // 1 min pause
  }

  // Repeat cycle every 6 min (5 min run + 1 min pause)
  setInterval(togglePause, 300000);
}

// Start marquee after DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // Partners row → scrolls right → left
  setupMarquee(".partners-section .marquee-track", "left");

  // Awards row → scrolls left → right
  setupMarquee(".awards-section .marquee-track", "right");
});


const btn = document.getElementById("folio3Btn");
const heading = document.getElementById("globalHeading");

btn.addEventListener("click", () => {
  heading.classList.toggle("underline");
});


  const items = document.querySelectorAll('.services-timeline li');

    items.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          items.forEach(el => el.classList.remove('r'));
          item.classList.add('active');
        }
      });
    });

    // Get all timeline items
const servicesTimelineItems = document.querySelectorAll('.services-timeline li');

servicesTimelineItems.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      // remove active if already clicked
      item.classList.remove('active');
    } else {
      // remove active from all, then activate this
      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    }
  });
});
servicesTimelineItems.forEach(item => {
  item.addEventListener('click', () => {
    // toggle active on clicked
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    }
  });
});


const options = document.querySelectorAll('.work-options .option');
const infoBoxes = document.querySelectorAll('.info-box');

options.forEach(option => {
  option.addEventListener('click', () => {
    // Remove active state
    options.forEach(opt => opt.classList.remove('active'));
    infoBoxes.forEach(box => box.classList.remove('active'));

    // Activate clicked
    option.classList.add('active');
    const target = option.getAttribute('data-info');
    document.getElementById(target).classList.add('active');
  });
});

options.forEach(option => {
  option.addEventListener("click", () => {
    // Remove active state from all
    options.forEach(opt => opt.classList.remove("active"));
    infoBoxes.forEach(box => box.classList.remove("active"));

    // Add active to clicked
    option.classList.add("active");
    const infoId = option.getAttribute("data-info");
    document.getElementById(infoId).classList.add("active");
  });
});
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});




