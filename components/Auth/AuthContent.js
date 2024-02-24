import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthForm from "./AuthForm";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = React.useState({
    email: "",
    password: "",
    confirmEmail: "",
    confirmPassword: "",
  });

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  };

  const submitHandler = () => {
    let { email, password, confirmEmail, confirmPassword } = credentials;
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length >= 6;
    const EmailsAreEqual = confirmEmail === email;
    const passwordsAreEqual = confirmPassword === password;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!EmailsAreEqual || !passwordsAreEqual))
    ) {
      setCredentialsInvalid({
        email: emailIsValid ? "" : "Invalid email",
        password: passwordIsValid
          ? ""
          : "Password must be at least 6 characters",
        confirmEmail: isLogin ? "" : EmailsAreEqual ? "" : "Emails must match",
        confirmPassword: isLogin
          ? ""
          : passwordsAreEqual
          ? ""
          : "Passwords must match",
      });
      return;
    }
    onAuthenticate({ email, password });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/fixit-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>
        {isLogin ? "Welcome back!" : "Create an account"}
      </Text>
      <Text style={styles.subtitle}>
        {isLogin
          ? "Log in to your account to continue"
          : "Sign up to get started"}
      </Text>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <TouchableOpacity style={styles.button} onPress={switchAuthModeHandler}>
        <Text style={styles.buttonText}>
          {isLogin ? "Create an account" : "Log in"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
