"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Code, Smartphone, Briefcase, ArrowRight } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Experience", color: "from-primary-500 to-blue-500" },
  { icon: Smartphone, value: "5+", label: "Projects Completed", color: "from-accent-500 to-teal-500" },
  { icon: Code, value: "10+", label: "Technologies Used", color: "from-purple-500 to-pink-500" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px]" />
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
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center -mt-12 lg:-mt-20"
          >
            <div className="relative">
              {/* Outer ring - animated */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #3B82F6, #06B6D4, #8B5CF6, #EC4899, #3B82F6)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Dark ring spacer */}
              <div className="absolute -inset-2 rounded-full bg-dark-900" />

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-dark-800">
                <Image
                  src="/images/profile.jpg"
                  alt="Subin Jose Y"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Name and title */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Subin Jose Y</h3>
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 font-semibold">
                Flutter Developer
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-dark-300 leading-relaxed">
                I&apos;m a passionate Flutter Developer based in Bangalore with over 2 years
                of experience in building cross-platform mobile applications. I specialize
                in creating performant, user-friendly apps that work seamlessly across
                iOS and Android platforms.
              </p>
              <p className="text-dark-400 leading-relaxed">
                Currently working as a{" "}
                <span className="text-dark-200">Software Engineering Analyst</span> at{" "}
                <span className="text-primary-400">TechJays</span>, where I architect
                and develop mobile applications using Flutter, following clean
                architecture principles and BLoC state management.
              </p>
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-sm text-dark-500 uppercase tracking-wider mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Dart", "BLoC", "Firebase", "REST APIs", "Clean Architecture"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full bg-dark-800 border border-dark-700 text-dark-300 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let&apos;s work together
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-dark-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
