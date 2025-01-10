import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2 dark:text-white">Sachnun Kusmayadi</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">Software Developer</p>
      </motion.div>
    </section>
  );
}
