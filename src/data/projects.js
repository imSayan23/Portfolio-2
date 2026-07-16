import spotify from "../assets/images/projects/spotify.png";
import portfolio from "../assets/images/projects/portfolio.png";
import calculator from "../assets/images/projects/calculator.png";

const projects = [
  {
    id: 1,
    title: "Spotify Clone",
    image: spotify,
    description:
      "A responsive Spotify-inspired music streaming UI with custom audio playback controls built using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/imSayan23/Spotify-Clone",
    live: "https://spotify-clone-zeta-weld.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A fully responsive portfolio website showcasing my projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/imSayan23/Portfolio",
    live: "https://portfolio-amber-nine-28.vercel.app/",
  },
  {
    id: 3,
    title: "JavaScript Calculator",
    image: calculator,
    description:
      "A calculator web application supporting arithmetic operations with real-time input handling.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/imSayan23/CALCULATOR",
    live: "https://calculator-ls82-6yikqw2oy-imsayan23s-projects.vercel.app",
  },
];

export default projects;