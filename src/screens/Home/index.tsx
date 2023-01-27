import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { PanGestureHandler } from "react-native-gesture-handler";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";
const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

import Logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { Car } from "../../components/Car";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { Load } from "../../components/Load";
import { useTheme } from "styled-components";
import { LoadAnimation } from "../../components/LoadAnimation";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProp>();

  const positionInY = useSharedValue(0);
  const positionInX = useSharedValue(0);

  const myCarsButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionInX.value },
        { translateY: positionInY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionInX.value;
      ctx.positionY = positionInY.value;
    },
    onActive(event, ctx: any) {
      positionInX.value = ctx.positionX + event.translationX;
      positionInY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionInX.value = withSpring(0);
      positionInY.value = withSpring(0);
    },
  });

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

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  });

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        hidden
        translucent={false}
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!loading && <TotalCars>total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>
      {loading ? (
        <LoadAnimation />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyles,
            {
              position: "absolute",
              bottom: 13,
              right: 12,
            },
          ]}
        >
          <ButtonAnimated
            onPress={() => navigation.navigate("MyCars")}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name='ios-car-sport'
              size={40}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
