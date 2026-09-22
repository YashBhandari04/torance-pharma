import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check saved local storage token on initial load
    const savedToken = localStorage.getItem('torance_admin_token');
    const savedUserStr = localStorage.getItem('torance_admin_user');

    if (savedToken && savedUserStr) {
      try {
        const user = JSON.parse(savedUserStr);
        setAuthState({
          user,
          token: savedToken,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch {
        localStorage.removeItem('torance_admin_token');
        localStorage.removeItem('torance_admin_user');
        setAuthState({ user: null, token: null, isAuthenticated: false, isLoading: false });
      }
    } else {
      setAuthState({ user: null, token: null, isAuthenticated: false, isLoading: false });
    }
  }, []);

  const login = (token: string, user: User) => {
    localStorage.setItem('torance_admin_token', token);
    localStorage.setItem('torance_admin_user', JSON.stringify(user));
    setAuthState({
      user,
      token,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const logout = () => {
    localStorage.removeItem('torance_admin_token');
    localStorage.removeItem('torance_admin_user');
    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
