/* eslint-disable no-console */
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ApiService } from '../api.service';

@Injectable()
export class ApiCron {
  private readonly logger = new Logger(ApiCron.name);
  constructor(private readonly apiService: ApiService) {}

  @Cron('*/15 * * * *')
  async handler() {
    //lógica para buscar e cancelar os pedidos.
    this.logger.debug('Get Curitiba Weather Colletion');
    await this.apiService.getWeatherCuritibaLocation();

    this.logger.debug('Get São Paulo Weather Colletion');
    await this.apiService.getWeatherSaoPauloLocation();

    this.logger.debug('Get Florianópolis Weather Colletion');
    await this.apiService.getWeatherFloarianopolisLocation();
  }
}
