import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../assets/images/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-slate-950 pt-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold text-lg">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-2 text-gray-900 dark:text-white">
            Sayan Ghosh
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-3xl font-semibold text-blue-600 mt-4 block"
          />

          <p className="text-gray-600 dark:text-gray-300 mt-6 leading-7 max-w-xl">
            I build responsive, modern, and user-friendly web applications
            using React, JavaScript, Tailwind CSS, and Vite. I enjoy creating
            clean interfaces and continuously learning new technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <a
              href="/resume.pdf"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-3xl">

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-black dark:text-white hover:text-blue-600 transition-colors duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-black dark:text-blue-600 hover:text-blue-700 transition-colors duration-300" />
            </a>

          </div>
        </motion.div>

        {/* Right Side - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Profile"
            className="w-72 md:w-96 rounded-full shadow-2xl border-4 border-blue-500 object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;