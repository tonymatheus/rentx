import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  padding: 24px;
  margin-bottom: 16px;
`;

export const Details = styled.View``;
export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;
export const About = styled.View`
  align-items: center;
  flex-direction: row;

  margin-top: 16px;
`;
export const Rent = styled.View`
  margin-right: 24px;
`;
export const Periodo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
  text-transform: uppercase;
`;
export const Type = styled.Text``;
export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;
