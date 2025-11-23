import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-10 items-center min-h-[70vh]"
      >
        {/* Left */}
        <div className="space-y-6">
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-[0.3em] text-xs font-semibold text-soft-green"
          >
            8BitBannar · WebTech Company
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-lavender via-soft-green to-accent-green bg-clip-text text-transparent">
              Hi, we are{" "}
            </span>
            <br />
            <span className="text-lavender">8BitBannar</span>
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-lavender/90 mt-2 block">
              <ReactTyped
                strings={[
                  "Syed Akhter Hussain · Full Stack Developer",
                  "Nilotpal Choudhury · Frontend Developer",
                  "Rakibul Islam · Marketing & Promotion",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-soft-green"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-lavender/80 max-w-xl leading-relaxed"
          >
            We craft responsive, modern websites and web apps that blend clean
            UI, smooth UX, and solid backend architecture. Based in Assam, we
            help brands build a strong digital presence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="inline-block text-sm sm:text-base px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-accent-green to-soft-green text-primary hover:shadow-lg hover:shadow-accent-green/50 transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block text-sm sm:text-base px-6 py-3 rounded-full font-semibold border-2 border-lavender/50 text-lavender hover:border-soft-green hover:text-soft-green hover:bg-soft-green/10 transition-all duration-300"
              >
                Let&apos;s Build Together
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-xs sm:max-w-sm"
          >
            {/* Animated gradient background */}
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle, rgba(61,38,82,0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(153,213,98,0.2) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(40,175,110,0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(61,38,82,0.3) 0%, transparent 70%)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-8 blur-3xl"
            />
            <div className="relative bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-3xl border border-lavender/20 p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-lavender">
                WebTech Solutions for Modern Brands
              </h3>
              <p className="text-sm text-lavender/80 mb-4 leading-relaxed">
                From portfolio sites to custom web apps, we handle design,
                frontend, backend and deployment.
              </p>
              <ul className="text-sm text-lavender/70 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-soft-green mt-1">✓</span>
                  <span>Custom Portfolio & Business Websites</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green mt-1">✓</span>
                  <span>Responsive UI with Tailwind & Bootstrap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green mt-1">✓</span>
                  <span>PHP / MySQL & modern JS stacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green mt-1">✓</span>
                  <span>Branding, Marketing & Promotions</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
