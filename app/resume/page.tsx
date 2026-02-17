import { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Briefcase,
  GraduationCap,
  Code,
  Award,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Subin Jose Y - Flutter Developer with 2+ years of experience in mobile app development.",
};

const experience = [
  {
    title: "Software Engineering Analyst",
    company: "TechJays",
    location: "Remote",
    period: "Oct 2024 - Present",
    responsibilities: [
      "Architecting and developing cross-platform mobile applications using Flutter with clean architecture principles",
      "Implementing BLoC state management for scalable and maintainable code",
      "Optimizing application performance through pagination, caching, and efficient data handling",
      "Managing end-to-end deployment process for both iOS App Store and Google Play Store",
      "Conducting code reviews and mentoring junior developers",
    ],
  },
  {
    title: "Flutter Developer Intern",
    company: "TechJays",
    location: "Remote",
    period: "Mar 2024 - Sep 2024",
    responsibilities: [
      "Developed mobile applications using Flutter under senior developer guidance",
      "Collaborated on feature development for production applications",
      "Participated in agile development processes including sprints and code reviews",
      "Contributed to testing and quality assurance efforts",
      "Learned and implemented best practices for mobile development",
    ],
  },
  {
    title: "QC Analyst",
    company: "Caponex Labs",
    location: "India",
    period: "Mar 2022 - Aug 2023",
    responsibilities: [
      "Performed quality control analysis and testing procedures",
      "Documented test results and maintained quality standards",
      "Collaborated with development teams to identify and resolve issues",
      "Developed attention to detail and systematic approach to problem-solving",
    ],
  },
];

const skills = {
  mobile: ["Flutter", "Dart", "BLoC Pattern", "Clean Architecture", "iOS", "Android"],
  backend: ["REST APIs", "Firebase", "Firestore", "GraphQL"],
  database: ["Hive", "Isar Database", "SQLite"],
  tools: ["Git", "Android Studio", "VS Code", "Xcode", "Figma", "Postman"],
  testing: ["Unit Testing", "Widget Testing", "k6 Performance Testing"],
};

const projects = [
  {
    name: "Bracketology TV",
    description:
      "Fantasy sports gaming platform for reality TV shows with multi-show support and real-time automated scoring",
    tech: ["Flutter", "BLoC", "Clean Architecture", "Isar Database"],
    highlights: [
      "Architected cross-platform app serving thousands of users",
      "Implemented pagination and caching for optimal performance",
      "Managed iOS and Android deployment pipelines",
      "3.8/5 rating with 154+ reviews on App Store",
    ],
    link: "https://apps.apple.com/us/app/bracketology/id6463115555",
  },
  {
    name: "Lifewink",
    description: "Mobile application with focus on feature development and testing",
    tech: ["Flutter", "Dart", "Mobile Development"],
    highlights: [
      "Feature development under senior guidance",
      "Comprehensive testing implementation",
      "Cross-platform mobile development",
    ],
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Subin Jose Y
              </h1>
              <p className="text-xl text-primary-400 mb-4">Flutter Developer</p>
              <div className="flex flex-wrap gap-4 text-dark-300 text-sm">
                <a
                  href="mailto:subinjose911@gmail.com"
                  className="flex items-center gap-1 hover:text-primary-400 transition-colors"
                >
                  <Mail size={16} />
                  subinjose911@gmail.com
                </a>
                <a
                  href="tel:+917548817911"
                  className="flex items-center gap-1 hover:text-primary-400 transition-colors"
                >
                  <Phone size={16} />
                  +91 7548817911
                </a>
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  Bangalore, India
                </span>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
            >
              <Download size={20} />
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Summary */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
            <Code className="text-primary-400" size={24} />
            Professional Summary
          </h2>
          <p className="text-dark-200 leading-relaxed">
            Passionate Flutter Developer with over 2 years of experience in
            building cross-platform mobile applications. Skilled in clean
            architecture, BLoC state management, and modern mobile development
            practices. Proven track record of delivering high-quality production
            applications used by thousands of users. Strong foundation in
            software engineering principles with a focus on performance
            optimization and user experience.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
            <Briefcase className="text-primary-400" size={24} />
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-dark-700 hover:border-primary-500/50 transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-800 border-2 border-primary-500" />
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-primary-400 font-medium">
                      {job.company}
                    </span>
                    <span className="text-dark-500">|</span>
                    <span className="text-dark-400">{job.location}</span>
                    <span className="text-dark-500">|</span>
                    <span className="text-dark-400">{job.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mt-3">
                  {job.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="text-dark-300 text-sm flex items-start gap-2"
                    >
                      <span className="text-primary-400 mt-1.5">&#8226;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
            <Award className="text-primary-400" size={24} />
            Key Projects
          </h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-dark-800/50 border border-dark-700"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 text-sm hover:underline"
                    >
                      View on App Store
                    </a>
                  )}
                </div>
                <p className="text-dark-300 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-dark-700 text-dark-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-dark-400 text-xs flex items-start gap-2"
                    >
                      <span className="text-accent-400 mt-0.5">&#8226;</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
            <Code className="text-primary-400" size={24} />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-primary-400 mb-3">
                Mobile Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.mobile.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-dark-800 text-dark-200 border border-dark-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary-400 mb-3">
                Backend & APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-dark-800 text-dark-200 border border-dark-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary-400 mb-3">
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-dark-800 text-dark-200 border border-dark-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary-400 mb-3">
                Tools & IDEs
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-dark-800 text-dark-200 border border-dark-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
            <GraduationCap className="text-primary-400" size={24} />
            Education
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700">
              <h3 className="text-lg font-semibold text-white">
                MSc. Chemistry
              </h3>
              <p className="text-primary-400">Scott Christian College, Kanyakumari</p>
              <p className="text-dark-400 text-sm">2019 - 2021</p>
            </div>
            <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700">
              <h3 className="text-lg font-semibold text-white">
                BSc. Chemistry
              </h3>
              <p className="text-primary-400">Scott Christian College, Kanyakumari</p>
              <p className="text-dark-400 text-sm">2016 - 2019</p>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
            <GraduationCap className="text-primary-400" size={24} />
            Certification
          </h2>
          <div className="p-6 rounded-xl bg-dark-800/50 border border-dark-700">
            <h3 className="text-lg font-semibold text-white">
              Python Programming
            </h3>
            <p className="text-primary-400">Besant Technologies, Chennai</p>
            <p className="text-dark-400 text-sm">Sep 2023 - Feb 2024</p>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center pt-8 border-t border-dark-800">
          <Link
            href="/"
            className="text-primary-400 hover:text-primary-300 transition-colors"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
