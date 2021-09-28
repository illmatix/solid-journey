import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MostConsumedNutrient } from './entities/most-consumed-nutrient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MostConsumedNutrient])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
