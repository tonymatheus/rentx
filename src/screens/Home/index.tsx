import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TotalCars, HeaderContent } from "./styles";
import { Car } from "../../components/Car";

export function Home() {
  const carData = {
    brand: "Audi",
    name: "R$ 5000",
    rent: {
      pediod: "AO dia",
      price: 120,
    },
    thumbnail:
      "https://cdn.autopapo.com.br/carro/audi/tt-rs-25-tfsi-s-tronic-quattro-2018/destaque-v1.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carData} />
      <Car data={carData} />
      <Car data={carData} />
      <Car data={carData} />
    </Container>
  );
}
