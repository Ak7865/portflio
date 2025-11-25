import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";

import akhterImg from "../assets/akhter.jpg";
import nilotpalImg from "../assets/nil.jpeg";
import rakibulImg from "../assets/rakibul.png";

const team = [
  {
    name: "Syed Akhter Hussain",
    role: "Full Stack Developer · Founder, 8BitBannar",
    quote:
      "Code, creativity and curiosity — I love turning ideas into reliable, beautiful web experiences.",
    skills: [
      "HTML, CSS, Bootstrap, Tailwind",
      "JavaScript, React, PHP, MySQL",
      "REST APIs, Authentication, Deployment",
    ],
    education: [
      "B.Tech in Computer Science & Engineering (Ongoing)",
      "Diploma in Computer Science & Engineering",
      "HS from Kalong Kapili Vidyapith",
      "HSLC from Morikalong High School",
    ],
    img: akhterImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/syed-akhter-hussain-026361233/",
      instagram: "https://instagram.com/syed_akhter_hussain",
      github: "https://github.com/Ak7865",
    },
  },
  {
    name: "Nilotpal Choudhury",
    role: "Frontend Developer · Co-Founder, 8BitBannar",
    quote:
      "I focus on crafting clean, responsive interfaces that feel smooth and intuitive.",
    skills: ["HTML, CSS, JavaScript", "UI Layouts", "Responsive Web Design"],
    education: [
      "B.Tech in CSE (BVEC - ongoing)",
      "Diploma in CSE (Nalbari Polytechnic)",
      "HSLC from Don Bosco School",
    ],
    img: nilotpalImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/nilotpal-choudhury-872317234/",
      instagram: "https://www.instagram.com/nilotpal_8475",
    },
  },
  {
    name: "Rakibul Islam",
    role: "Marketing & Promotion · Co-Founder, 8BitBannar",
    quote:
      "Good products deserve great visibility — I help brands reach the right audience.",
    skills: [
      "Digital Marketing Basics",
      "Brand Visibility",
      "Social Media Promotions",
    ],
    education: [
      "B.Tech in CSE (USTM - ongoing)",
      "Diploma in CSE (Nalbari Polytechnic)",
      "High Schooling From JNV",
    ],
    img: rakibulImg,
    socials: {
      linkedin: "https://www.linkedin.com/in/rakibul-islam-809570239/",
      instagram: "https://www.instagram.com/just_bul",
    },
  },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold"
      >
        About <span className="text-primary">8BitBannar</span>
      </motion.h1>

      <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
        8BitBannar is a WebTech company from Assam, specializing in modern,
        responsive web design, full-stack development, UI/UX, and digital
        branding.
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold"
      >
        Our <span className="text-primary">Team</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
