
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import RadioGroup from '../components/RadioGroup';
import { useAuth } from '../contexts/AuthContext';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [isAgency, setIsAgency] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    register({
      name,
      email,
      phone,
      company,
      isAgency
    });
    
    // Redirect to dashboard after successful registration
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in relative">
        {/* Back button */}
        <button
          onClick={() => navigate('/welcome')}
          className="absolute top-6 left-6 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>

        <div className="p-8 max-h-screen overflow-y-auto pt-16">
          <div className="mb-8 text-center animate-scale-in">
            <h1 className="text-2xl font-bold text-gray-800 leading-tight">
              Create your<br />PopX account
            </h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="transform transition-all duration-300 focus-within:scale-105">
              <Input
                label="Full Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Marry Doe"
                required
              />
            </div>
            
            <div className="transform transition-all duration-300 focus-within:scale-105">
              <Input
                label="Phone number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Marry Doe"
                required
              />
            </div>
            
            <div className="transform transition-all duration-300 focus-within:scale-105">
              <Input
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Marry Doe"
                required
              />
            </div>
            
            <div className="transform transition-all duration-300 focus-within:scale-105">
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Marry Doe"
                required
              />
            </div>
            
            <div className="transform transition-all duration-300 focus-within:scale-105">
              <Input
                label="Company name"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Marry Doe"
              />
            </div>
            
            <div className="transform transition-all duration-300 hover:scale-105">
              <RadioGroup
                label="Are you an Agency?"
                options={[
                  { label: 'Yes', value: true },
                  { label: 'No', value: false }
                ]}
                value={isAgency}
                onChange={(value) => setIsAgency(value as boolean)}
                required
              />
            </div>
            
            <div className="pt-4">
              <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <Button 
                  text={isLoading ? "Creating Account..." : "Create Account"} 
                  type="submit" 
                  variant="primary"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
