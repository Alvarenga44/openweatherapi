import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from './weather.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Weather } from '../api/entities/weather.entity';

const weatherEntityList = [
  new Weather({
    id: 1,
    city: 'São Paulo',
    temperature: 298.23,
    max_temperature: 299.9,
    min_temperature: 295.07,
    humidity: 70,
    collectionDate: new Date('2024-01-02'),
    created_at: new Date('2024-01-02T22:06:49.012Z'),
  }),

  new Weather({
    id: 1,
    city: 'São Paulo',
    temperature: 298.23,
    max_temperature: 299.9,
    min_temperature: 295.07,
    humidity: 70,
    collectionDate: new Date('2024-01-02'),
    created_at: new Date('2024-01-02T22:06:49.012Z'),
  }),

  new Weather({
    id: 1,
    city: 'São Paulo',
    temperature: 298.23,
    max_temperature: 299.9,
    min_temperature: 295.07,
    humidity: 70,
    collectionDate: new Date('2024-01-02'),
    created_at: new Date('2024-01-02T22:06:49.012Z'),
  }),
];

describe('WeatherService', () => {
  let apiService: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeatherService,
        {
          provide: getRepositoryToken(Weather),
          useValue: {
            find: jest.fn().mockResolvedValue(weatherEntityList),
          },
        },
      ],
    }).compile();

    apiService = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(apiService).toBeDefined();
  });

  describe('findWeatherCity', () => {
    it('should return a weather list entity successfully', async () => {
      const result = await apiService.findWeatherCity({
        city: 'São Paulo',
        start_date: '2024-01-01',
        end_date: '2024-01-05',
      });

      expect(result).toEqual(weatherEntityList);
    });
  });
});
