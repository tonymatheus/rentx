import React from "react";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  color?: string;
  title: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
}: Props) {
  const theme = useTheme();
  return (
    <Container
      onPress={onPress}
      enabled={enabled}
      color={color ? color : theme.colors.main}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
