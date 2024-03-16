import React from "react";
import { Formik, useField } from "formik";
import { Button, View, StyleSheet } from "react-native";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginValidationSchema } from "../validationSchemas/login";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center'
  },  
  form: {
    margin: 12,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};


const LoginPage = () => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="Email" />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />

            <Button onPress={handleSubmit} title="Log in"></Button>
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
