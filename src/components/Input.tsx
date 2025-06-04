
import React from 'react';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false
}) => {
  return (
    <div className="mb-4">
      <label className="block text-purple-600 font-medium mb-2 transition-all duration-300 hover:text-purple-700">
        {label}
        {required && <span className="text-red-500 animate-pulse">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-300 hover:border-purple-300 hover:shadow-sm"
      />
    </div>
  );
};

export default Input;
