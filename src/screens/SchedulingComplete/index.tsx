import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { Container, Content, Footer, Title, Message } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const goToFirstScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!!</Title>
        <Message>
          Agora voce só precisa ir {"\n"} até uma concessionária rentXe pegar
          seu automóvel
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="Ok" onPress={goToFirstScreen} />
      </Footer>
    </Container>
  );
}
