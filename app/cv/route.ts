import { NextResponse } from "next/server"

export async function GET() {
  const cvContent = `CAROLINE Ó CATHAL
USER EXPERIENCE DESIGNER | PRODUCT & INTERACTION SPECIALIST

CONTACT
Email: carolineocathal@gmail.com
Portfolio: https://carolinecahill.co
LinkedIn: https://www.linkedin.com/in/caroline-%C3%B3-cathal-453389178/

OVERVIEW
Experienced product and operations leader with over 5 years managing cross-functional teams, launching interactive platforms, and delivering user-centered digital tools. Skilled in aligning business goals with technical execution, improving accessibility, and scaling mission-driven experiences in education, storytelling, and the arts. Known for blending strategic planning with hands-on delivery in fast-paced, collaborative environments.

EXPERIENCE

GETZOOT | 2024 - PRESENT | CONTRACT
PRODUCT MANAGER, UI/UX
• Lead product strategy, roadmap execution, and operational delivery for 4+ digital games and consumer tools from concept through launch.
• Manage cross-functional teams (design, engineering, analytics, creative), aligning timelines, budgets, and priorities across stakeholders.
• Developed performance dashboards and tracked KPIs for campaign optimization, including for a national spirits brand.
• Scoped and implemented accessibility and UX enhancements across web-based platforms, including responsive layouts and dark mode features.
• Oversaw sprint planning, QA, and stakeholder communication, ensuring timely delivery and alignment with business goals.

BROWN UNIVERSITY | 2022 - 2024
SENIOR LIBRARY TECHNOLOGIST, UX LEAD
• Designed and managed development of full-stack web applications to support academic storytelling and digital scholarship.
• Collaborated with researchers, designers, and IT to deliver scalable learning tools that prioritized access and inclusion.
• Conducted platform audits and user testing; implemented improvements in usability, content structure, and accessibility (WCAG compliance).
• Facilitated cross-departmental alignment on platform goals, timelines, and technical standards.

WILINE NETWORKS (TELECOM) | 2020 - 2022
TECHNICAL PRODUCT MANAGER
• Directed product lifecycle for customer dashboards
• Authored technical reqs and specs for API integrations and interface rebuilds.
• Partnered with engineering and finance teams to ensure project scope aligned with business goals and data privacy compliance.

EDUCATION

TRINITY COLLEGE, DUBLIN
Master of Science, Interactive Digital Media | 2024

BOSTON UNIVERSITY
Bachelor's of Science | Media and Computer Science | 2021

SKILLS

SOFTWARE
• React.js
• Node.js
• C/C++
• SQL (Postgres)
• Unity
• Pixi.js

DESIGN
• Wireframing
• Prototyping
• User Flows
• Accessibility Design
• Cross-platform UX
• Figma, Sketch, Adobe CC

OPERATIONS
• Agile, Scrum
• Jira
• UX Writing
• Design Systems
• Stakeholder Communications
• Cross-functional Teaming

SOFT SKILLS
• Communication
• Presentations
• Leadership
• Copywriting
• Creativity & Innovation
• Digital Storytelling`

  const headers = new Headers()
  headers.set("Content-Type", "text/plain")
  headers.set("Content-Disposition", 'attachment; filename="Caroline_O_Cathal_CV.txt"')

  return new NextResponse(cvContent, {
    status: 200,
    headers,
  })
}
