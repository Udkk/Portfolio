import { motion } from "framer-motion";
import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/project";

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0B0C10] py-32">
      <Container>
        <SectionTitle
          subtitle="03 / Projects"
          title="Selected security and software systems."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="grid gap-0 border-t border-white/10"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              {...project}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
