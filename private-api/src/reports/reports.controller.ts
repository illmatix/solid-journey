import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('users/:userId/reports')
@UseInterceptors(ClassSerializerInterceptor)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('most-consumed-nutrient')
  report(@Param('userId') userId: number) {
    return this.reportsService.findMostConsumedNutrient(userId);
  }
}
