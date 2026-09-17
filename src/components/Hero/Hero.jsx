import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[radial-gradient(circle_at_72%_38%,rgba(102,252,241,0.06),transparent_28rem),linear-gradient(135deg,rgba(31,40,51,0.48),transparent_38%),linear-gradient(180deg,rgba(11,12,16,0.30),rgba(11,12,16,0.86))]
        px-6
        pt-20
      "
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-white/10" />
      <div className="pointer-events-none absolute bottom-16 left-6 hidden h-32 w-px bg-[#66FCF1]/25 lg:block" />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-12
          py-16
          lg:grid-cols-[1.12fr_0.88fr]
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-[#66FCF1]">
            Hello, I'm
          </p>

          <h1
            className="
              text-[clamp(4.6rem,14vw,11.5rem)]
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.06em]
              text-white
            "
          >
            Udit
            <br />
            <span className="text-[#66FCF1]">Kumar</span>
          </h1>

          <div className="mt-8 flex max-w-2xl flex-col gap-5 border-l border-white/10 pl-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                Computer Science Engineer
              </h2>

              <div className="mt-3 h-8 text-base font-medium text-[#66FCF1] md:text-lg">
                <TypeAnimation
                  sequence={[
                    "Cybersecurity Enthusiast",
                    1500,
                    "AI Developer",
                    1500,
                    "Java Developer",
                    1500,
                    "Blockchain Explorer",
                    1500,
                  ]}
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#C5C6C7]">
              Passionate about building secure software, AI-powered
              applications, and modern web experiences.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-[#66FCF1]
                px-5
                py-3
                text-sm
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#0B0C10]
                transition-all
                duration-200
                hover:bg-white
              "
            >
              View Projects
              <ArrowRight size={17} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                border
                border-white/15
                bg-transparent
                px-5
                py-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#C5C6C7]
                transition-all
                duration-200
                hover:border-[#66FCF1]/40
                hover:text-white
              "
            >
              Resume
              <Download size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[29rem] lg:-mr-8">
            <div className="absolute -inset-3 border border-white/10" />
            <div className="absolute -right-5 top-10 h-28 w-px bg-[#66FCF1]/35" />

            <div className="relative overflow-hidden rounded-md bg-[#1F2833] shadow-2xl shadow-black/40">
              <img
                src="/profile.png"
                alt="Udit Kumar"
                className="
                  relative
                  aspect-[4/5]
                  w-full
                  object-cover
                  object-center
                  opacity-90
                  grayscale-[18%]
                  contrast-110
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(11,12,16,0.45),transparent_35%,rgba(11,12,16,0.25)),linear-gradient(180deg,transparent_55%,#0B0C10_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B0C10]/35 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
