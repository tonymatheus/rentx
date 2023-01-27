import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import { Container, IconContainer, InputText } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps, TouchableWithoutFeedback } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  subIcon?: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function PasswordInput({ iconName, subIcon, value, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  const handlePAsswordVisibilityChange = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <Container>
      <IconContainer isFocused={isFocused} >
        <Feather
          name={iconName}
          size={20}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>
      <InputText
        isFocused={isFocused}
        {...rest}
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <TouchableWithoutFeedback onPress={handlePAsswordVisibilityChange}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={20}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </TouchableWithoutFeedback>
    </Container>
  );
}
