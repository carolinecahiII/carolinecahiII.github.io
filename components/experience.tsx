export function Experience() {
  const experiences = [
    {
      id: "01",
      company: "GETZOOT",
      role: "Product Manager, UI/UX",
      period: "2024 - Present",
      type: "Contract",
      description:
        "Lead product strategy, roadmap execution, and operational delivery for 4+ digital games and consumer tools from concept through launch.",
      highlights: [
        "Manage cross-functional teams (design, engineering, analytics, creative)",
        "Developed performance dashboards and tracked KPIs for campaign optimization",
        "Implemented accessibility and UX enhancements across web-based platforms",
      ],
      color: "emerald",
    },
    {
      id: "02",
      company: "BROWN UNIVERSITY",
      role: "Senior Library Technologist, UX Lead",
      period: "2022 - 2024",
      type: "Full-time",
      description:
        "Designed and managed development of full-stack web applications to support academic storytelling and digital scholarship.",
      highlights: [
        "Collaborated with researchers, designers, and IT to deliver scalable learning tools",
        "Conducted platform audits and user testing",
        "Implemented improvements in usability, content structure, and accessibility (WCAG compliance)",
      ],
      color: "amber",
    },
    {
      id: "03",
      company: "WILINE NETWORKS",
      role: "Technical Product Manager",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Directed product lifecycle for customer dashboards in telecommunications sector.",
      highlights: [
        "Authored technical requirements and specs for API integrations",
        "Partnered with engineering and finance teams",
        "Ensured project scope aligned with business goals and data privacy compliance",
      ],
      color: "stone",
    },
  ]

  return (
    <section id="experience" className="py-16 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-light tracking-wide mb-4">EXPERIENCE</h2>
            <div className="w-16 h-1 bg-emerald-600"></div>
          </div>

          {/* Experience List */}
          <div className="lg:col-span-9 space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 w-px h-24 bg-stone-300"></div>
                )}

                <div className="flex gap-8">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full bg-${exp.color}-100 flex items-center justify-center`}>
                      <span className={`text-${exp.color}-800 font-medium`}>{exp.id}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="text-xl font-medium tracking-wide">{exp.company}</h3>
                      <span
                        className={`bg-${exp.color}-100 text-${exp.color}-800 px-3 py-1 rounded-full text-xs font-medium tracking-wide`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                      <span className="font-medium">{exp.role}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>

                    <p className="font-light leading-relaxed text-stone-700">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-light text-stone-600">
                          <div className={`w-1 h-1 bg-${exp.color}-600 rounded-full mt-2 flex-shrink-0`}></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
