"use client"

export function ContactMap() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Find Us</h2>
          <p className="text-gray-600">Visit our office or find AnimalLife products at these locations</p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Map showing AnimalLife locations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Store Locations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-800 mb-2">Main Office</h3>
            <p className="text-gray-600 text-sm">123 Pet Nutrition Street, Cairo</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-800 mb-2">Distribution Center</h3>
            <p className="text-gray-600 text-sm">456 Warehouse District, Giza</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-800 mb-2">Research Lab</h3>
            <p className="text-gray-600 text-sm">789 Science Park, Alexandria</p>
          </div>
        </div>
      </div>
    </section>
  )
}
