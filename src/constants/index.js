import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Currently pursuing my third year of B.Tech, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const ABOUT_TEXT = `I am  a dedicated Computer Science Engineering student, on a quest to excel as a versatile software engineer adept in both front-end and full-stack development. Driven by an insatiable curiosity for cutting-edge technologies, I thrive on sculpting elegant solutions to real-world challenges. With a formidable arsenal of problem-solving skills and an unwavering attention to detail, I am committed to continuous growth and innovation. Currently navigating my third year of B.Tech in Computer Science and Engineering, I find profound joy in programming, identifying myself as a Full Stack Developer with an ardent dedication to mastering the intricacies of web development.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Real Estate Listing App",
    image: project1,
    description:
      "A real estate listing web application with search, podcast display, and admin panel features.",
    technologies: ["HTML", "CSS", "React", "Node.js","Axios", "MongoDB"],
  },
  /*{
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },*/
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Telecom Churn Analysis",
    image: project4,
    description:
      "A ML app to perform telecom churn analysis using NumPy, Pandas, Matplotlib, and Seaborn.",
    technologies: ["HTML", "CSS", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
];

export const CONTACT = {
  address: "MTPS DVC Colony, Bankura, WB  ",
  phoneNo: "+91 9593255615",
  email: "swapnabro3023@gmail.com",
};
