import React, { createContext, useState, useContext } from 'react';
import { login as getToken, useUser } from './api';
import { useNavigate } from 'react-router';

// Cria o contexto de autenticação
const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("")
  // Função para fazer login
  const login = async (data) => {
    const { token: tokenUser } = await getToken(data)
    if (tokenUser){
      setIsAuthenticated(true);
      setToken(tokenUser)
      navigate('/')
      return { error: false }
    } else return { error: true }
  };

  // Função para fazer logout
  const logout = () => {
    setIsAuthenticated(false);
    setToken(tokenUser)
    navigate('/login')
  };

  const getUser = () => {
    console.log(token, '-<', isAuthenticated)
   return useUser(token)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);