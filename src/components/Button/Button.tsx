const Button = ({
  disable,
  onClick,
}: {
  disable: boolean;
  onClick: (number: number) => void;
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
      Click me
    </button>
  );
};

export default Button;
