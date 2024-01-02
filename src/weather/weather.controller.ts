import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { FindWeatherDTO } from './dtos/find-weather_dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}
  @Get()
  findAll(@Query() findWeatherDTO: FindWeatherDTO) {
    return this.weatherService.findWeatherCity(findWeatherDTO);
  }
}
