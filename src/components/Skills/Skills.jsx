import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Vite",
      ],
    },

    {
      title: "Programming",
      skills: [
        "C",
        "C++",
        "SQL",
      ],
    },

    {
      title: "Computer Science",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-100 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Skills
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Technologies and concepts I work with.
          </p>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
                bg-white 
                dark:bg-slate-800 
                rounded-2xl 
                shadow-lg 
                p-8 
                hover:shadow-2xl 
                transition
              "
            >

              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                {category.title}
              </h3>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      bg-blue-100
                      text-blue-700
                      dark:bg-blue-900/50
                      dark:text-blue-200
                      px-4
                      py-2
                      rounded-full
                      font-semibold
                      hover:bg-blue-600
                      hover:text-white
                      transition
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;