import React from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Header, SubTitle, Title, Footer, Form } from "./styles";

import { useTheme } from "styled-components/native";
import { PasswordInput } from "../../components/PasswordInput";

export function SignIn() {
  const theme = useTheme();

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
            />
            <PasswordInput
              iconName='lock'
              placeholder='senha'
              subIcon='eye'
              secureTextEntry
            />
          </Form>
          <Footer>
            <Button
              title='Login'
              color='red'
              onPress={() => {}}
              enabled={false}
              loading={false}
            />
            <Button
              title='Criar conta gratuita'
              color={theme.colors.background_secondary}
              onPress={() => {}}
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
