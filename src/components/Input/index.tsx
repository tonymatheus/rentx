import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import { Container, IconContainer, InputText } from "./styles";
import { useTheme } from "styled-components";
import { Alert, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
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
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
}
