import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherController } from './weather.controller';
import { Weather } from '../api/entities/weather.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Weather])],
  providers: [WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}
