"use client"

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] bg-gradient-to-br from-green-800 via-green-700 to-green-600 overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Contact <span className="text-green-200">Us</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed max-w-3xl mx-auto">
            Have questions about our products? Need nutrition advice for your pet? We're here to help!
          </p>
        </div>
      </div>
    </section>
  )
}
