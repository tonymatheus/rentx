import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import * as Yup from "yup";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export const SignUpFirstStep = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driveLicense, setDriveLicense] = useState("");

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleValidation = async () => {
    const scheme = Yup.object().shape({
      name: Yup.string().required("nome [e obrigatório"),
      email: Yup.string().required("email é obrigatório"),
      driveLicense: Yup.string().required("CNH é obrigatória"),
    });
    await scheme.validate(name, email, driveLicense);
  };

  const handleNextStep = async () => {
    try {
      const scheme = Yup.object().shape({
        driveLicense: Yup.string().required("CNH é obrigatório"),
        email: Yup.string()
          .required("email é obrigatório")
          .email("digite um email válido"),
        name: Yup.string().required("Nome é obrigatório"),
      });

      const data = { name, email, driveLicense };

      await scheme.validate(data);
      navigation.navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("opa!", error.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua{`\n`}Conta</Title>
          <SubTitle>
            Faça seu cadastro de {"\n"}
            forma rápida e fácil
          </SubTitle>
          <Form>
            <FormTitle>1.Dados</FormTitle>
            <Input
              iconName='user'
              placeholder='Nome'
              value={name}
              onChangeText={setName}
            />
            <Input
              iconName='mail'
              placeholder='email'
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
            />
            <Input
              iconName='credit-card'
              placeholder='CNH'
              keyboardType='numeric'
              value={driveLicense}
              onChangeText={setDriveLicense}
            />
          </Form>
          <Button title='proximo' onPress={handleNextStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
