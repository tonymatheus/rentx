import React from "react";

import { Container } from "./styles";
import LottieView from "lottie-react-native";
import LoadingCar from "../../assets/loadingCar.json";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        autoPlay
        source={LoadingCar}
        style={{ height: 200 }}
        resizeMode='contain'
        loop
      />
    </Container>
  );
}
