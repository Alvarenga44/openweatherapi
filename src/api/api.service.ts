import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { map, catchError } from 'rxjs';
import { FindWeatherLocationDTO } from './dtos/find-weather-location_dto';
import { Weather } from './entities/weather.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpService,
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
  ) {}

  async getWeatherLocation(findWeatherLocationDTO: FindWeatherLocationDTO) {
    const request = this.http
      .get(
        `${process.env.OPENWEATHER_API}?q=${findWeatherLocationDTO.city}&appid=${process.env.OPENWEATHER_API_KEY}`,
      )
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );

    const response = await lastValueFrom(request);
    const weather = new Weather();

    weather.city = response.name;
    weather.temperature = response.main.temp;
    weather.max_temperature = response.main.temp_max;
    weather.min_temperature = response.main.temp_min;
    weather.humidity = response.main.humidity;

    this.weatherRepository.save(weather);

    return request;
  }
}
