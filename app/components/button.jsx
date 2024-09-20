const Button = ({ text, ...props }) => {
  return (
    <button
      className="bg-green-600 rounded-md px-4 py-2 text-white mx-auto"
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
