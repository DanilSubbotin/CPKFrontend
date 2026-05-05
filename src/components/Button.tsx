import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant?: "black" | "white";
}

const Button = ({ children, onClick, variant = "white" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-fit h-fit rounded-full py-4 px-8 ${variant === "black" ? "bg-primary text-white" : "bg-white border border-text-footer text-primary"}`}
    >
      {children}
    </button>
  );
};

export default Button;
