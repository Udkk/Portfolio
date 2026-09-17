import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import { certificates } from "../../data/Certificates";

const Certificates = () => {
  return (
    <section id="certificates" className="relative bg-[#0B0C10] px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-t border-white/10 pt-6"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#66FCF1]">
            04 / Certifications
          </p>

          <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white md:text-7xl">
            Learning across security, networks, cloud, and AI.
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#88919A] md:text-base">
            Certifications and courses that have strengthened my
            knowledge across cybersecurity, networking, cloud,
            artificial intelligence, and databases.
          </p>
        </motion.div>

        <div className="grid border-t border-white/10">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
            >
              <CertificateCard index={index} {...certificate} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
