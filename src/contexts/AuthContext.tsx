
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  isAgency?: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  company: string;
  isAgency: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (data: RegisterData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Simulate login - in real app this would make API call
    setUser({
      name: 'Marry Doe',
      email: email
    });
  };

  const register = (data: RegisterData) => {
    // Simulate registration - in real app this would make API call
    setUser({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      isAgency: data.isAgency
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
