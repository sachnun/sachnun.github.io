import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = ["Frontend", "Backend", "Database", "DevOps"];

  return (
    <motion.section 
      className="py-20 bg-gray-100 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div 
              key={skill}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
