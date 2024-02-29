import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  userId: "",
  userName: "",
  isMaintenace: false,
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [isMaintenace, setIsMaintenace] = useState(false);

  function authenticate(token, id, name, Maintenace) {
    setIsMaintenace(Maintenace);
    setAuthToken(token);
    setUserId(id);
    setUserName(name);
  }

  function logout() {
    setIsMaintenace(false);
    setAuthToken(null);
    setUserId(null);
    setUserName(null);
  }

  const value = {
    token: authToken,
    userId: userId,
    userName: userName,
    isMaintenace: isMaintenace,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
