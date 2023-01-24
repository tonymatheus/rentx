import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
  margin-right: 9px;
  border-radius: 3px;
`;
export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-left: 24px;
`;
export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width};
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
