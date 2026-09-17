import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Code2,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Badge from "../common/Badge";

const About = () => {
  return (
    <section id="about" className="relative bg-[#0B0C10] py-32">
      <Container>
        <SectionTitle
          subtitle="01 / About"
          title="Secure digital experiences, built with intent."
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"
        >
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#66FCF1]">
              Profile
            </p>

            <p className="mt-8 text-2xl font-semibold leading-tight text-white md:text-4xl">
              I'm a Computer Science Engineer passionate about Cybersecurity, Artificial Intelligence, and Full Stack Development. I enjoy building practical projects that combine secure systems, intelligent solutions, and modern web technologies.

            </p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="max-w-3xl text-lg leading-9 text-[#C5C6C7]">
              I enjoy solving real-world problems by building secure,
              scalable, and user-friendly applications.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Badge text="Cybersecurity" />
              <Badge text="AI" />
              <Badge text="React" />
              <Badge text="Java" />
              <Badge text="Blockchain" />
              <Badge text="Machine Learning" />
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
              <div className="flex gap-4">
                <GraduationCap className="mt-1 shrink-0 text-[#66FCF1]" />

                <div>
                  <h4 className="font-semibold text-white">
                    Education
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#88919A]">
                    B.E. Computer Science Engineering
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-[#66FCF1]" />

                <div>
                  <h4 className="font-semibold text-white">
                    Location
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#88919A]">
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Code2 className="mt-1 shrink-0 text-[#66FCF1]" />

                <div>
                  <h4 className="font-semibold text-white">
                    Tech Stack
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#88919A]">
                    Java / React / Node / Python
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
