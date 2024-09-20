const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuBtnIcon = document.querySelector("#menu-btn i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"
  );
});

navLinks.addEventListener("click", () => {
  // Close menu when a nav link is clicked
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});
// ScrollReveal options
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};
ScrollReveal().reveal(".edu", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});
ScrollReveal().reveal(".body-2", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});
ScrollReveal().reveal(".Courses", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".Projects", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".Awards", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".certifs", {
  ...scrollRevealOption,
  delay: 2500,
});

const profileData = {
  name: "Syed Abdul Rahim",
  job: "Web Developer in Pakistan",
  profilePic:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58-VVT8Wch6ligqL9BVGs4hHtZ2ChZeURvA&s",
  socialLinks: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  education: [
    "A-Levels from KIMS",
    "BSCS in Computer Science",
    "Masters in Computer Science",
  ],
  courses: ["HTML/CSS", "Javascript", "React", "Mobile App Development"],
  projects: [
    "Snake Game",
    "Face Detection",
    "Socket Programming",
    "Flight Schedule Mobile App",
  ],
  awards: [
    "Hackathon Prizes",
    "Google Code Jam / Kick Start",
    "Microsoft Imagine Cup",
    "TopCoder Open",
  ],
  certifications: [
    "Oracle Certified Professional: Java SE",
    "Cloud Computing",
    "Cybersecurity",
    "Microsoft Certified: Azure AI Engineer Associate",
  ],
  portfolioVideo: "https://www.youtube.com/watch?v=Ez8F0nW6S-w",
};
// Populate profile
document.getElementById("name").textContent = profileData.name;
document.getElementById("job").textContent = profileData.job;
document.getElementById("profile-pic").src = profileData.profilePic;
document.getElementById("profile-pic").alt = "Profile Pic";

document.getElementById("instagram").parentElement.href =
  profileData.socialLinks.instagram;
document.getElementById("linkedin").parentElement.href =
  profileData.socialLinks.linkedin;
document.getElementById("github").parentElement.href =
  profileData.socialLinks.github;

// Populate Education
const educationList = document.getElementById("education");
profileData.education.forEach((edu) => {
  const li = document.createElement("li");
  li.textContent = edu;
  educationList.appendChild(li);
});

// Populate Courses
const coursesList = document.getElementById("courses");
profileData.courses.forEach((course) => {
  const li = document.createElement("li");
  li.textContent = course;
  coursesList.appendChild(li);
});
