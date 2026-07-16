import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Left */}

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Sayan Ghosh
            </h2>

            <p className="text-gray-400 dark:text-gray-500 mt-3">
              Frontend Developer | React Developer
            </p>

            <p className="text-gray-500 mt-2">
              Building responsive and modern web applications.
            </p>
          </div>

          {/* Center */}

          <div className="flex flex-wrap justify-center gap-6">

            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#education" className="hover:text-blue-400 transition">
              Education
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>

          </div>

          {/* Right */}

          <div className="flex justify-center md:justify-end gap-5 text-2xl">

            <a
              href="https://github.com/imSayan23"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sayan-ghosh-273615380/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ghoshsayan896@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <hr className="border-gray-700 dark:border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Sayan Ghosh. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-5 md:mt-0 bg-blue-600 hover:bg-blue-700 transition p-3 rounded-full"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;