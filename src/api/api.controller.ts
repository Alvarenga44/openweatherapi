import { ApiService } from './api.service';
import { Controller, Post } from '@nestjs/common';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Post('findweather')
  create() {
    return this.apiService.getWeatherCuritibaLocation();
  }
}
