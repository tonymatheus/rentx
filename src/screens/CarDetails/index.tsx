import React from "react";
import { Accessory } from "../../components/Acessory";

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlader";
import { StatusBar, StyleSheet } from "react-native";

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
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useTheme } from "styled-components";

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
  const theme = useTheme();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
    console.log(event.contentOffset.y);
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  function handleConfirmRental() {
    navigation.navigate("Scheduling", { car });
  }
  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        translucent
        backgroundColor='transparent'
      />
      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary },
        ]}
      >
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
        </Header>
        <CarImages>
          <Animated.View style={sliderCarsStyleAnimation}>
            <ImageSlider imagesUrl={car.photos} />
          </Animated.View>
        </CarImages>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>$S{car.price}</Price>
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
      </Animated.ScrollView>
      <Footer>
        <Button
          title='Escolher um período disponível'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 2,
  },
});
