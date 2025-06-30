import { Mail, ExternalLink, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="text-3xl font-light tracking-wide mb-4">GET IN TOUCH</h2>
              <div className="w-16 h-1 bg-emerald-400"></div>
            </div>

            <p className="font-light leading-relaxed text-stone-300">
              Ready to collaborate on your next project? Let's discuss how we can create exceptional user experiences
              together.
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium tracking-wide mb-2">EMAIL</h3>
                  <a
                    href="mailto:carolinecahill99@gmail.com"
                    className="text-stone-300 hover:text-emerald-400 transition-colors font-light"
                  >
                    carolinecahill99@gmail.com
                  </a>
                </div>
              </div>

              {/* Portfolio */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <h3 className="font-medium tracking-wide mb-2">PORTFOLIO</h3>
                  <a
                    href="https://carolinecahill.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 hover:text-amber-400 transition-colors font-light"
                  >
                    carolinecahill.co
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h3 className="font-medium tracking-wide mb-2">LINKEDIN</h3>
                  <a
                    href="https://www.linkedin.com/in/caroline-cahill-453389178/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 hover:text-blue-400 transition-colors font-light"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            {/* Geometric Elements */}
            <div className="relative mt-12 h-32">
              <div className="absolute top-0 right-0 w-24 h-24 border border-emerald-600 opacity-30"></div>
              <div className="absolute bottom-0 left-1/4 w-32 h-1 bg-amber-400"></div>
              <div className="absolute top-1/2 right-1/4 w-1 h-16 bg-emerald-600"></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-stone-800 mt-16 pt-8 text-center">
          <p className="font-light text-stone-400 tracking-wide">© 2024 CAROLINE CAHILL. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </section>
  )
}
