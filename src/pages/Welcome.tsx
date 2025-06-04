
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import TypeWriter from '../components/TypeWriter';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="p-8 h-screen flex flex-col">
          {/* Empty space at top */}
          <div className="flex-1"></div>
          
          {/* Content section positioned lower */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-12 text-center">
              <h1 className="text-3xl font-bold mb-4 text-gray-800 animate-scale-in">
                <TypeWriter text="Welcome to PopX" speed={100} />
              </h1>
              <p className="text-gray-600 leading-relaxed">
                <TypeWriter 
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
                  speed={30}
                />
              </p>
            </div>
          </div>
          
          {/* Buttons at bottom */}
          <div className="space-y-4 pb-8">
            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <Button 
                text="Create Account" 
                onClick={() => navigate('/register')}
                variant="primary"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <Button 
                text="Already Registered? Login" 
                onClick={() => navigate('/login')}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
