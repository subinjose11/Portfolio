"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, Building2 } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Engineering Analyst",
    company: "TechJays",
    location: "Remote",
    period: "Oct 2024 - Present",
    current: true,
    description: [
      "Architecting and developing cross-platform mobile applications using Flutter",
      "Implementing clean architecture and BLoC state management patterns",
      "Optimizing application performance with pagination and caching strategies",
      "Managing end-to-end deployment process for iOS and Android platforms",
    ],
  },
  {
    type: "work",
    title: "Flutter Developer Intern",
    company: "TechJays",
    location: "Remote",
    period: "Mar 2024 - Sep 2024",
    current: false,
    description: [
      "Developed mobile applications using Flutter under senior developer guidance",
      "Collaborated on feature development and bug fixes",
      "Participated in code reviews and learned best practices",
      "Contributed to testing and quality assurance processes",
    ],
  },
  {
    type: "work",
    title: "QC Analyst",
    company: "Caponex Labs",
    location: "India",
    period: "Mar 2022 - Aug 2023",
    current: false,
    description: [
      "Performed quality control analysis and testing",
      "Documented test results and maintained quality standards",
      "Collaborated with teams to identify and resolve issues",
    ],
  },
];

const education = [
  {
    title: "MSc. Chemistry",
    institution: "Scott Christian College, Kanyakumari",
    period: "2019 - 2021",
    description: "Master of Science in Chemistry",
  },
  {
    title: "BSc. Chemistry",
    institution: "Scott Christian College, Kanyakumari",
    period: "2016 - 2019",
    description: "Bachelor of Science in Chemistry",
  },
];

const certifications = [
  {
    title: "Python Programming",
    institution: "Besant Technologies, Chennai",
    period: "Sep 2023 - Feb 2024",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-900/10 via-dark-900 to-dark-900" />
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
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4" />
          <p className="text-dark-400 max-w-2xl mx-auto">
            My professional journey in software development and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 text-xl font-semibold text-white mb-8"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500">
                <Briefcase className="text-white" size={20} />
              </div>
              Work Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary-500 via-accent-500 to-dark-700" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="relative pl-12 group"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 top-1 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      exp.current
                        ? "bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/30"
                        : "bg-dark-800 border-2 border-dark-600 group-hover:border-primary-500/50"
                    }`}>
                      <Building2 size={18} className={exp.current ? "text-white" : "text-dark-400 group-hover:text-primary-400"} />
                    </div>

                    <div className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-dark-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/5">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-primary-400 font-medium">{exp.company}</span>
                            {exp.current && (
                              <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-dark-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-dark-500" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-dark-500" />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-dark-400 text-sm flex items-start gap-2 group-hover:text-dark-300 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-accent-500 to-teal-500">
                  <GraduationCap className="text-white" size={20} />
                </div>
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.title}
                    className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-dark-600 transition-all duration-300 group"
                  >
                    <h4 className="font-semibold text-white group-hover:text-accent-400 transition-colors mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-accent-400 text-sm mb-2">{edu.institution}</p>
                    <p className="text-dark-500 text-sm flex items-center gap-1.5 mb-2">
                      <Calendar size={14} />
                      {edu.period}
                    </p>
                    <p className="text-dark-400 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-4 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-dark-600 transition-all duration-300"
                  >
                    <h4 className="font-medium text-white text-sm">{cert.title}</h4>
                    <p className="text-dark-400 text-xs">{cert.institution}</p>
                    <p className="text-dark-500 text-xs mt-1">{cert.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20"
            >
              <h4 className="font-semibold text-white mb-4">Career Highlights</h4>
              <div className="space-y-3">
                {[
                  { label: "Production Apps Shipped", value: "1" },
                  { label: "App Store Rating", value: "3.8/5" },
                  { label: "Code Reviews Completed", value: "50+" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span className="text-dark-400 text-sm">{stat.label}</span>
                    <span className="text-primary-400 font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
