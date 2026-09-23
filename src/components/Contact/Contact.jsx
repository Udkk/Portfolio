import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#0B0C10] px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 border-t border-white/10 pt-6"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#66FCF1]">
            05 / Contact
          </p>

          <h2 className="text-[clamp(4rem,13vw,10rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-white">
            Let's
            <br />
            Connect.
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#88919A] md:text-base">
            Interested in working together, discussing a project,
            or simply connecting? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border-t border-white/10 pt-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#66FCF1]">
              Open to opportunities
            </span>

            <h3 className="mt-5 max-w-xl text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl">
              Let's build something meaningful.
            </h3>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#C5C6C7] md:text-base">
              I'm currently looking for internship and
              entry-level opportunities in cybersecurity and
              information security. I'm especially interested in
              network security, threat analysis, incident response,
              and security research.
            </p>

            <a
              href="mailto:udit8508@gmail.com"
              className="
                mt-9
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
              <Mail size={17} />
              Send me an email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border-t border-white/10"
          >
            <ContactCard
              icon={<Mail size={20} />}
              title="Email"
              description="Get in touch directly"
              label="your-udit8508@gmail.com"
              link="mailto:udit8508@gmail.com"
            />

            <ContactCard
              icon={<FaGithub size={20} />}
              title="GitHub"
              description="Explore my projects and code"
              label="github.com/Udkk"
              link="https://github.com/Udkk"
            />

            <ContactCard
              icon={<FaLinkedinIn size={20} />}
              title="LinkedIn"
              description="Connect with me professionally"
              label="LinkedIn Profile"
              link="https://www.linkedin.com/in/udit-kumar-a99550309/"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
