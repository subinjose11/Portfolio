export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: "mobile" | "web" | "all";
  links: {
    github?: string;
    live?: string;
    appStore?: string;
    playStore?: string;
  };
  featured: boolean;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "bracketology-tv",
    title: "Bracketology TV",
    description:
      "Fantasy sports gaming platform for reality TV shows with multi-show support, flexible league creation, and real-time automated scoring.",
    longDescription:
      "A comprehensive fantasy sports application that brings the excitement of bracket-style gaming to reality TV enthusiasts. The app supports multiple shows including The Bachelor, Survivor, Big Brother, and Drag Race, allowing users to create and manage leagues with customizable settings.",
    image: "/images/projects/bracketology.png",
    tags: ["Flutter", "Dart", "BLoC", "Clean Architecture", "Isar Database"],
    category: "mobile",
    links: {
      appStore: "https://apps.apple.com/us/app/bracketology/id6463115555",
    },
    featured: true,
    highlights: [
      "Multi-show support (Bachelor, Survivor, Big Brother, Drag Race)",
      "Flexible league creation with customizable settings",
      "Dual currency system (free coins + redeemable Bucks)",
      "Real-time automated scoring",
      "Cash withdrawal system",
      "3.8/5 stars with 154 reviews",
    ],
  },
  {
    id: "lifewink",
    title: "Lifewink",
    description:
      "Mobile application focused on feature development and testing, built with modern mobile development practices.",
    image: "/images/projects/lifewink.png",
    tags: ["Flutter", "Dart", "Mobile Development"],
    category: "mobile",
    links: {},
    featured: true,
    highlights: [
      "Feature development under senior guidance",
      "Comprehensive testing implementation",
      "Cross-platform mobile development",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(
  category: "mobile" | "web" | "all"
): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}
