import React, { createContext, useContext, useEffect, useState } from 'react';

interface MyContextType {
  token: string;
  user: any;
  storeAuthorities: any[],
  isLoggedIn: boolean,
  isLoading: boolean,
  handleLogout: Function,
  goBack: React.Dispatch<React.SetStateAction<any>>,
  setToken: React.Dispatch<React.SetStateAction<string>>,
  setUser: React.Dispatch<React.SetStateAction<any>>,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
  setAuthorities: React.Dispatch<React.SetStateAction<never[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<MyContextType>({
  token: "",
  user: {},
  storeAuthorities: [],
  isLoggedIn: false,
  isLoading: true,
  handleLogout: () => { },
  goBack: () => { },
  setToken: () => { },
  setUser: () => { },
  setIsLoggedIn: () => { },
  setAuthorities: () => { },
  setIsLoading: () => { },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [storeAuthorities, setAuthorities] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Carga inicial desde localStorage si existe
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedAuthorities = localStorage.getItem('authorities');
    const storedToken = localStorage.getItem('access-token');

    if (storedUser && storedAuthorities && storedToken) {
      setUser(JSON.parse(storedUser));
      setAuthorities(JSON.parse(storedAuthorities))
      setToken(storedToken)
      setIsLoggedIn(true);
      setIsLoading(false);
    }
  }, []);

  // Actualiza localStorage cuando se actualiza el usuario
  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('authorities', JSON.stringify(storeAuthorities));
      localStorage.setItem('access-token', token)
    }
  }, [user]);

  // Función para limpiar localStorage y estado al cerrar sesión
  const handleLogout = () => {
    removeStorage()
    window.open("https://susitest.fiscalia.gov.co/sso/logout");
    window.close();
  };

  const goBack = () => {
    removeStorage()
    window.location.href = "https://susitest.fiscalia.gov.co/ui/#/outside"
  }

  const removeStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authorities');
    localStorage.removeItem('access-token')
    setToken('');
    setUser({});
    setAuthorities([])
    setIsLoggedIn(false);
    setIsLoading(true);
  }

  return (
    <AuthContext.Provider
      value={{
        token, setToken,
        user, setUser,
        isLoggedIn, setIsLoggedIn,
        storeAuthorities, setAuthorities,
        handleLogout, isLoading, setIsLoading, goBack
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}