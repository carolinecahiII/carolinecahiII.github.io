export function Hero() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-light tracking-wide">
                  UX DESIGNER & PRODUCT SPECIALIST
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
                CAROLINE
                <br />
                <span className="text-stone-600">CAHILL</span>
              </h1>

              <div className="w-24 h-1 bg-amber-400"></div>
            </div>

            <p className="text-lg md:text-xl font-light leading-relaxed text-stone-700 max-w-2xl">
              Experienced product and operations leader with 7+ years managing cross-functional teams, launching
              interactive platforms, and delivering user-centered digital tools.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-stone-900 text-white px-8 py-3 rounded-none font-light tracking-wide hover:bg-stone-800 transition-colors"
              >
                GET IN TOUCH
              </a>
              <a
                href="https://carolinecahill.co"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-stone-900 text-stone-900 px-8 py-3 rounded-none font-light tracking-wide hover:bg-stone-900 hover:text-white transition-colors"
              >
                VIEW PORTFOLIO
              </a>
            </div>
          </div>

          {/* Right Column - Geometric Elements */}
          <div className="lg:col-span-4 relative">
            <div className="relative h-96 lg:h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 opacity-60"></div>
              <div className="absolute top-16 right-16 w-24 h-24 bg-amber-300 opacity-80"></div>
              <div className="absolute bottom-16 right-8 w-40 h-2 bg-stone-900"></div>
              <div className="absolute bottom-0 right-0 w-2 h-32 bg-emerald-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
