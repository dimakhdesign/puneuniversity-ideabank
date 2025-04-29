import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  // Rehydrate authData from localStorage on component mount
  useEffect(() => {
    const storedAuthData = localStorage.getItem("authData");

    if (storedAuthData) {
      setAuthData(JSON.parse(storedAuthData));
    }
  }, []);

  const login = (token, userId, accessLevel) => {
    setAuthData({ token, userId, accessLevel });
    localStorage.setItem("authData", JSON.stringify({ token, userId, accessLevel }));
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem("authData");
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
