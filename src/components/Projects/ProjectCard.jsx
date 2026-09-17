import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  index = 0,
  title,
  subtitle,
  description,
  tech,
  github,
  live,
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          group
          relative
          overflow-hidden
          border-b
          border-white/10
          py-12
          transition-colors
          duration-300
          hover:bg-[#1F2833]/18
          md:py-16
        "
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66FCF1]">
                Project {projectNumber}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <h3 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl">
              {title}
            </h3>

            <p className="mt-4 text-base font-semibold text-[#C5C6C7] md:text-lg">
              {subtitle}
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#88919A] md:text-base">
              {description}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-3">
              {tech.map((item) => (
                <span
                  key={item}
                  className="
                    border-b
                    border-white/10
                    pb-1
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#C5C6C7]
                    transition-colors
                    duration-200
                    group-hover:border-[#66FCF1]/35
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-white/15
                  px-4
                  py-2.5
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
                <FaGithub size={16} />
                GitHub
              </a>

              {live && live !== "#" && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-md
                    bg-[#66FCF1]
                    px-4
                    py-2.5
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
                  Live Demo
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 border border-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="grid gap-3 sm:grid-cols-2">
              {images?.slice(0, 2).map((image, imageIndex) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="
                    group/image
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    rounded-md
                    bg-[#1F2833]
                    text-left
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#66FCF1]/60
                  "
                  aria-label={`View ${title} screenshot ${imageIndex + 1}`}
                >
                  <img
                    src={image}
                    alt={`${title} screenshot ${imageIndex + 1}`}
                    className="
                      h-full
                      w-full
                      object-cover
                      opacity-90
                      transition-all
                      duration-500
                      group-hover/image:scale-[1.03]
                      group-hover/image:opacity-100
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/50 via-transparent to-transparent" />

                  <span
                    className="
                      absolute
                      bottom-3
                      left-3
                      z-10
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-white
                    "
                  >
                    0{imageIndex + 1}
                  </span>

                  <span
                    className="
                      absolute
                      right-3
                      top-3
                      z-10
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#66FCF1]
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover/image:opacity-100
                    "
                  >
                    View
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/85
            p-4
            backdrop-blur-sm
          "
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="
              relative
              max-h-[90vh]
              max-w-[95vw]
              overflow-hidden
              rounded-md
              border
              border-white/15
              bg-[#0B0C10]
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={`${title} enlarged screenshot`}
              className="max-h-[85vh] max-w-[90vw] object-contain"
            />

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                right-3
                top-3
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-[#0B0C10]/90
                text-[#C5C6C7]
                transition-colors
                hover:border-[#66FCF1]/40
                hover:text-white
              "
              aria-label="Close image preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
