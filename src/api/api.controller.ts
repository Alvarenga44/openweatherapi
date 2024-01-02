import { ApiService } from './api.service';
import { Body, Controller, Post } from '@nestjs/common';
import { FindWeatherLocationDTO } from './dtos/find-weather-location_dto';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Post('findweather')
  create(@Body() findWeatherLocationDTO: FindWeatherLocationDTO) {
    return this.apiService.getWeatherLocation(findWeatherLocationDTO);
  }
}
