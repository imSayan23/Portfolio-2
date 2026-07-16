import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
        className="text-5xl font-bold text-blue-600"
      >
        SG
      </motion.h1>
    </div>
  );
};

export default Loading;