import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthForm from "./AuthForm";
import FixitHeader from "../header";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = React.useState({
    new_name: false,
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  };

  const submitHandler = (credentials) => {
    let { email, password, confirmEmail, confirmPassword, new_name } =
      credentials;
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length >= 8;
    const new_nameIsValid = new_name.length > 0;
    const EmailsAreEqual = confirmEmail === email;
    const passwordsAreEqual = confirmPassword === password;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!EmailsAreEqual || !passwordsAreEqual || !new_nameIsValid))
    ) {
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmEmail: !emailIsValid || !EmailsAreEqual,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
        new_name: !new_nameIsValid,
      });
      return;
    }
    if (isLogin) {
      onAuthenticate({ email, password });
    } else {
      onAuthenticate({ new_name, email, password, confirmPassword });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <FixitHeader></FixitHeader>
      <View
        style={{
          flex: 1,
          margin: 50,
        }}
      >
        <View
          style={{
            marginBottom: 150,
          }}
        >
          <Text style={styles.textBigBold}>
            {isLogin ? "Welcome back!" : "Create an account"}
          </Text>
          <Text style={styles.textBold}>
            {isLogin
              ? "Log in to your account to continue"
              : "Sign up to get started"}
          </Text>
          <AuthForm
            isLogin={isLogin}
            onSubmit={submitHandler}
            credentialsInvalid={credentialsInvalid}
          />
          <TouchableOpacity onPress={switchAuthModeHandler}>
            <Text
              style={{
                color: "blue",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              {isLogin ? "Create an account" : "Log in"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textBigBold: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 24,
  },
  textBold: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default AuthContent;
