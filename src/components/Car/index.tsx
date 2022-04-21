import React from "react";
import GasolineSVG from "../../assets/gasoline.svg";
import {
  Container,
  Details,
  Name,
  About,
  Rent,
  Type,
  Periodo,
  Price,
  Brand,
  CarImage,
} from "./styles";

interface CardData {
  brand: string;
  name: string;
  rent: {
    pediod: string;
    price: number;
  };
  thumbnail: string;
}

interface Props {
  data: CardData;
}

export function Car({ data }: Props) {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Periodo>{data.rent.pediod} </Periodo>
            <Price>R${data.rent.price}</Price>
          </Rent>
          <Type>
            <GasolineSVG />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
