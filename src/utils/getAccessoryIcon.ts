import SpeedSvg from "../assets/speed.svg";
import AccelerationSvg from "../assets/acceleration.svg";
import ForceSvg from "../assets/force.svg";
import GasolineSvg from "../assets/gasoline.svg";
import ExchangeSvg from "../assets/exchange.svg";
import PeopleSvg from "../assets/people.svg";
import HybridSVG from "../assets/hybrid.svg";
import EnergySVG from "../assets/energy.svg";
import CarSVG from "../assets/car.svg";

export const getAccessoryIcon = (type: string) => {
  switch (type) {
    case "speed":
      return SpeedSvg;
    case "acceleration":
      return AccelerationSvg;
    case "turning_diameter":
      return ForceSvg;
    case "gasoline_motor":
      return GasolineSvg;
    case "exchange":
      return ExchangeSvg;
    case "seats":
      return PeopleSvg;
    case "hybrid_motor":
      return HybridSVG;
    case "electric_motor":
      return EnergySVG;
    default:
      return CarSVG;
  }
};
