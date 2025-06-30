"use client"

import { useState } from "react"
import {
  ChevronDown,
  Home,
  ArrowLeft,
  Mail,
  Award,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Info,
  Download,
} from "lucide-react"

export default function Projects() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set())

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages((prev) => new Set(prev).add(imageSrc))
  }

  const toggleProject = (projectId: string) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  const projects = [
    {
      id: "01",
      title: "CRUSHD",
      category: "Social Wine Logging Application",
      role: "Product Designer & UX Lead",
      period: "2023",
      description:
        "A social mobile application designed for natural wine enthusiasts to log, review, and share their wine experiences. The app combines social networking features with detailed wine tracking and recommendation systems.",
      highlights: [
        "Designed clean, modern mobile interface with intuitive user flows",
        "Created comprehensive wine logging system with detailed categorization",
        "Implemented social sharing features and community engagement tools",
        "Developed rating and review system tailored for natural wine characteristics",
        "Optimized user onboarding experience for wine novices and experts alike",
      ],
      technologies: [
        "Mobile App Design",
        "Social Networking",
        "User Experience",
        "Product Strategy",
        "Community Features",
      ],
      color: "rosy-blush",
      images: [
        {
          src: "/images/crushd1.png",
          alt: "Crushd app welcome and sign-up screens with lime green branding",
          caption: "Welcome screen and user registration flow with social login options",
        },
        {
          src: "/images/crushd2.png",
          alt: "Crushd app home screens showing wine favorites and activity feed",
          caption: "Wine selection interface and activity feed with rating system",
        },
      ],
    },
    {
      id: "02",
      title: "TAPROOT",
      category: "Interactive Sustainable Foraging Map",
      role: "UX Designer & Developer",
      period: "2023 - 2024",
      description:
        "An innovative interactive mapping application focused on sustainable foraging practices. The platform provides users with detailed information about foraging locations, seasonal availability, and environmental impact considerations.",
      highlights: [
        "Developed pixel-based interactive mapping interface with intuitive navigation",
        "Implemented comprehensive data visualization for foraging information",
        "Created responsive design that works across multiple device types",
        "Integrated environmental sustainability metrics and guidelines",
        "Designed user-friendly information panels with detailed species data",
      ],
      technologies: [
        "Interactive Maps",
        "Data Visualization",
        "Sustainability Tech",
        "Responsive Design",
        "Environmental Data",
      ],
      color: "forest-shadow",
      images: [
        {
          src: "/images/taproot-map.png",
          alt: "Interactive pixel-based map showing foraging locations across northeastern United States",
          caption: "Pixel-based interactive map with regional foraging data and seasonal sorting",
        },
        {
          src: "/images/taproot-data.png",
          alt: "JSON data structure showing detailed foraging information for plants like fiddleheads and dandelions",
          caption: "Comprehensive plant database with habitat, edibility, and cultural information",
        },
      ],
    },
    {
      id: "03",
      title: "GETZOOT PRODUCT SUITE",
      category: "Digital Games & Consumer Tools",
      role: "Product Manager, UI/UX",
      period: "2024 - Present",
      description:
        "Led end-to-end product strategy for 4+ interactive digital games and consumer tools, managing cross-functional teams from concept through successful market launch.",
      highlights: [
        "Developed comprehensive product roadmaps and feature specifications",
        "Coordinated design, engineering, analytics, and creative teams across multiple time zones",
        "Implemented user testing protocols that improved engagement metrics by 35%",
        "Managed project budgets and timelines for concurrent product launches",
      ],
      technologies: ["React.js", "Unity", "Pixi.js", "Analytics Platforms", "Figma"],
      color: "misty-mauve",
      images: [
        {
          src: "/images/zoot1.png",
          alt: "Zoot gaming platform landing page with purple gradient and next-gen gaming branding",
          caption: "Consumer-facing gaming platform with 63+ games and 97.2% average RTP",
        },
        {
          src: "/images/zoot2.png",
          alt: "Analytics dashboard showing user engagement data and game performance metrics",
          caption: "Internal analytics dashboard tracking user plays, profitability, and game performance",
        },
      ],
    },
    {
      id: "04",
      title: "SHELF LIFE",
      category: "Interactive Gaming & Educational Technology",
      role: "Game Designer & Developer",
      period: "2024",
      description:
        "A comprehensive library simulation management roleplaying game that combines educational elements with engaging gameplay mechanics. Players manage library operations, interact with patrons, and navigate various scenarios in a virtual library environment.",
      highlights: [
        "Designed intuitive inventory and resource management systems",
        "Created engaging storylines that educate players about library science",
        "Implemented character progression and skill development mechanics",
        "Developed accessible UI/UX for diverse player demographics",
        "Integrated educational content seamlessly into gameplay experience",
      ],
      technologies: ["Game Design", "Unity", "C#", "UI/UX Design", "Educational Technology"],
      color: "sunlit-amber",
      link: "https://shelflifegame.com",
      images: [
        {
          src: "/images/game1.jpg",
          alt: "Shelf Life game inventory management interface showing junk drawer with various library items",
          caption: "Inventory management system with interactive item organization",
        },
        {
          src: "/images/game2.png",
          alt: "Shelf Life game environment with pixel art character in library setting",
          caption: "Main game environment with character interaction in library space",
        },
      ],
    },
    {
      id: "05",
      title: "ACADEMIC DIGITAL PLATFORMS",
      category: "Full-stack Web Applications",
      role: "Senior Library Technologist, UX Lead",
      period: "2022 - 2024",
      description:
        "Designed and developed scalable web applications supporting academic storytelling and digital scholarship for Brown University's research community.",
      highlights: [
        "Built accessible, WCAG-compliant interfaces for diverse academic audiences",
        "Collaborated with researchers to translate complex requirements into user-friendly designs",
        "Implemented responsive design systems that improved mobile usage by 60%",
        "Conducted extensive user research and usability testing with faculty and students",
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "Accessibility Tools", "User Research"],
      color: "scarlet-ember",
      images: [
        {
          src: "/images/brown1.png",
          alt: "Brown University digital timeline showing Black alumni history with interactive features",
          caption: "Interactive historical timeline featuring Fritz Pollard and Black alumni achievements",
        },
        {
          src: "/images/brown2.png",
          alt: "Brown University Center for Digital Scholarship website with clean academic design",
          caption: "Center for Digital Scholarship platform supporting faculty research projects",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Main Content */}
        <div className="col-span-1 lg:col-span-9 p-4 sm:p-6 lg:p-12">
          {/* Header */}
          <div className="mb-8 sm:mb-12 lg:mb-18">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <a
                href="/"
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-800 transition-colors font-medium tracking-wide"
              >
                <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
                <Home size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight mb-2">SELECTED PROJECTS</h1>
          </div>

          {/* Projects */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {projects.map((project, index) => (
              <article key={project.id} className="relative border border-gray-200 rounded-none">
                {/* Project Header - Always Visible */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 sm:gap-4 lg:gap-6 flex-1">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-${project.color} rounded-none flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-gray-800 font-bold text-sm sm:text-base lg:text-lg">{project.id}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{project.title}</h2>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm bg-gray-900 text-white px-2 sm:px-3 py-1 hover:bg-gray-800 transition-colors font-medium tracking-wide self-start"
                            >
                              VISIT SITE →
                            </a>
                          )}
                        </div>
                        <p className="text-gray-600 font-medium mb-2 text-sm sm:text-base">{project.category}</p>
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                          <span className="font-medium">{project.role}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0 ml-2"
                    >
                      <ChevronDown
                        size={16}
                        className={`sm:w-5 sm:h-5 transform transition-transform ${
                          expandedProjects.has(project.id) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <div className={`w-16 sm:w-20 h-1 bg-${project.color} mt-4`}></div>
                </div>

                {/* Collapsible Content */}
                {expandedProjects.has(project.id) && (
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 border-t border-gray-200">
                    {/* Project Images */}
                    <div className="mb-6 sm:mb-8 pt-4 sm:pt-6">
                      <div className="grid grid-cols-1 gap-4 sm:gap-6">
                        {project.images.map((image, idx) => (
                          <div key={idx} className="space-y-2 sm:space-y-3">
                            <div className="aspect-video bg-gray-100 rounded-none overflow-hidden relative">
                              {!loadedImages.has(image.src) && <div className="absolute inset-0 image-skeleton" />}
                              <img
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                className={`w-full h-full object-cover project-image ${
                                  loadedImages.has(image.src) ? "opacity-100" : "opacity-0"
                                }`}
                                loading="lazy"
                                decoding="async"
                                onLoad={() => handleImageLoad(image.src)}
                                style={{
                                  contentVisibility: "auto",
                                  containIntrinsicSize: "600px 400px",
                                }}
                              />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 italic">{image.caption}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                      {/* Description */}
                      <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800">
                          {project.description}
                        </p>

                        <div>
                          <ul className="space-y-2 sm:space-y-3">
                            {project.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-gray-700"
                              >
                                <div
                                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-${project.color} rounded-full mt-1.5 sm:mt-2 flex-shrink-0`}
                                ></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">TECHNOLOGIES</h3>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className={`bg-${project.color} px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-gray-800 rounded-none`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Back to Home */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-twilight-indigo text-white px-6 sm:px-8 py-2 sm:py-3 font-medium tracking-wide hover:bg-forest-shadow transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
              <Home size={14} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        {/* Right Sidebar - Hidden on mobile, visible on desktop - FIXED POSITION */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="fixed top-0 right-0 w-1/4 h-screen bg-white flex flex-col z-40">
            {/* Navigation */}
            <nav className="flex flex-col h-full">
              <a href="/#contact" className="nav-item bg-misty-mauve text-white">
                <Mail className="w-4 h-4 text-white" />
                CONTACT
              </a>
              <a href="/#skills" className="nav-item bg-forest-shadow text-white">
                <Award className="w-4 h-4 text-white" />
                SKILLS
              </a>
              <a href="/#education" className="nav-item bg-sunlit-amber">
                <GraduationCap className="w-4 h-4 text-black" />
                EDUCATION
              </a>
              <a href="/#experience" className="nav-item bg-scarlet-ember text-white">
                <Briefcase className="w-4 h-4 text-white" />
                EXPERIENCE
              </a>
              <a href="/projects" className="nav-item bg-rosy-blush border-l-4 border-twilight-indigo">
                <FolderOpen className="w-4 h-4 text-black" />
                PROJECTS
              </a>
              <a href="/about" className="nav-item bg-minty-frost">
                <Info className="w-4 h-4 text-black" />
                ABOUT
              </a>
              <a href="/cv" className="nav-item bg-twilight-indigo text-white">
                <Download className="w-4 h-4 text-white" />⬇ DOWNLOAD CV
              </a>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation - Only visible on mobile */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
          <nav className="flex overflow-x-auto">
            <a
              href="/#contact"
              className="flex-shrink-0 px-2 sm:px-3 py-3 bg-misty-mauve text-white text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <Mail className="w-3 h-3 text-white" />
              CONTACT
            </a>
            <a
              href="/#skills"
              className="flex-shrink-0 px-2 sm:px-3 py-3 bg-forest-shadow text-white text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <Award className="w-3 h-3 text-white" />
              SKILLS
            </a>
            <a
              href="/#education"
              className="flex-shrink-0 px-2 sm:px-3 py-3 bg-sunlit-amber text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <GraduationCap className="w-3 h-3 text-black" />
              EDUCATION
            </a>
            <a
              href="/#experience"
              className="flex-shrink-0 px-2 sm:px-3 py-3 bg-scarlet-ember text-white text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <Briefcase className="w-3 h-3 text-white" />
              EXPERIENCE
            </a>
            <a
              href="/projects"
              className="flex-shrink-0 px-2 sm:px-3 py-3 bg-rosy-blush text-center text-xs font-medium border-b-2 border-twilight-indigo flex flex-col items-center gap-1"
            >
              <FolderOpen className="w-3 h-3 text-black" />
              PROJECTS
            </a>
            <a
              href="/about"
              className="flex-shrink-0 px-2 sm:px-3 py-3 bg-minty-frost text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <Info className="w-3 h-3 text-black" />
              ABOUT
            </a>
            <a
              href="/cv"
              className="flex-shrink-0 px-2 sm:px-3 py-3 bg-twilight-indigo text-white text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <Download className="w-3 h-3 text-white" />
              CV
            </a>
          </nav>
        </div>

        {/* Mobile padding bottom to account for fixed navigation */}
        <div className="lg:hidden h-16"></div>
      </div>
    </main>
  )
}
