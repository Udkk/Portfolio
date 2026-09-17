import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", to: "" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Certificates", to: "certificates" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-[#0B0C10]/70
        backdrop-blur-lg
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <a
          href="#"
          className="
            text-2xl
            font-black
            uppercase
            tracking-tight
            text-white
            transition-colors
            hover:text-[#66FCF1]
          "
        >
          Udit<span className="text-[#66FCF1]">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.to}`}
                className="
                  text-sm
                  font-medium
                  text-[#C5C6C7]
                  transition-colors
                  duration-200
                  hover:text-[#66FCF1]
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            rounded-lg
            border
            border-white/10
            bg-[#1F2833]/60
            p-2
            text-[#C5C6C7]
            transition-all
            duration-200
            hover:border-[#66FCF1]/35
            hover:text-[#66FCF1]
            md:hidden
          "
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="
            border-t
            border-white/10
            bg-[#0B0C10]/95
            px-6
            pb-4
            md:hidden
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.to}`}
              className="
                block
                border-b
                border-white/10
                py-3
                text-sm
                font-medium
                text-[#C5C6C7]
                transition-colors
                duration-200
                last:border-b-0
                hover:text-[#66FCF1]
              "
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
