import { motion } from "framer-motion";

const LampPost = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Hanging Thread */}
      <div className="absolute w-[2px] h-32 bg-gray-500 top-0"></div>

      {/* Hanging Bulb */}
      <motion.div
        className="absolute top-32 flex flex-col items-center"
        initial={{ y: -5 }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Bulb */}
        <div className="w-12 h-12 bg-yellow-400 rounded-full shadow-xl flex items-center justify-center relative">
          {/* Inner Glowing Bulb */}
          <motion.div
            className="w-6 h-6 bg-yellow-200 rounded-full"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: [0.3, 0.6, 1], scale: [0.8, 1, 1.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>

        {/* Light Glow Effect */}
        <motion.div
          className="absolute top-8 w-40 h-40 bg-yellow-300 rounded-full opacity-30 blur-3xl"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.5, 2.5], opacity: [0, 0.3, 0.5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default LampPost;
