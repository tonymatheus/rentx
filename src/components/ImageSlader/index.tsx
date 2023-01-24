import React, { useRef, useState } from "react";

import {
  Container,
  ImageIndex,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
} from "./styles";
import { FlatList, ViewToken } from "react-native";

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImageSlider = ({ imagesUrl }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChange = useRef((info: ChangeImageProps) => {
    console.log(info);
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((item, index) => (
          <ImageIndex key={String(index)} active={index === imageIndex} />
        ))}
      </ImageIndexes>
      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChange.current}
      />
    </Container>
  );
};
