import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import GasolineSVG from "../../assets/gasoline.svg";
import { CarDTO } from "../../dtos/CarDTO";
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
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data?.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Periodo>{data.rent.period} </Periodo>
            <Price>R${data.rent.price}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode='contain'
      />
    </Container>
  );
}
