import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton,
} from "./styles";
import { Car } from "../../components/Car";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { Load } from "../../components/Load";
import { useTheme } from "styled-components";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [load, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProp>();

  const theme = useTheme();

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate("CarDetails", { car });
  };

  const handleMyCars = () => {
    navigation.navigate("MyCars");
  };

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    console.log(cars);
    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true}
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {load ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <MyCarsButton onPress={() => navigation.navigate("MyCars")}>
        <Ionicons name='ios-car-sport' size={40} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
}
