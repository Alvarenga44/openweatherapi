import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindWeatherDTO } from './dtos/find-weather_dto';
import { Repository, Between } from 'typeorm';
//import { FindWeatherDTO } from './dtos/find-weather_dto';
import { Weather } from '../api/entities/weather.entity';

@Injectable()
export class WeatherService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
  ) {}
  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  findWeatherCity(findWeather: FindWeatherDTO): Promise<Weather[]> {
    const start = new Date(findWeather.start_date);
    const end = new Date(findWeather.end_date);

    return this.weatherRepository.find({
      where: {
        city: findWeather.city,
        collectionDate: Between(start, end),
      },
    });
  }

  /**
   * this function used to get data of use whose id is passed in parameter
   * @param id is type of number, which represent the id of user.
   * @returns promise of user
   */
}
