import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

const CertificateCard = ({
  index = 0,
  title,
  issuer,
  category,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const certificateNumber = String(index + 1).padStart(2, "0");

  return (
    <>
      <motion.article
        whileHover={{ x: 6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          group
          grid
          gap-6
          border-b
          border-white/10
          py-7
          transition-colors
          duration-300
          hover:bg-[#1F2833]/18
          md:grid-cols-[0.18fr_0.32fr_1fr_0.22fr]
          md:items-center
        "
      >
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#66FCF1]">
          {certificateNumber}
        </span>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="
            block
            w-full
            overflow-hidden
            rounded-md
            bg-[#1F2833]
            text-left
            focus:outline-none
            focus:ring-2
            focus:ring-[#66FCF1]/50
          "
          aria-label={`View ${title} certificate`}
        >
          <img
            src={image}
            alt={`${title} certificate`}
            className="
              h-36
              w-full
              object-cover
              object-top
              opacity-85
              transition-all
              duration-500
              group-hover:scale-[1.02]
              group-hover:opacity-100
            "
          />
        </button>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#88919A]">
            {category}
          </span>

          <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-[#C5C6C7]">
            {issuer}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.14em]
            text-[#C5C6C7]
            transition-colors
            duration-200
            hover:text-[#66FCF1]
            md:justify-self-end
          "
        >
          View
          <ExternalLink size={15} />
        </button>
      </motion.article>

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/85
            p-4
            backdrop-blur-md
          "
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              relative
              max-h-[94vh]
              max-w-[95vw]
              overflow-hidden
              rounded-md
              border
              border-white/15
              bg-[#0B0C10]
              p-2
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={`${title} enlarged certificate`}
              className="
                max-h-[90vh]
                max-w-[92vw]
                rounded-sm
                object-contain
              "
            />

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="
                absolute
                right-4
                top-4
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
                shadow-lg
                backdrop-blur-sm
                transition-all
                duration-200
                hover:border-[#66FCF1]/40
                hover:text-white
              "
              aria-label="Close certificate"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
