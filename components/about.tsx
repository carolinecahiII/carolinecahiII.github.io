export function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-light tracking-wide mb-4">ABOUT</h2>
            <div className="w-16 h-1 bg-amber-400"></div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg font-light leading-relaxed text-stone-700">
                  I specialize in aligning business goals with technical execution, improving accessibility, and scaling
                  mission-driven experiences in education, storytelling, and the arts.
                </p>

                <p className="font-light leading-relaxed text-stone-600">
                  Known for blending strategic planning with hands-on delivery in fast-paced, collaborative
                  environments. I bring creativity and innovation to every project while maintaining focus on
                  user-centered design principles.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-stone-50 p-6 border-l-4 border-emerald-600">
                  <h3 className="font-medium tracking-wide mb-2">EDUCATION</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium">Master of Science, Interactive Digital Media</div>
                      <div className="text-stone-600">Trinity College, Dublin • 2024</div>
                    </div>
                    <div>
                      <div className="font-medium">Bachelor's of Science, Media and Computer Science</div>
                      <div className="text-stone-600">Boston University • 2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
