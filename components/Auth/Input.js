import { View, Text, TextInput, StyleSheet } from "react-native";

// import { Colors } from '../../constants/styles';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        keyboardType={keyboardType}
        textAlign="left"
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    height: 80,
    // marginVertical: 8,
    marginBottom: 20,
  },
  label: {
    color: "black",
    marginBottom: 4,
    fontWeight: 500,
    fontSize: 14,
  },
  labelInvalid: {
    color: "red",
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 16,
    height: 50,
  },
  inputInvalid: {
    backgroundColor: "rgba(255, 0, 0, 0.2)",
  },
});
