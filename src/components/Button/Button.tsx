import { ReactNode } from "react";

const Button = ({
  disable,
  onClick,
  children,
}: {
  disable: boolean;
  onClick: (number?: number) => void;
  children: ReactNode;
}) => {
  return (
    <button
      style={{
        background: disable ? "red" : "blue",
        padding: 10,
        color: "#fff",
      }}
      onClick={() => onClick(10)}
    >
      {children}
    </button>
  );
};

export default Button;
