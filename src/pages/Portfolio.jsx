import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolios",
    img: "/work-1.png",
    desc: "Custom portfolio layouts designed for students, developers and professionals.",
    link: "https://github.com/Ak7865/portflio",
  },
  {
    title: "Clone Website / App UI",
    img: "/work-2.png",
    desc: "Practice UIs and clones built to sharpen frontend skills and animations.",
    link: "https://github.com/Ak7865/Snake_Game",
  },
  {
    title: "College Website",
    img: "/work-3.png",
    desc: "An informational and modern college website structure using HTML, CSS & JS.",
    link: "https://github.com/Ak7865/COLLEGE_WEBSITE",
  },
];

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-6"
      >
        Our <span className="text-primary">Work</span>
      </motion.h1>

      <p className="text-sm sm:text-base text-gray-300 max-w-3xl mb-8">
        A glimpse of some of the projects and experiments done by 8BitBannar. We
        keep learning, iterating, and building better each time.
      </p>

      <div className="row g-4">
        {projects.map((project, idx) => (
          <div key={project.title} className="col-12 col-md-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden h-100"
            >
              <div className="relative aspect-video overflow-hidden">
                {/* You can later replace with actual images in /public */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-black" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-xs text-primary hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
