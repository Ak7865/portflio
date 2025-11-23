import { motion } from "framer-motion";

const services = [
  {
    title: "Portfolio Development",
    icon: "fa-regular fa-id-card",
    text: "Personal and professional portfolio websites that showcase your skills, projects, and story with a clean, modern design.",
  },
  {
    title: "Web Development",
    icon: "fa-solid fa-code",
    text: "End-to-end web development using React, PHP, MySQL, Tailwind, and Bootstrap for fast, responsive, and secure sites.",
  },
  {
    title: "UI / UX & Branding",
    icon: "fa-solid fa-crop-simple",
    text: "Thoughtful interfaces, color systems, and layouts that reflect your brand and keep users engaged.",
  },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-6"
      >
        Our <span className="text-primary">Services</span>
      </motion.h1>

      <p className="text-sm sm:text-base text-gray-300 max-w-3xl mb-8">
        Whether you&apos;re a student, freelancer, or business, we help you
        build your presence on the web — from simple landing pages to custom
        portals connected with clean backends.
      </p>

      <div className="row g-4">
        {services.map((service, idx) => (
          <div key={service.title} className="col-12 col-md-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-100 bg-white/5 border border-white/10 rounded-3xl p-4 d-flex flex-column gap-2"
            >
              <i className={`${service.icon} text-xl mb-1 text-primary`}></i>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.text}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
