import project1 from "../components/projectphotos/image.png";
import project2 from "../components/projectphotos/project2.jpg";
import project3 from "../components/projectphotos/project3.jpg";
import project4 from "../components/projectphotos/Circuit diagram.jpg";

export const HERO_CONTENT = `A 3rd-year Electronics and Computer Engineering student with a passion for full-stack development, Machine Learning and IoT. Eager to tackle challenges and contribute to innovative projects`;

export const ABOUT_TEXT = `I am a 3rd year student at Amrita University, Bengaluru, pursuing B.Tech in the field of Electronics and Computer Engineering. I am a dedicated full stack developer, proficient in react, node, firebase. I have also used MongoDB, MySQL, and other frameworks like NextJS. I am also proficient in Python and C programming and I'm learning ML using Python and its libraries. I'm also passionate about IoT technologies like Arduino, and have worked on projects using Arduino and other IoT devices. You can check out my Github profile to see my projects!`;

export const EXPERIENCES = [
    {
        year: "February 2024 - Present",
        role: "Vice President",
        company: "Microsoft Ignite Students Club",
        description: `Conducting and organizing events on Microsoft services, generative AI`,
        technologies: ["HTML", "CSS", "JavaScript", "NodeJs", "ReactJS", "Firebase", "GenAI tools"],
      },
      {
        year: "September 2023 - Present",
        role: "Technical Team Member",
        company: "Google DSC, ASEB",
        description: `Conducted and hosted events on Flutter mobile app development, version control, web development`,
        technologies: ["JavaScript", "NodeJs", "ReactJS", "Flutter", "Version Control", "Firebase"],
      },
    {
        year: "April 2024 - June 2024",
        role: "Web Development and Management",
        company: "Telecom Gurukul",
        description: `Utilizing web development technologies, to develop a website, consisting of different webpages and landing pages`,
        technologies: ["Wix", "Google Console"],
    },
    {
        year: "June 2024 - July 2024",
        role: "Web Development",
        company: "Encryptix",
        description: `Completing tasks and building websites using web development technologies like HTML, CSS, JS`,
        technologies: ["HTML", "CSS", "JavaScript", "NodeJs", "ReactJS"],
    },
];

export const PROJECTS = [
  {
    title: "Amrita Supplementary Registration Portal",
    image: project1,
    description:
      "A web portal which allows students to re-register for backlogs, currently deployed and used by students and admin. \n Link of the portal: https://supplementary-amrita.vercel.app/",
    technologies: ["HTML", "CSS", "React", "Node.js", "Firebase", "FastAPI", "Python", "Vercel"],
  },
  {
    title: "E-Sangrahan",
    image: project2,
    description:
      "A web portal which provides access to nearest e-waste recycling facility. Included facilities like home-pickup, dropping off e-wastes, and collecting reward points",
    technologies: ["HTML", "CSS", "Javascript", "SQL", "Bootstrap", "Python"],
  },
  {
    title: "Image Subtraction and Preprocessing",
    image: project3,
    description:
      "In this project we have used various filters to attain the subtracted image and with the help of GUI we have enhanced the user experience while using the application",
    technologies: ["Matlab"],
  },
  {
    title: "Pet Feeder using IoT",
    image: project4,
    description:
      "An IoT Based Pet feeder system using Arduino Uno MCU, Bluetooth module, Servo motor",
    technologies: ["Arduino", "C++", "MIT APP CONTROLLER"],
  },
];

export const CONTACT = {
  phoneNo: "+91 8910849981",
  email: "ramshiv590@gmail.com",
  resume: 'https://drive.google.com/uc?export=download&id=1Ai9U3ND8U3oaAEWIc9yvwzZN9GsUDdc1'
};