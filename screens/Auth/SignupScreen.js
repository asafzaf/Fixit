import AuthContent from "../../components/Auth/AuthContent";
import { createNewUser } from "../../utilities/http";
import { Text } from "react-native";
import React, { useContext, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Alert } from "react-native";
import { AuthContext } from "../../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ new_name, email, password, confirmPassword }) {
    try {
      setIsAuthenticating(true);
      const result = await createNewUser(
        new_name,
        email,
        password,
        confirmPassword
      );
      authCtx.authenticate(
        result.token,
        result.data._id,
        result.data.name,
        result.data.isMaintenace
      );
    } catch (error) {
      Alert.alert("Error", `Could not sign up, please try again\n${error}`, [
        { text: "Okay" },
      ]);
      console.log(error);
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Signing up...</Text>
        <ActivityIndicator size="large" color={"#1E44FF"} />
      </View>
    );
  } else {
    return <AuthContent onAuthenticate={signupHandler} />;
  }
}

export default SignupScreen;
