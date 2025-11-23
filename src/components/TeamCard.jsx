import { motion } from "framer-motion";

export default function TeamCard({ name, role, quote, skills, education, img }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3"
    >
      {/* TEAM IMAGE */}
      <img
  src={img}
  alt={name}
  className="w-full h-48 object-contain rounded-xl border border-white/10 mb-3 bg-transparent"
/>


      <h3 className="text-lg font-semibold text-primary">{name}</h3>
      <p className="text-sm text-gray-300">{role}</p>
      <p className="text-xs text-gray-400 italic">&ldquo;{quote}&rdquo;</p>

      <div>
        <h4 className="text-xs font-semibold text-gray-200 mb-1">Skills</h4>
        <ul className="list-disc list-inside text-xs text-gray-300 space-y-0.5">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-gray-200 mb-1">Education</h4>
        <ul className="list-disc list-inside text-xs text-gray-300 space-y-0.5">
          {education.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
