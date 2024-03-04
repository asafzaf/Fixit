import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Input from "./Input";
import ConfirmButton from "../buttons/ConfirmButton";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [EnteredNewName, setNewName] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
    new_name: nameIsInvalid,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
      case "new_name":
        setNewName(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
      new_name: EnteredNewName,
    });
  }

  return (
    <View style={styles.form}>
      <ScrollView>
        <View>
          {!isLogin && (
            <Input
              label="Name"
              onUpdateValue={updateInputValueHandler.bind(this, "new_name")}
              value={EnteredNewName}
              isInvalid={nameIsInvalid}
            ></Input>
          )}
          <Input
            label="Email Address"
            onUpdateValue={updateInputValueHandler.bind(this, "email")}
            value={enteredEmail}
            keyboardType="email-address"
            isInvalid={emailIsInvalid}
          />
          {!isLogin && (
            <Input
              label="Confirm Email Address"
              onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
              value={enteredConfirmEmail}
              keyboardType="email-address"
              isInvalid={emailsDontMatch}
            />
          )}
          <Input
            label="Password"
            onUpdateValue={updateInputValueHandler.bind(this, "password")}
            secure
            value={enteredPassword}
            isInvalid={passwordIsInvalid}
          />
          {!isLogin && (
            <Input
              label="Confirm Password"
              onUpdateValue={updateInputValueHandler.bind(
                this,
                "confirmPassword"
              )}
              secure
              value={enteredConfirmPassword}
              isInvalid={passwordsDontMatch}
            />
          )}
        </View>
        <View style={styles.buttons}>
          <ConfirmButton
            onPress={submitHandler}
            title={isLogin ? "Log In" : "Sign Up"}
          ></ConfirmButton>
        </View>
      </ScrollView>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    alignItems: "center",
  },
  form: {
    width: 300,
    maxWidth: 400,
    marginTop: 50,
    height: 450,
  },
});
