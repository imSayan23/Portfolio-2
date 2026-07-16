import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Feel free to reach out for internships, collaborations, or opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16  dark:text-white">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600  dark:text-gray-300">ghoshsayan896@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600  dark:text-gray-300">+91 8101713136</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">West Bengal, India</p>
              </div>
            </div>

            <div className="flex gap-5 pt-4">
              <a
                href="https://github.com/imSayan23"
                target="_blank"
                rel="noreferrer"
               className="text-3xl text-gray-800 dark:text-white hover:text-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sayan-ghosh-273615380/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-blue-600 hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
            </div>

          </motion.div>

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-slate-800 p-8 rounded-2xl shadow-lg"
          >

            <div className="mb-5">
              <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
               className="w-full p-3 rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg border outline-none resize-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;