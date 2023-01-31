import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useTheme } from "styled-components/native";

import {
  Container,
  Header,
  Steps,
  Form,
  FormTitle,
  Title,
  SubTitle,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";

interface Params {
  user: {
    name: string;
    email: string;
    driveLicence: string;
  };
}
export const SignUpSecondStep = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const { user } = route.params as Params;

  console.log(user);
  const handleBack = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe senha e a confirmação dela!");
    }
    if (password !== passwordConfirm) {
      return Alert.alert("Senhas diferentes, digite senhas iguais!!");
    }
    //enviar para  Api e  cadastrar e enviar para tela de cadastro
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
            <FormTitle>2.Dados</FormTitle>
            <PasswordInput
              iconName='lock'
              placeholder='senha'
              value={password}
              onChangeText={setPassword}
            />
            <PasswordInput
              iconName='lock'
              placeholder='repetir senha'
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
            <Button
              title='Cadastrar'
              color={theme.colors.success}
              onPress={handleRegister}
            />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
