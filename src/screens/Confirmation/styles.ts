import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 96px;
  align-items: center;
  justify-content: center;
  padding-top: 95px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};

  margin-bottom: 20px;
`;
export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  line-height: ${RFValue(25)}px;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 80px 0;
`;
