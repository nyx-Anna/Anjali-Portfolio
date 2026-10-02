import { useEffect, useRef, useState } from "react";
import profile from "../assets/profile.jpg";
import resume from "../assets/Anjali_Jha_RESUME.pdf";

function About() {
  const [flipped, setFlipped] = useState(false);
  const portraitRef = useRef(null);

  useEffect(() => {
    let frameId = null;

    const updateFlip = () => {
      frameId = null;

      if (!portraitRef.current) return;

      const rect = portraitRef.current.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;

      // Reveal the back when the card passes this point.
      setFlipped(cardCenter <= window.innerHeight * 0.55);
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateFlip);
      }
    };

    updateFlip();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section id="about" className="relative bg-black section-space">
      <div className="page-container">
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
            About Me
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-5 text-gray-400 leading-8">
            <p>
              I'm a passionate Frontend Developer and Computer Science graduate
              who enjoys creating beautiful, responsive, and user-friendly web
              applications. I love turning ideas into interactive digital
              experiences using modern technologies.
            </p>
            <p>
              My journey started with curiosity and has grown into a passion for
              building websites that are both functional and visually appealing.
              I'm constantly learning, experimenting, and improving my skills to
              become a better developer every day.
            </p>
            <p>
              Outside of coding, I enjoy exploring UI designs, learning new
              technologies, and working on personal projects that challenge my
              creativity.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 min-w-0">
            <div
              ref={portraitRef}
              className={`portrait-card ${flipped ? "is-flipped" : ""}`}
            >
              <div className="portrait-inner">
                <div className="portrait-face" aria-hidden={flipped}>
                  <img
                    src={profile}
                    alt="Anjali Jha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  id="resume-card"
                  className="portrait-face portrait-back"
                  inert={!flipped}
                  aria-hidden={!flipped}
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-violet-300">
                    A little more about me
                  </span>
                  <h3 className="text-3xl font-semibold">Anjali Jha</h3>
                  <p className="text-gray-400">
                    Frontend Developer
                    <br />
                    Curious mind. Creative code.
                  </p>
                  <a
                    href={resume}
                    download="Anjali_Jha_RESUME.pdf"
                    className="rounded-full bg-violet-600 hover:bg-violet-500 px-6 py-3 font-medium transition"
                  >
                    Download Resume <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setFlipped(!flipped)}
              aria-expanded={flipped}
              aria-controls="resume-card"
              className="px-4 py-3 text-sm text-violet-300 hover:text-white transition"
            >
              {flipped ? "Back to photo ↺" : "Flip photo to view my resume ↗"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
