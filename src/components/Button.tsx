
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  variant
}) => {
  const baseClasses = "w-full py-3 rounded-lg font-medium transition-all duration-300 transform active:scale-95 hover:shadow-lg";
  const variantClasses = variant === 'primary' 
    ? "bg-purple-600 hover:bg-purple-700 text-white hover:shadow-purple-200"
    : "bg-purple-200 hover:bg-purple-300 text-purple-800 hover:shadow-purple-100";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;
