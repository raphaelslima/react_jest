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
      }}
      onClick={() => onClick(10)}
    >
      Click me
    </button>
  );
};

export default Button;
