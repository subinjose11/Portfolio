"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Server,
  Wrench,
  Database,
  Cloud,
  Palette,
} from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    skills: ["Flutter", "Dart", "BLoC Pattern", "iOS", "Android"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    skills: ["REST APIs", "Firebase", "GraphQL", "Node.js"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: ["Hive", "Isar Database", "SQLite", "Firestore"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    skills: ["Git", "CI/CD", "App Store", "Play Store"],
  },
  {
    title: "Tools & IDEs",
    icon: Wrench,
    color: "from-red-500 to-rose-500",
    skills: ["Android Studio", "VS Code", "Xcode", "Postman"],
  },
  {
    title: "Design & Testing",
    icon: Palette,
    color: "from-indigo-500 to-violet-500",
    skills: ["Figma", "Unit Testing", "k6 Testing", "Clean Architecture"],
  },
];

const coreSkills = [
  { name: "Flutter", level: 95 },
  { name: "Dart", level: 95 },
  { name: "BLoC", level: 90 },
  { name: "Clean Architecture", level: 85 },
  { name: "Firebase", level: 85 },
  { name: "REST APIs", level: 90 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-800/50 via-dark-900 to-dark-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            What I work with
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4" />
          <p className="text-dark-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable mobile applications
          </p>
        </motion.div>

        {/* Core Skills with Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-white text-center mb-8">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-dark-200 font-medium group-hover:text-primary-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-dark-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-dark-600 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-dark-300 transition-all">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-dark-900/50 text-dark-300 border border-dark-700 group-hover:border-dark-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-dark-500 mb-6 text-sm uppercase tracking-wider">
            Technologies I Love Working With
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Flutter", "Dart", "Firebase", "BLoC", "Git", "REST API", "Hive", "Clean Architecture", "iOS", "Android", "Figma", "VS Code"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-dark-800 to-dark-800/50 border border-dark-700 text-dark-300 text-sm hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
