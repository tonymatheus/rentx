import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import * as Yup from "yup";
import { useAuth } from "../../hooks/auth";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Header, SubTitle, Title, Footer, Form } from "./styles";

import { useTheme } from "styled-components/native";
import { PasswordInput } from "../../components/PasswordInput";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const { signIn } = useAuth();
  const theme = useTheme();

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("e-mail obrigatório")
          .email("digite um email válido"),
        password: Yup.string().required("senha é obrigatória"),
      });
      await schema.validate({
        email,
        password,
      });

      //Fazer login
      signIn({ email, password });
      Alert.alert("Logou");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("opa", error.message);
      } else {
        Alert.alert(
          "erro na autenticação",
          "Ocorreu um erro ao fazer o login verifique as credenciais"
        );
      }
    }
  };

  const handleNewAccount = () => {
    navigation.navigate("SignUpFirstStep");
  };

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <Title>Estamos {"\n"}quase lá</Title>
            <SubTitle>
              Faça seu login para começar{"\n"}uma experiência incrível.
            </SubTitle>
          </Header>
          <Form>
            <Input
              iconName='mail'
              placeholder='email@email'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName='lock'
              placeholder='senha'
              subIcon='eye'
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </Form>
          <Footer>
            <Button
              title='Login'
              color='red'
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <Button
              title='Criar conta gratuita'
              color={theme.colors.background_secondary}
              onPress={handleNewAccount}
              enabled={true}
              loading={false}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
