import { Mail, Linkedin, Award, GraduationCap, Briefcase, FolderOpen, Info, Download } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Main Content */}
        <div className="col-span-1 lg:col-span-9 p-4 sm:p-6 lg:p-12">
          {/* Header */}
          <div className="mb-8 sm:mb-12 lg:mb-18">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight mb-4">CAROLINE Ó CATHAL</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-medium">
              PRODUCT MANAGER & INTERACTION SPECIALIST
            </p>
          </div>

          {/* Overview */}
          <section className="mb-8 sm:mb-12 lg:mb-18">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">OVERVIEW</h2>
            <div className="w-16 sm:w-20 h-1 bg-misty-mauve mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 max-w-4xl">
              Experienced product and operations leader with over 5 years managing cross-functional teams, launching
              interactive platforms, and delivering user-centered digital tools. Skilled in aligning business goals with
              technical execution, improving accessibility, and scaling mission-driven experiences in education,
              storytelling, and the arts.
            </p>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-8 sm:mb-12 lg:mb-18">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">EXPERIENCE</h2>
            <div className="w-16 sm:w-20 h-1 bg-scarlet-ember mb-6 sm:mb-8"></div>

            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              <div className="border-l-4 border-scarlet-ember pl-4 sm:pl-6 lg:pl-8">
                <div className="flex flex-col gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-2">GETZOOT</h3>
                    <p className="text-gray-600 font-medium text-base sm:text-lg">Product Manager, UI/UX</p>
                  </div>
                  <span className="text-xs sm:text-sm text-black bg-white px-3 sm:px-4 py-2 self-start border border-black">
                    2024 - PRESENT
                  </span>
                </div>
                <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Lead product strategy, roadmap execution, and operational delivery for 4+ digital games and consumer
                  tools from concept through launch. Manage cross-functional teams (design, engineering, analytics,
                  creative), aligning timelines, budgets, and priorities across stakeholders.
                </p>
              </div>

              <div className="border-l-4 border-forest-shadow pl-4 sm:pl-6 lg:pl-8">
                <div className="flex flex-col gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-2">BROWN UNIVERSITY</h3>
                    <p className="text-gray-600 font-medium text-base sm:text-lg">
                      Senior Library Technologist, UX Lead
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-black bg-white px-3 sm:px-4 py-2 self-start border border-black">
                    2022 - 2024
                  </span>
                </div>
                <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Designed and managed development of full-stack web applications to support academic storytelling and
                  digital scholarship. Collaborated with researchers, designers, and IT to deliver scalable learning
                  tools that prioritized access and inclusion.
                </p>
              </div>

              <div className="border-l-4 border-sunlit-amber pl-4 sm:pl-6 lg:pl-8">
                <div className="flex flex-col gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-2">WILINE NETWORKS</h3>
                    <p className="text-gray-600 font-medium text-base sm:text-lg">Technical Product Manager</p>
                  </div>
                  <span className="text-xs sm:text-sm text-black bg-white px-3 sm:px-4 py-2 self-start border border-black">
                    2020 - 2022
                  </span>
                </div>
                <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Directed product lifecycle for customer dashboards. Authored technical requirements and specs for API
                  integrations and interface rebuilds. Partnered with engineering and finance teams to ensure project
                  scope aligned with business goals and data privacy compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-8 sm:mb-12 lg:mb-18">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">SKILLS</h2>
            <div className="w-16 sm:w-20 h-1 bg-forest-shadow mb-6 sm:mb-8"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">SOFTWARE</h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>C/C++</li>
                  <li>SQL (Postgres)</li>
                  <li>Unity</li>
                  <li>Pixi.js</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">DESIGN</h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>User Flows</li>
                  <li>Accessibility Design</li>
                  <li>Cross-platform UX</li>
                  <li>Figma, Sketch, Adobe CC</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">OPERATIONS</h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                  <li>Agile, Scrum</li>
                  <li>Jira</li>
                  <li>UX Writing</li>
                  <li>Design Systems</li>
                  <li>Stakeholder Communications</li>
                  <li>Cross-functional Teaming</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">SOFT SKILLS</h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                  <li>Communication</li>
                  <li>Presentations</li>
                  <li>Leadership</li>
                  <li>Copywriting</li>
                  <li>Creativity & Innovation</li>
                  <li>Digital Storytelling</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section id="education" className="mb-8 sm:mb-12 lg:mb-18">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">EDUCATION</h2>
            <div className="w-16 sm:w-20 h-1 bg-sunlit-amber mb-6 sm:mb-8"></div>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="border-l-4 border-sunlit-amber pl-4 sm:pl-6 lg:pl-8">
                <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-2">TRINITY COLLEGE, DUBLIN</h3>
                <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg mb-1">
                  Master of Science, Interactive Digital Media
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">2024</p>
              </div>

              <div className="border-l-4 border-sunlit-amber pl-4 sm:pl-6 lg:pl-8">
                <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-2">BOSTON UNIVERSITY</h3>
                <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg mb-1">
                  Bachelor's of Science, Media and Computer Science
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">2021</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mb-8 sm:mb-12 lg:mb-18">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">CONTACT</h2>
            <div className="w-16 sm:w-20 h-1 bg-misty-mauve mb-6 sm:mb-8"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-misty-mauve flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">EMAIL</p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg break-all">carolineocathal@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-scarlet-ember flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">LINKEDIN</p>
                    <a
                      href="https://www.linkedin.com/in/caroline-%C3%B3-cathal-453389178/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-scarlet-ember transition-colors text-sm sm:text-base lg:text-lg break-all"
                    >
                      linkedin.com/in/caroline-ó-cathal
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">LOCATION</p>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg">Available for remote work</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar - Hidden on mobile, visible on desktop - FIXED POSITION */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="fixed top-0 right-0 w-1/4 h-screen bg-white flex flex-col z-40">
            {/* Navigation */}
            <nav className="flex flex-col h-full">
              <a href="#contact" className="nav-item bg-misty-mauve text-white">
                <Mail className="w-4 h-4 text-white" />
                CONTACT
              </a>
              <a href="#skills" className="nav-item bg-forest-shadow text-white">
                <Award className="w-4 h-4 text-white" />
                SKILLS
              </a>
              <a href="#education" className="nav-item bg-sunlit-amber">
                <GraduationCap className="w-4 h-4 text-black" />
                EDUCATION
              </a>
              <a href="#experience" className="nav-item bg-scarlet-ember text-white">
                <Briefcase className="w-4 h-4 text-white" />
                EXPERIENCE
              </a>
              <a href="/projects" className="nav-item bg-rosy-blush">
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
              href="#contact"
              className="flex-shrink-0 px-3 sm:px-4 py-3 sm:py-4 bg-misty-mauve text-white text-center text-xs sm:text-sm font-medium flex flex-col items-center gap-1"
            >
              <Mail className="w-3 h-3 text-white" />
              CONTACT
            </a>
            <a
              href="#skills"
              className="flex-shrink-0 px-3 sm:px-4 py-3 sm:py-4 bg-forest-shadow text-white text-center text-xs sm:text-sm font-medium flex flex-col items-center gap-1"
            >
              <Award className="w-3 h-3 text-white" />
              SKILLS
            </a>
            <a
              href="#education"
              className="flex-shrink-0 px-3 sm:px-4 py-3 sm:py-4 bg-sunlit-amber text-center text-xs sm:text-sm font-medium flex flex-col items-center gap-1"
            >
              <GraduationCap className="w-3 h-3 text-black" />
              EDUCATION
            </a>
            <a
              href="#experience"
              className="flex-shrink-0 px-3 sm:px-4 py-3 sm:py-4 bg-scarlet-ember text-white text-center text-xs sm:text-sm font-medium flex flex-col items-center gap-1"
            >
              <Briefcase className="w-3 h-3 text-white" />
              EXPERIENCE
            </a>
            <a
              href="/projects"
              className="flex-shrink-0 px-3 sm:px-4 py-3 sm:py-4 bg-rosy-blush text-center text-xs sm:text-sm font-medium flex flex-col items-center gap-1"
            >
              <FolderOpen className="w-3 h-3 text-black" />
              PROJECTS
            </a>
            <a
              href="/about"
              className="flex-shrink-0 px-2 sm:px-3 py-3 sm:py-4 bg-minty-frost text-center text-xs font-medium flex flex-col items-center gap-1"
            >
              <Info className="w-3 h-3 text-black" />
              ABOUT
            </a>
            <a
              href="/cv"
              className="flex-shrink-0 px-3 sm:px-4 py-3 sm:py-4 bg-twilight-indigo text-white text-center text-xs sm:text-sm font-medium flex flex-col items-center gap-1"
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
