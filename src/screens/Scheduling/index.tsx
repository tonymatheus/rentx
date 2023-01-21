import React, { useState } from "react";
import { BackButton } from "../../components/BackButton";
import ArrowSVG from "../../assets/arrow.svg";
import {
  Container,
  Header,
  Title,
  DateTitle,
  DateValue,
  RentalPeriod,
  DateInfo,
  Content,
  Footer,
} from "./styles";
import { useTheme } from "styled-components";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  MarkedDateProps,
  generateinterval,
} from "../../components/Calendar";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export const Scheduling = () => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );

  const handleShcedulingDetails = () => {
    navigation.navigate("SchedulingDetails");
  };

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateinterval(start, end);
    setMarkedDates(interval);
    console.log(interval);
  };

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <Header>
        <BackButton
          color={theme.colors.shape}
          onPress={() => navigation.goBack()}
        />
        <Title>
          Escolha uma{"\n"}data de início e {"\n"} fim de Aluguel{" "}
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/2022</DateValue>
          </DateInfo>
          <ArrowSVG />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>18/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button title='Confirmar' onPress={handleShcedulingDetails} />
      </Footer>
    </Container>
  );
};
