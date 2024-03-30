import React, { useState, useContext } from "react";
import AuthContent from "../../components/Auth/AuthContent";
import { loginUser } from "../../utilities/http";
import { Text, View, ActivityIndicator, Alert } from "react-native";
import { AuthContext } from "../../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    try {
      setIsAuthenticating(true);
      const result = await loginUser(email, password);
      authCtx.authenticate(
        result.token,
        result.data.user._id,
        result.data.user.name,
        result.data.user.isMaintenace
      );
    } catch (error) {
      Alert.alert("Error", `Could not login, please try again\n${error}`, [
        { text: "Okay" },
      ]);
      console.log(error);
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Signing in...</Text>
        <ActivityIndicator size="large" color={"#1E44FF"} />
      </View>
    );
  } else {
    return <AuthContent isLogin onAuthenticate={loginHandler} />;
  }
}

export default LoginScreen;
