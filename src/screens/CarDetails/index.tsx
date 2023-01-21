import React from "react";
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
  About,
  Accessories as Accessories,
  Footer,
} from "./styles";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { Button } from "../../components/Button";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { CarDTO } from "../../dtos/CarDTO";

// type RouteProps = {
//   car: CarDTO;
// };

// interface ParamList extends RouteProp<any, any> {
//   params: RouteProps;
// }

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  // const { params } = useRoute<ParamList>();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate("Scheduling", { car });
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>$S{car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>
        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          title='Escolher um período disponível'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
