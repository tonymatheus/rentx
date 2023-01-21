import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { Accessory } from "../../components/Acessory";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlader";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Brand,
  Name,
  Description,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentlPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const handleConfirmScheduling = () => {
    navigation.navigate("SchedulingComplete");
  };
  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://cdn.autopapo.com.br/carro/audi/tt-rs-25-tfsi-s-tronic-quattro-2018/destaque-v1.png",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Audio</Brand>
            <Name>Harucan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>$S200</Price>
          </Rent>
        </Details>
        <Acessories>
          <Accessory name='380km/h' icon={SpeedSvg} />
          <Accessory name='3.2' icon={AccelerationSvg} />
          <Accessory name='800 HP' icon={ForceSvg} />
          <Accessory name='Gasoline' icon={GasolineSvg} />
          <Accessory name='Auto' icon={ExchangeSvg} />
          <Accessory name='2 pessoas' icon={PeopleSvg} />
        </Acessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(25)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/1991</DateValue>
          </DateInfo>
          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/1991</DateValue>
          </DateInfo>
          <Feather
            name='chevron-left'
            size={RFValue(10)}
            color={theme.colors.text}
          />
        </RentalPeriod>
        <RentalPrice>
          <RentlPriceLabel>Total</RentlPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$900 x 3 diarias </RentalPriceQuota>
            <RentalPriceTotal>R$1.800,00</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title='Alugar agora'
          onPress={handleConfirmScheduling}
          color={theme.colors.success}
        />
      </Footer>
    </Container>
  );
}
