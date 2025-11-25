import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { color, motion } from "framer-motion";
import logo from "../assets/logo.jpg"; // put your logo at src/assets/logo.png

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-lavender/30" style={{ backgroundColor: "transparent" }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16" >
       
        
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="8BitBannar" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-xl font-semibold text-lavender">
            8BitBannar
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition hover:text-soft-green ${
                    isActive ? "text-soft-green" : "text-lavender"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
         

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-lavender/30 rounded-lg"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1">
              <span className="block w-5 h-0.5 bg-lavender" />
              <span className="block w-5 h-0.5 bg-lavender" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary/98 border-t border-lavender/30"
        >
          <ul className="px-4 py-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-2 py-2 rounded-md ${
                      isActive
                        ? "bg-soft-green/20 text-soft-green"
                        : "text-lavender hover:bg-lavender/10"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
