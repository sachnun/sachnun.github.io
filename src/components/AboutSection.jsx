import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section 
      className="py-20 bg-white dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">About Me</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a passionate software developer with experience in creating efficient and scalable applications. 
            I enjoy solving complex problems and learning new technologies.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
