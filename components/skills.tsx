export function Skills() {
  const skillCategories = [
    {
      title: "SOFTWARE",
      skills: ["React.js", "Node.js", "C/C++", "SQL (Postgres)", "Unity", "Pixi.js"],
      color: "emerald",
    },
    {
      title: "DESIGN",
      skills: [
        "Wireframing",
        "Prototyping",
        "User Flows",
        "Accessibility Design",
        "Cross-platform UX",
        "Figma, Sketch, Adobe CC",
      ],
      color: "amber",
    },
    {
      title: "OPERATIONS",
      skills: [
        "Agile, Scrum",
        "Jira",
        "UX Writing",
        "Design Systems",
        "Stakeholder Communications",
        "Cross-functional Teaming",
      ],
      color: "stone",
    },
    {
      title: "SOFT SKILLS",
      skills: [
        "Communication",
        "Presentations",
        "Leadership",
        "Copywriting",
        "Creativity & Innovation",
        "Digital Storytelling",
      ],
      color: "rose",
    },
  ]

  return (
    <section id="skills" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-light tracking-wide mb-4">SKILLS</h2>
            <div className="w-16 h-1 bg-rose-400"></div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div key={category.title} className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h3 className="font-medium tracking-wide text-lg">{category.title}</h3>
                    <div className={`w-8 h-1 bg-${category.color}-400`}></div>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-${category.color}-600 rounded-full flex-shrink-0`}></div>
                        <span className="font-light text-stone-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
