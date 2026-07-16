import { motion } from "framer-motion";
import education from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold  dark:text-white">
            Education
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            My academic journey.
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">

          {education.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >

              <div className="flex flex-col md:flex-row md:justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-blue-600">
                    {item.degree}
                  </h3>

                  <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
                    {item.institution}
                  </p>

                </div>

                <div className="mt-4 md:mt-0 text-right">

                  <p className="font-semibold text-gray-700 dark:text-gray-300">
                    {item.year}
                  </p>

                  <p className="text-blue-600 font-bold">
                    {item.score}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;