import Ecommerce from "../assets/projects/Ecommerce.jpg";
import AsMa from "../assets/projects/AsMa.jpg";
import project3 from "../assets/projects/project-3.jpg";
import MovieTheater from "../assets/projects/MovieTheater.jpg";
import Airbnb from "../assets/projects/Airbnb.jpg";

export const HERO_CONTENT = `Hey there, I am Nikos and I am a software engineer, a QA engineer and linux Sysadmin.`;

export const ABOUT_TEXT = `I am a dedicated full stack developer with a passion for creating web applications. Since 2018 when I first started my coding courses through university, I have worked with a variety of technologies, including React, Next.js, Node.js, Java, Typescript, PostgreSQL, Firebase, MongoDB and Playwright. My journey in web development began in university, and it has evolved into a lifetime passion where I continuously try to learn new things. I also have plenty of knowlegde on System administration with linux. Outside of coding, I have good Project Managment knowledge on optical fiber.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Intern FrontEnd Developer",
    //company: "Google Inc.",
    description: `Did my six-month internship as FrontEnd developer at ARX.NET. Worked mostly for React-projects for clients as Cyta and PlanO.`,
    technologies: ["Typescript", "React.js", "Tanstack"],
  },
  {
    year: "2025 - Current",
    role: "Frontend Developer",
    //company: "Adobe",
    description: `Designed and developed user interfaces for web applications and Tvs using React and Typescript. Worked closely with backend developers to integrate frontend components with .NET APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "Freelance",
    role: "Full Stack Developer",
    //company: "Facebook",
    description: `Developed and maintained Airbnb web application using React.ts, Next.js implementing RESTful APIs for data communication.`,
    technologies: ["React", "Typescript", "Next.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: Ecommerce,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["SCSS", "React", "Redux", "Firebase"],
  },
  {
    title: "AsMa tool",
    image: AsMa,
    description: "An application for Hospitals to manage it's properties.",
    technologies: ["Tailwind", "React", "Typescript", "Zod", "Tanstack"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Typescript", "Tailwind", "React", "Framer Motion"],
  },
  {
    title: "Movie App",
    image: MovieTheater,
    description:
      "A platform where a user can search movies, see trailers, has its own favorites and get recomendations based on its own preferences.",
    technologies: [
      "Typescript",
      "Tailwind",
      "React",
      "Next",
      "TMDB",
      "Mongodb",
    ],
  },
  {
    title: "Airbnb App",
    image: Airbnb,
    description:
      "A platform where the customer can book and pay for a room and the owner can check its bookings and accept or reject them.",
    technologies: [
      "Typescript",
      "Tailwind",
      "React",
      "Next",
      "Ical",
      "Stripe",
      "Docker",
    ],
  },
];

export const CONTACT = {
  address: "Thessaloniki",
  phoneNo: "+30 6986533187 ",
  email: "nikoslafiotis@gmail.com",
};
