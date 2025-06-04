
import React from 'react';

interface RadioOption {
  label: string;
  value: boolean;
}

interface RadioGroupProps {
  label: string;
  options: RadioOption[];
  value: boolean;
  onChange: (value: boolean) => void;
  required?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  required = false
}) => {
  return (
    <div className="mb-4">
      <label className="block text-purple-600 font-medium mb-3">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex space-x-6">
        {options.map((option) => (
          <div key={option.label} className="flex items-center space-x-2">
            <input
              type="radio"
              id={option.label}
              name={label}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor={option.label} className="text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
