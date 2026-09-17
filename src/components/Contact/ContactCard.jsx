import { motion } from "framer-motion";

const ContactCard = ({
  icon,
  title,
  description,
  link,
  label,
}) => {
  return (
    <motion.a
      href={link}
      target={link.startsWith("http") ? "_blank" : undefined}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ x: 6 }}
      transition={{ duration: 0.2 }}
      className="
        group
        grid
        grid-cols-[44px_1fr]
        gap-4
        border-b
        border-white/10
        py-6
        transition-colors
        duration-300
        hover:bg-[#1F2833]/18
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-md
          border
          border-white/10
          text-[#66FCF1]
          transition-all
          duration-300
          group-hover:border-[#66FCF1]/40
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="text-xl font-black uppercase tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#88919A]">
          {description}
        </p>

        <p className="mt-3 break-words text-sm font-semibold text-[#66FCF1]">
          {label}
        </p>
      </div>
    </motion.a>
  );
};

export default ContactCard;
