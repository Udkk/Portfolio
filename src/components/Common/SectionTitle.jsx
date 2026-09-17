const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16 border-t border-white/10 pt-6">

      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#66FCF1]">
        {subtitle}
      </p>

      <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white md:text-7xl">
        {title}
      </h2>

    </div>
  );
};

export default SectionTitle;
