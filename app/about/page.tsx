import { Mail, Award, GraduationCap, Briefcase, FolderOpen, Info, Download, ArrowLeft, Home } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Main Content */}
        <div className="col-span-1 lg:col-span-12 p-4 sm:p-6 lg:p-12 pb-20 lg:pb-4">
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
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight mb-4">ABOUT</h1>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start max-w-6xl">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gray-100">
                <img
                  src="/images/circle.png"
                  alt="Caroline Ó Cathal - Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">OVERVIEW</h2>
                <div className="w-16 sm:w-20 h-1 bg-misty-mauve mb-6 sm:mb-8"></div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-4 sm:mb-6">
                  Experienced product and operations leader with over 5 years managing cross-functional teams, launching
                  interactive platforms, and delivering user-centered digital tools. Skilled in aligning business goals
                  with technical execution, improving accessibility, and scaling mission-driven experiences in
                  education, storytelling, and the arts.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                  Known for blending strategic planning with hands-on delivery in fast-paced, collaborative
                  environments. I bring creativity and innovation to every project while maintaining focus on
                  user-centered design principles.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">PHILOSOPHY</h3>
                <div className="w-12 sm:w-16 h-1 bg-forest-shadow mb-4 sm:mb-6"></div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-4">
                  I feel most accomplished when I can use thoughtful development and intuitive design choices to help
                  people understand something they might have otherwise given up on.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                  I've always loved media that made me slightly disgruntled; that 'why didn't I think of that!' feeling.
                  I learned how to design and code digital products so I could bring my own projects with that same
                  effect. I pull from the research, experiences, and media that have inspired me all my life to build
                  familiar yet innovative design work.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">INTERESTS</h3>
                <div className="w-12 sm:w-16 h-1 bg-scarlet-ember mb-4 sm:mb-6"></div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                  Medieval history and music, video games that are more like interactive novels, fermentation science,
                  fiber arts, and speaking Irish.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - Bottom Left 3x2 Grid */}
        <div className="hidden lg:block fixed bottom-4 left-4 z-40">
          <nav className="grid grid-cols-2 gap-0 w-80 shadow-lg">
            {/* Top Row */}
            <a
              href="/#contact"
              className="nav-item bg-misty-mauve text-white text-xs py-3 px-4 text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-3 h-3 text-white" />
              CONTACT
            </a>
            <a
              href="/#skills"
              className="nav-item bg-forest-shadow text-white text-xs py-3 px-4 text-center flex items-center justify-center gap-2"
            >
              <Award className="w-3 h-3 text-white" />
              SKILLS
            </a>

            {/* Middle Row */}
            <a
              href="/#education"
              className="nav-item bg-sunlit-amber text-xs py-3 px-4 text-center flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-3 h-3 text-black" />
              EDUCATION
            </a>
            <a
              href="/#experience"
              className="nav-item bg-scarlet-ember text-white text-xs py-3 px-4 text-center flex items-center justify-center gap-2"
            >
              <Briefcase className="w-3 h-3 text-white" />
              EXPERIENCE
            </a>

            {/* Bottom Row */}
            <a
              href="/projects"
              className="nav-item bg-rosy-blush text-xs py-3 px-4 text-center flex items-center justify-center gap-2"
            >
              <FolderOpen className="w-3 h-3 text-black" />
              PROJECTS
            </a>
            <a
              href="/about"
              className="nav-item bg-minty-frost border-b-4 border-twilight-indigo text-xs py-3 px-4 text-center flex items-center justify-center gap-2"
            >
              <Info className="w-3 h-3 text-black" />
              ABOUT
            </a>

            {/* CV spans full width at bottom */}
            <a
              href="/cv"
              className="nav-item bg-twilight-indigo text-white text-xs py-3 px-4 text-center col-span-2 flex items-center justify-center gap-2"
            >
              <Download className="w-3 h-3 text-white" />⬇ DOWNLOAD CV
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
          <nav className="flex overflow-x-auto">
            <a
              href="/#contact"
              className="flex-shrink-0 px-3 sm:px-4 py-3 bg-misty-mauve text-white text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <Mail className="w-3 h-3 text-white" />
              CONTACT
            </a>
            <a
              href="/#skills"
              className="flex-shrink-0 px-3 sm:px-4 py-3 bg-forest-shadow text-white text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <Award className="w-3 h-3 text-white" />
              SKILLS
            </a>
            <a
              href="/#education"
              className="flex-shrink-0 px-3 sm:px-4 py-3 bg-sunlit-amber text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <GraduationCap className="w-3 h-3 text-black" />
              EDUCATION
            </a>
            <a
              href="/#experience"
              className="flex-shrink-0 px-3 sm:px-4 py-3 bg-scarlet-ember text-white text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <Briefcase className="w-3 h-3 text-white" />
              EXPERIENCE
            </a>
            <a
              href="/projects"
              className="flex-shrink-0 px-3 sm:px-4 py-3 bg-rosy-blush text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <FolderOpen className="w-3 h-3 text-black" />
              PROJECTS
            </a>
            <a
              href="/about"
              className="flex-shrink-0 px-3 sm:px-4 py-3 bg-minty-frost text-center text-xs font-medium border-b-2 border-twilight-indigo flex flex-col items-center gap-1"
            >
              <Info className="w-3 h-3 text-black" />
              ABOUT
            </a>
            <a
              href="/cv"
              className="flex-shrink-0 px-3 sm:px-4 py-3 bg-twilight-indigo text-white text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <Download className="w-3 h-3 text-white" />
              CV
            </a>
          </nav>
        </div>

        {/* Mobile padding bottom */}
        <div className="lg:hidden h-16"></div>
      </div>
    </main>
  )
}
