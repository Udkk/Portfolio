const Button = ({
  children,
  variant = "primary",
  onClick,
}) => {

  const styles = {
    primary:
      "bg-[#66FCF1] hover:bg-white text-[#0B0C10]",

    secondary:
      "border border-white/15 hover:border-[#66FCF1]/40 text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${styles[variant]} px-6 py-3 rounded-md transition duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
