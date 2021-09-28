import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MostConsumedNutrient } from './entities/most-consumed-nutrient.entity';
import { ReportsService } from './reports.service';

const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));

describe('ReportsService', () => {
  let service: ReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        {
          provide: getRepositoryToken(MostConsumedNutrient),
          useClass: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
