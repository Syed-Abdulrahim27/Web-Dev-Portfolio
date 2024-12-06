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
const profileData = fetch("http://localhost:3000/profile")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch profile data");
    }
    return response.json();
  })
  .then((profileData) => {
    console.log("Profile Data:", profileData);
    populateProfile(profileData);
  })
  .catch((error) => {
    console.error("Error fetching profile data:", error);
  });
// const profileData = {
//   name: "Syed Abdul Rahim",
//   job: "Web Developer in Pakistan",
//   profilePic:
//     //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58-VVT8Wch6ligqL9BVGs4hHtZ2ChZeURvA&s",
//     "./profilepic.enc",
//   socialLinks: {
//     instagram: "https://instagram.com",
//     linkedin: "https://linkedin.com",
//     github: "https://github.com",
//   },
//   About:
//     "I am a passionate and dedicated web developer with a strong foundation in front-end and back-end technologies. With experience in creating responsive, user-friendly websites and web applications, I focus on delivering intuitive and impactful digital experiences. My expertise lies in HTML, CSS, JavaScript, and modern frameworks like React, with a keen eye for detail and an enthusiasm for learning the latest industry trends.I enjoy tackling complex problems, optimizing code, and improving user experiences through innovative solutions. Whether working on a team or independently, I strive to bring creativity and technical expertise to every project I undertake.When I’m not coding, you can find me exploring new tech, contributing to open-source projects, or honing my skills through continuous learning.",
//   education: [
//     "A-Levels from KIMS",
//     "BSCS in Computer Science",
//     "Masters in Computer Science",
//   ],
//   courses: ["HTML/CSS", "Javascript", "React", "Mobile App Development"],
//   projects: [
//     "Snake Game",
//     "Face Detection",
//     "Socket Programming",
//     "Flight Schedule Mobile App",
//   ],
//   awards: [
//     "Hackathon Prizes",
//     "Google Code Jam / Kick Start",
//     "Microsoft Imagine Cup",
//     "TopCoder Open",
//   ],
//   certifications: [
//     "Oracle Certified Professional: Java SE",
//     "Cloud Computing",
//     "Cybersecurity",
//     "Microsoft Certified: Azure AI Engineer Associate",
//   ],
//   portfolioVideo: "./Web Design Promotional Video - After Effects Template.mp4",
// };
// Populate profile
function populateProfile(profileData) {
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

  //populate About Me
  const AboutMe = document.getElementById("About");
  const p = document.createElement("p");
  p.textContent = profileData.About;
  AboutMe.appendChild(p);

  // Populate Ed]ucation
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

  // Populate Projects
  const projectsList = document.getElementById("projects");
  profileData.projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project;
    projectsList.appendChild(li);
  });

  // Populate Awards
  const awardsList = document.getElementById("awards");
  profileData.awards.forEach((award) => {
    const li = document.createElement("li");
    li.textContent = award;
    awardsList.appendChild(li);
  });

  // Populate Certifications
  const certsList = document.getElementById("certifications");
  profileData.certifications.forEach((cert) => {
    const li = document.createElement("li");
    li.textContent = cert;
    certsList.appendChild(li);
  });
  // Populate Portfolio Video
  document.getElementById("portfolio-video").src = profileData.portfolioVideo;
  //
  const footer = document.getElementById("footer");
  // footer.addEventListener("mouseover", () => {
  footer.addEventListener("click", () => {
    // p.innerHTML("Hello");
    const h2 = document.createElement("h2");
    h2.textContent = "Hello";
    footer.appendChild(h2);
  });
}
