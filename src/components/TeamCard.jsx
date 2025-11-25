import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function TeamCard({
  name,
  role,
  quote,
  skills,
  education,
  img,
  socials,
}) {
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
      {/* SOCIAL ICONS */}
      {/* SOCIAL ICONS */}
      {socials && (
        <div className="flex gap-4 mt-4">
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full 
                   bg-white/10 hover:bg-white/20 text-soft-green hover:text-accent-green 
                   transition-all backdrop-blur-sm border border-white/10"
              style={{ textDecoration: "none" }}
            >
              <FaLinkedin size={26} />
            </a>
          )}

          {socials.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full 
                   bg-white/10 hover:bg-white/20 text-soft-green hover:text-pink-400 
                   transition-all backdrop-blur-sm border border-white/10"
              style={{ textDecoration: "none" }}
            >
              <FaInstagram size={26} />
            </a>
          )}

          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full 
                   bg-white/10 hover:bg-white/20 text-soft-green hover:text-white 
                   transition-all backdrop-blur-sm border border-white/10"
              style={{ textDecoration: "none" }}
            >
              <FaGithub size={26} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
