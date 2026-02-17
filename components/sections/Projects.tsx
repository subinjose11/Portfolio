"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star, ChevronRight, Smartphone, Globe } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { projects, type Project } from "@/content/projects";

type FilterCategory = "all" | "mobile" | "web";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px]" />
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
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4" />
          <p className="text-dark-400 max-w-2xl mx-auto">
            A collection of mobile applications I&apos;ve built with Flutter and modern development practices
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-3 mb-12"
        >
          {[
            { key: "all", label: "All Projects", icon: Globe },
            { key: "mobile", label: "Mobile Apps", icon: Smartphone },
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key as FilterCategory)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === category.key
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-dark-800 text-dark-400 hover:text-white border border-dark-700 hover:border-dark-600"
              }`}
            >
              <category.icon size={16} />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
                isHovered={hoveredProject === project.id}
                onHover={() => setHoveredProject(project.id)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard = ({ project, index, isInView, isHovered, onHover, onLeave }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl bg-dark-800/50 border border-dark-700 overflow-hidden transition-all duration-500 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Project Image/Header */}
        <div className="relative h-52 bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
          {/* Pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.03)_75%)] bg-[length:20px_20px]" />

          {/* Large letter */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-[150px] font-bold text-primary-500/10 select-none"
              animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title.charAt(0)}
            </motion.span>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <Badge variant="primary" className="flex items-center gap-1 backdrop-blur-sm bg-primary-500/90">
                <Star size={12} className="fill-current" />
                Featured
              </Badge>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="default" className="backdrop-blur-sm bg-dark-800/80 border border-dark-700">
              {project.category === "mobile" ? "Mobile App" : "Web"}
            </Badge>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: isHovered ? 0.9 : 0.5 }}
          />
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-400 transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-dark-400 text-sm mb-4 line-clamp-2 group-hover:text-dark-300 transition-colors">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-lg bg-dark-900/50 text-dark-400 border border-dark-700 group-hover:border-dark-600 group-hover:text-dark-300 transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2.5 py-1 text-xs rounded-lg bg-dark-900/50 text-dark-500 border border-dark-700">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="space-y-1.5 mb-5">
              {project.highlights.slice(0, 3).map((highlight, i) => (
                <div
                  key={i}
                  className="text-dark-500 text-xs flex items-start gap-2 group-hover:text-dark-400 transition-colors"
                >
                  <ChevronRight
                    size={12}
                    className="text-primary-500 mt-0.5 flex-shrink-0"
                  />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-dark-700">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-900/50 text-dark-400 hover:text-white hover:bg-dark-700 transition-all duration-200 text-sm"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200 text-sm"
              >
                <ExternalLink size={16} />
                App Store
              </a>
            )}
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200 text-sm"
              >
                <ExternalLink size={16} />
                Play Store
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200 text-sm"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {!project.links.github && !project.links.appStore && !project.links.playStore && !project.links.live && (
              <span className="text-dark-500 text-sm italic">Private project</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
