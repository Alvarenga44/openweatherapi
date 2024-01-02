import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from './api/entities/weather.entity';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    ApiModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'pg',
      username: 'pg',
      entities: [Weather],
      database: 'openweather',
      synchronize: true,
      logging: true,
    }),
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
