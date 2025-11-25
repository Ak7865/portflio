import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  const services = [
    "Portfolio Development",
    "Web Development",
    "UI/UX & Branding",
  ];

  return (
    <footer
      className="border-t border-lavender/30 mt-10"
      style={{ backgroundColor: "rgb(61,38,82)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-lavender mb-3">
              8BitBannar
            </h3>
            <p className="text-sm text-lavender/80">
              A WebTech company from Assam, specializing in modern, responsive
              web design, full-stack development, and digital branding.
            </p>
            <div className="flex items-center gap-2 text-xs text-lavender/70">
              <span>📍</span>
              <span>Assam, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-lavender mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-lavender/80 hover:text-soft-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-lavender mb-3">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-lavender/80 hover:text-soft-green transition-colors cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-lavender mb-3">
              Get In Touch
            </h3>
            <ul className="space-y-2 text-sm text-lavender/80">
              <li>
                <a
                  href="mailto:ah076145@gmail.com"
                  className="hover:text-soft-green transition-colors flex items-center gap-2"
                >
                  <span>📧</span>
                  <span>ah076145@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919127222171"
                  className="hover:text-soft-green transition-colors flex items-center gap-2"
                >
                  <span>📱</span>
                  <span>+91-9127222171</span>
                </a>
              </li>
              <li>
                <a
                  href="https://8bitbannar.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-soft-green transition-colors flex items-center gap-2"
                >
                  <span>🌐</span>
                  <span>8bitbannar.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-lavender/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <p className="text-lavender/70">
            © {currentYear} 8BitBannar. All rights reserved.
          </p>
          <p className="text-lavender/70">
            Built with by{" "}
            <a
              href="https://8bitbannar.in"
              target="_blank"
              rel="noreferrer"
              className="text-soft-green hover:text-accent-green transition-colors font-semibold"
            >
              8BitBannar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
