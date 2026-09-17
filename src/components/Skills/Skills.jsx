import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import SkillCard from "./SkillCard";

import { skillCategories } from "../../data/Skills";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative bg-[#0B0C10] py-32">
      <Container>
        <SectionTitle
          subtitle="02 / Skills"
          title="Technical stack for secure systems."
        />

        <div className="mb-12 flex flex-wrap gap-x-8 gap-y-4 border-y border-white/10 py-5">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(index)}
              className={`text-sm font-semibold uppercase tracking-[0.22em] transition ${
                activeTab === index
                  ? "text-[#66FCF1]"
                  : "text-[#88919A] hover:text-[#C5C6C7]"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: .3 }}
            className="grid gap-0 border-t border-white/10"
          >
            {skillCategories[activeTab].skills.map((skill) => (
              <SkillCard
                key={skill.name}
                {...skill}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default Skills;
