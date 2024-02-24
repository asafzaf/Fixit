import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  userId: "",
  userName: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();

  function authenticate(token, id, name) {
    console.log("Authenticating");
    setAuthToken(token);
    setUserId(id);
    setUserName(name);
  }

  function logout() {
    console.log("Logging out");
    setAuthToken(null);
    setUserId(null);
    setUserName(null);
  }

  const value = {
    token: authToken,
    userId: userId,
    userName: userName,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
