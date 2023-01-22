import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { CarDTO } from "../../dtos/CarDTO";
import theme from "../../styles/theme";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const HeaderContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 32px 24px;
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;
export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const MyCarsButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  align-items: center;
  position: absolute;
  right: 22px;
  bottom: 13px;
  justify-content: center;
  border-radius: 30px;
  justify: center;
  background-color: ${({ theme }) => theme.colors.main};
`;
