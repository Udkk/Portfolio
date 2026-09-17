import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, name, description }) => {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      transition={{ duration: 0.25 }}
      className="
        group
        grid
        gap-5
        border-b
        border-white/10
        py-6
        transition-all
        duration-300
        md:grid-cols-[72px_1fr_1.4fr]
      "
    >
      <div className="text-[#66FCF1] opacity-80 transition-opacity group-hover:opacity-100">
        <Icon size={34} />
      </div>

      <h3 className="text-2xl font-black uppercase tracking-tight text-white">
        {name}
      </h3>

      <p className="text-sm uppercase leading-7 tracking-[0.16em] text-[#88919A] transition-colors group-hover:text-[#C5C6C7]">
        {description}
      </p>
    </motion.div>
  );
};

export default SkillCard;
