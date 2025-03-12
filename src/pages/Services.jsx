import React from 'react'

function Services() {
    const services = [
        { title: "Web Development", description: "Building responsive and modern websites.", icon: "💻" },
        { title: "UI/UX Design", description: "Creating intuitive and engaging user interfaces.", icon: "🎨" },
        { title: "SEO Optimization", description: "Enhancing search visibility and rankings.", icon: "📈" },
        { title: "Content Writing", description: "Crafting compelling and engaging content.", icon: "✍️" }
      ];

  return (
    <section className="py-20 px-6 flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-300">
      <h2 className="text-3xl font-bold text-center mb-8">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl place-items-center mt-10">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center text-center w-full max-w-xs border border-gray-300">
            <span className="text-4xl mb-4">{service.icon}</span>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services