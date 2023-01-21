import React from "react";

import {
  Container,
  ImageIndex,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

export const ImageSlider = ({ imagesUrl }: Props) => {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={false} />
        <ImageIndex active={true} />
        <ImageIndex active={true} />
        <ImageIndex active={true} />
      </ImageIndexes>
      <CarImageWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} />
      </CarImageWrapper>
    </Container>
  );
};
