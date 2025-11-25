import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";

import akhterImg from "../assets/akhter.jpg";
import nilotpalImg from "../assets/nil.jpg";
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
  },
  {
    name: "Nilotpal Choudhury",
    role: "Frontend Developer",
    quote:
      "I focus on crafting clean, responsive interfaces that feel smooth and intuitive.",
    skills: ["HTML, CSS, JavaScript", "UI Layouts", "Responsive Web Design"],
    education: [
      "B.Tech in CSE (BVEC - ongoing)",
      "Diploma in CSE (Nalbari Polytechnic)",
      "HSLC from Don Bosco School",
    ],
    img: nilotpalImg,
  },
  {
    name: "Rakibul Islam",
    role: "Marketing & Promotion",
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
      "High Schooling From JNV"
    ],
    img: rakibulImg,
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
        responsive web design, full-stack development, UI/UX, and digital branding.
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
