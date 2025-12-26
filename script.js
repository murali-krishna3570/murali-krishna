// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.querySelector("i").classList.toggle("fa-bars");
    menuToggle.querySelector("i").classList.toggle("fa-times");
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    if (menuToggle) {
      menuToggle.querySelector("i").classList.add("fa-bars");
      menuToggle.querySelector("i").classList.remove("fa-times");
    }
  });
});

// Form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // In a real application, you would send this data to a server
    // For this demo, we'll just show an alert
    alert(
      `Thank you ${name}! Your message has been sent. I'll get back to you soon at ${email}.`
    );

    // Reset form
    this.reset();
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Add active class to nav links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Set current year in footer
const currentYear = document.getElementById("currentYear");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Resume download fallback if file doesn't exist
const resumeBtn = document.querySelector(".btn-resume");
if (resumeBtn) {
  resumeBtn.addEventListener("click", function (e) {
    // If href is just "#" or the file doesn't exist, show a message
    if (
      this.getAttribute("href") === "#" ||
      this.getAttribute("href").includes("assets/resume.pdf")
    ) {
      // Check if file exists (simplified check)
      fetch("assets/resume.pdf")
        .then((response) => {
          if (!response.ok) {
            e.preventDefault();
            alert(
              "Resume file is not available yet. Please contact me via email to request my resume."
            );
          }
        })
        .catch(() => {
          e.preventDefault();
          alert(
            "Resume file is not available yet. Please contact me via email to request my resume."
          );
        });
    }
  });
}
