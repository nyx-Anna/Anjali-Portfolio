import { useRef, useState } from "react";
import { isEmailConfigured, sendContactEmail } from "../lib/contactEmail";

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

function Contact() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const sending = useRef(false);
  const configured = isEmailConfigured(emailConfig);

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    sending.current = true;
    setStatus("sending");
    setFeedback("");
    try {
      await sendContactEmail(
        {
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          message: String(data.get("message") || ""),
        },
        emailConfig,
      );
      setStatus("success");
      setFeedback("Thanks for reaching out! Your message has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(error.message);
    } finally {
      sending.current = false;
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-black section-space overflow-hidden"
    >
      {/* Purple Glow */}
      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        bg-violet-700/10
        blur-[150px]
        rounded-full
        pointer-events-none
        "
      ></div>

      <div className="relative z-10 page-container">
        {/* Heading */}
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mb-5 mt-6 leading-8 text-center">
            Have a project in mind or want to work together? I'd love to hear
            from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div
            className="
            bg-[#111]
            border border-violet-500/20
            rounded-2xl
            p-8
            hover:border-violet-500/50
            transition
            duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send me a message
            </h3>

            <form
              className="space-y-5"
              onSubmit={handleSubmit}
              aria-busy={status === "sending"}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-gray-300 mb-2"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  disabled={status === "sending"}
                  placeholder="Your name"
                  className="
                  w-full
                  bg-black
                  border border-violet-500/30
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  placeholder-gray-600
                  outline-none
                  focus:border-violet-500
                  focus:ring-1
                  focus:ring-violet-500
                  transition
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-gray-300 mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  disabled={status === "sending"}
                  placeholder="your@email.com"
                  className="
                  w-full
                  bg-black
                  border border-violet-500/30
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  placeholder-gray-600
                  outline-none
                  focus:border-violet-500
                  focus:ring-1
                  focus:ring-violet-500
                  transition
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-gray-300 mb-2"
                >
                  Message
                </label>

                <textarea
                  rows="5"
                  id="contact-message"
                  name="message"
                  required
                  maxLength={5000}
                  disabled={status === "sending"}
                  placeholder="Tell me about your project..."
                  className="
                  w-full
                  bg-black
                  border border-violet-500/30
                  rounded-lg
                  px-4
                  py-3
                  text-white
                  placeholder-gray-600
                  outline-none
                  resize-none
                  focus:border-violet-500
                  focus:ring-1
                  focus:ring-violet-500
                  transition
                  "
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={!configured || status === "sending"}
                style={{
                  opacity: !configured || status === "sending" ? 0.5 : 1,
                  cursor:
                    !configured || status === "sending"
                      ? "not-allowed"
                      : "pointer",
                }}
                className="
                w-full
                py-3
                rounded-lg
                bg-violet-600
                text-white
                font-semibold
                hover:bg-violet-500
                hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]
                transition
                duration-300
                "
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
              <p
                role="status"
                aria-live="polite"
                className={
                  status === "error"
                    ? "text-sm text-rose-300"
                    : "text-sm text-violet-200"
                }
              >
                {feedback}
              </p>
              {!configured && (
                <p className="text-sm text-gray-400">
                  The contact form is being set up. You can email me directly
                  below.
                </p>
              )}
            </form>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-8">
            {/* About Contact */}
            <div
              className="
              bg-[#111]
              border border-violet-500/20
              rounded-2xl
              p-8
              "
            >
              <h3 className="text-2xl font-semibold text-white mb-5">
                Let's connect
              </h3>

              <p className="text-gray-400 leading-7">
                I'm always open to discussing new opportunities, creative
                projects, collaborations, or just having a conversation about
                technology and web development.
              </p>

              <p className="text-gray-400 leading-7 mt-4">
                Whether you're looking to build something from scratch or
                improve an existing project, feel free to reach out.
              </p>
            </div>

            {/* Socials */}
            <div
              className="
              bg-[#111]
              border border-violet-500/20
              rounded-2xl
              p-8
              "
            >
              <h3 className="text-xl font-semibold text-white mb-5">
                Find me online
              </h3>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/nyx-Anna"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  px-5
                  py-2.5
                  rounded-lg
                  border border-violet-500/40
                  text-violet-300
                  hover:bg-violet-600
                  hover:text-white
                  transition
                  "
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/anjali-jha-dev/"
                  className="
                  px-5
                  py-2.5
                  rounded-lg
                  border border-violet-500/40
                  text-violet-300
                  hover:bg-violet-600
                  hover:text-white
                  transition
                  "
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:jhaanju236@gmail.com"
                  className="
                  px-5
                  py-2.5
                  rounded-lg
                  border border-violet-500/40
                  text-violet-300
                  hover:bg-violet-600
                  hover:text-white
                  transition
                  "
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
