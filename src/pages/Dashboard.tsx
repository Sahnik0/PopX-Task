
import React from 'react';
import { Camera } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/welcome');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="h-screen flex flex-col">
          <div className="p-6 border-b border-gray-200 animate-scale-in">
            <h1 className="text-xl font-semibold text-gray-800">Account Settings</h1>
          </div>
          
          <div className="p-6 border-b border-gray-200 transform transition-all duration-300 hover:bg-gray-50">
            <div className="flex items-center">
              <div className="relative group">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1 transform transition-all duration-300 hover:scale-125 hover:bg-purple-700 cursor-pointer">
                  <Camera size={16} className="text-white" />
                </div>
              </div>
              
              <div className="ml-4">
                <h2 className="font-semibold text-lg text-gray-800 transform transition-all duration-300 hover:text-purple-600">
                  {user.name}
                </h2>
                <p className="text-gray-600 transform transition-all duration-300 hover:text-gray-800">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed transform transition-all duration-300 hover:text-gray-900">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
              </p>
            </div>
            
            <div className="pt-6">
              <button 
                onClick={handleLogout}
                className="text-red-500 font-medium transform transition-all duration-300 hover:text-red-700 hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
