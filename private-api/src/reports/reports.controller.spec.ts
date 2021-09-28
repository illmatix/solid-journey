import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { MostConsumedNutrient } from './entities/most-consumed-nutrient.entity';

const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));

describe('ReportsController', () => {
  let controller: ReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [
        ReportsService,
        {
          provide: getRepositoryToken(MostConsumedNutrient),
          useClass: mockRepository,
        },
      ],
    }).compile();

    controller = module.get<ReportsController>(ReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
