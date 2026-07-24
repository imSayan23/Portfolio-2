import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-slate-900 py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Get to know me better.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-blue-600">
              Frontend Developer & CSE Student
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              I'm <span className="font-semibold">Sayan Ghosh</span>, a B.Tech
              Computer Science & Engineering student at
              <span className="font-semibold">
                {" "}B P Poddar Institute of Management and Technology
              </span>.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mt-5">
              I enjoy building responsive and modern web applications using
              HTML, CSS, JavaScript, React, Tailwind CSS, and Vite. Alongside
              web development, I am strengthening my understanding of Data
              Structures & Algorithms, Object-Oriented Programming, DBMS, SQL,
              Operating Systems, and Computer Networks.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mt-5">
              My goal is to become a Software Engineer by developing impactful
              applications, improving my problem-solving skills, and
              continuously learning new technologies.
            </p>

            {/* Personal Information */}
            <div className="mt-8 space-y-3 text-gray-700 dark:text-gray-300">

              <p>
                <span className="font-semibold text-black dark:text-white">
                  🎓 Degree:
                </span>{" "}
                B.Tech (CSE)
              </p>

              <p>
                <span className="font-semibold text-black dark:text-white">
                  🏫 College:
                </span>{" "}
                B P Poddar Institute of Management and Technology
              </p>

              <p>
                <span className="font-semibold text-black dark:text-white">
                  📍 Location:
                </span>{" "}
                West Bengal, India
              </p>

              <p>
                <span className="font-semibold text-black dark:text-white">
                  💻 Interests:
                </span>{" "}
                Frontend Development, React, DSA
              </p>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            {/* Frontend Card */}
            <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-xl transition-colors duration-300">

              <FaLaptopCode className="text-5xl text-blue-600 mb-4" />

              <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                Frontend
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                HTML, CSS, JavaScript, React, Tailwind CSS
              </p>

            </div>

            {/* Problem Solving Card */}
            <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-xl transition-colors duration-300">

              <FaBrain className="text-5xl text-blue-600 mb-4" />

              <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                Problem Solving
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                DSA, OOPs, DBMS, SQL, Operating Systems
              </p>

            </div>

            {/* Education Card */}
            <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-xl transition-colors duration-300">

              <FaGraduationCap className="text-5xl text-blue-600 mb-4" />

              <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                Education
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                B.Tech Computer Science Engineering (2023–2027)
              </p>

            </div>

            {/* Projects Card */}
            <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-xl transition-colors duration-300">

              <FaCode className="text-5xl text-blue-600 mb-4" />

              <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                Projects
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Spotify Clone, Portfolio Website, Calculator App
              </p>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;