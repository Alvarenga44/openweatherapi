interface MainDTO {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export class ResponseWeatherLocationDTO {
  main: MainDTO;
  name: string;
}
