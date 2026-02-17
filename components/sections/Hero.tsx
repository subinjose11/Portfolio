"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-900 to-dark-900" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/30 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
              <Sparkles size={16} className="animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-dark-300 text-lg md:text-xl font-medium mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white via-white to-dark-300 bg-clip-text text-transparent">
              Subin Jose Y
            </span>
          </motion.h1>

          {/* Title with gradient */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6"
          >
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Flutter Developer
            </span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-dark-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Crafting seamless cross-platform mobile experiences with
            <span className="text-primary-400"> clean architecture</span> and
            <span className="text-accent-400"> pixel-perfect interfaces</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={handleScrollToProjects}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View Projects
                <ArrowDown
                  size={18}
                  className="ml-2 group-hover:translate-y-1 transition-transform"
                />
              </span>
            </Button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 border-2 border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-500 px-7 py-3.5 text-lg group"
            >
              <Download size={18} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            {[
              { href: "https://github.com/subinjose11", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/subin-jose-y/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:subinjose911@gmail.com", icon: Mail, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group relative p-4 rounded-xl bg-dark-800/50 border border-dark-700 text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-dark-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-dark-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
