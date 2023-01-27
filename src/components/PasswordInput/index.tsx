import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import { Container, IconContainer, InputText } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps, TouchableWithoutFeedback } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  subIcon?: React.ComponentProps<typeof Feather>["name"];
}

export function PasswordInput({ iconName, subIcon, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState();
  const theme = useTheme();

  const handlePAsswordVisibilityChange = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={20} color={theme.colors.text_detail} />
      </IconContainer>
      <InputText {...rest} secureTextEntry={isPasswordVisible} />
      <TouchableWithoutFeedback onPress={handlePAsswordVisibilityChange}>
        <IconContainer>
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
