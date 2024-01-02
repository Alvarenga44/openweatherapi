import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from './entities/weather.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Weather])],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
