export type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      style={{
        padding: "16px",
        background: "#15DBFF",
        borderRadius: "8px",
        fontSize: "1rem",
        border: "none",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
