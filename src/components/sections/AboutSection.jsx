import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section 
      className="h-full flex items-start md:items-center bg-white dark:bg-gray-800 pt-16 md:pt-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a passionate software developer with experience in creating efficient and scalable applications. 
            I enjoy solving complex problems and learning new technologies.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
