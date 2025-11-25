import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [contactUser, setContactUser] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    userMessage: "",
  });

  const [contactSuccess, setContactSuccess] = useState("");
  const [contactError, setContactError] = useState("");
  const [sending, setSending] = useState(false);

  // EmailJS config
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID_OWNER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER;
  const TEMPLATE_ID_AUTOREPLY = import.meta.env
    .VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY;
  const USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleContactInput = (e) => {
    setContactUser({ ...contactUser, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactError("");
    setContactSuccess("");

    if (!contactUser.senderName || !contactUser.senderEmail) {
      setContactError("Name and email are required.");
      return;
    }

    setSending(true);

    const params = {
      from_name: contactUser.senderName,
      email: contactUser.senderEmail,
      reply_to: contactUser.senderEmail,
      title: contactUser.subject || "No subject",
      message: contactUser.userMessage,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID_OWNER, params, USER_ID)
      .then(() =>
        emailjs.send(SERVICE_ID, TEMPLATE_ID_AUTOREPLY, params, USER_ID)
      )
      .then(() => {
        setContactSuccess(
          "Message delivered! Confirmation sent to your email."
        );
        setContactUser({
          senderName: "",
          senderEmail: "",
          subject: "",
          userMessage: "",
        });
      })
      .catch(() => {
        setContactError(
          "Failed to send. Please check your info and try again."
        );
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="section-wrapper">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
        style={{ color: "var(--soft-green)" }}
      >
        Contact Us
      </motion.h1>

      <div className="row g-4">
        {/* LEFT CONTACT INFO CARD */}
        <div className="col-12 col-md-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card-8bit h-100"
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--soft-green)" }}
            >
              Let's build something together
            </h2>

            <p className="text-sm opacity-80 mb-3">
              Share your idea, portfolio needs, or business requirements. We’ll
              reply with a clear action plan.
            </p>

            <ul className="text-sm opacity-80 space-y-1">
              <li>📧 ah076145@gmail.com</li>
              <li>📱 +91-9127222171</li>
              <li>🌐 8bitbannar.in</li>
              <li>📍 Assam, India</li>
            </ul>
          </motion.div>
        </div>

        {/* RIGHT FORM */}
        <div className="col-12 col-md-7">
          <motion.form
            onSubmit={handleContactSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card-8bit"
          >
            {/* Name */}
            <div className="mb-3">
              <label className="form-label text-sm">Your Name</label>
              <input
                type="text"
                name="senderName"
                value={contactUser.senderName}
                onChange={handleContactInput}
                className="form-control bg-white/10 border-white/20 text-white text-sm"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label text-sm">Your Email</label>
              <input
                type="email"
                name="senderEmail"
                value={contactUser.senderEmail}
                onChange={handleContactInput}
                className="form-control bg-white/10 border-white/20 text-white text-sm"
                required
              />
            </div>

            {/* Subject */}
            <div className="mb-3">
              <label className="form-label text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                value={contactUser.subject}
                onChange={handleContactInput}
                className="form-control bg-white/10 border-white/20 text-white text-sm"
              />
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label text-sm">Message</label>
              <textarea
                name="userMessage"
                rows="4"
                value={contactUser.userMessage}
                onChange={handleContactInput}
                className="form-control bg-white/10 border-white/20 text-sm text-sm"
                required
              ></textarea>
            </div>

            {/* Error */}
            {contactError && (
              <div className="alert alert-danger py-2 text-xs">
                {contactError}
              </div>
            )}

            {/* Success */}
            {contactSuccess && (
              <div className="alert alert-success py-2 text-xs">
                {contactSuccess}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-main mt-2 px-4 py-2 text-sm rounded-pill"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
