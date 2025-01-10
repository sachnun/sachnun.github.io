import { motion } from "framer-motion";

export default function HeroSection() {
  const bounceAnimation = {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="h-full flex flex-col items-center justify-center relative bg-gray-100 dark:bg-gray-900">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          type: "spring",
          bounce: 0.4
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2 dark:text-white">Sachnun Kusmayadi</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">Software Developer</p>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 cursor-pointer"
        animate={bounceAnimation}
      >
        <svg 
          className="w-8 h-8 text-gray-600 dark:text-gray-300"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          <path d="M7.41 12.59L12 17.17l4.59-4.58L18 14l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </motion.div>
    </section>
  );
}
