import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { MostConsumedNutrient } from './entities/most-consumed-nutrient.entity';
import { addMostConsumedNutrient } from './dto/add-most-consumed-nutrient.dto';
import { UserFood } from '../user-foods/entities/user-food.entity';
import { FoodNutrient } from '../food-nutrients/entities/food-nutrient.entity';
import { Nutrient } from '../nutrients/entities/nutrient.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(MostConsumedNutrient)
    private MostConsumedNutrientsRepository: Repository<MostConsumedNutrient>,
  ) {}

  findAll() {
    return `This action returns all routes to reports`;
  }

  findMostConsumedNutrient(userId: number) {
    /**
     * TESTING - get current top nutrient data
     *         - todo limit to the current 1 week period... not sure there are good timestamps for this.
     */
    // const topNutrient = getRepository(UserFood)
    //   .createQueryBuilder('uf')
    //   .select('n.unit_name', 'unitName')
    //   .addSelect(
    //     'SUM(uf.servings_per_week * fn.amount_per_serving)',
    //     'weeklyAmount',
    //   )
    //   .addSelect('n.name', 'name')
    //   .leftJoin(FoodNutrient, 'fn', 'fn.food_id = uf.food_id')
    //   .leftJoin(Nutrient, 'n', 'n.id = fn.nutrient_id')
    //   .where('uf.user_id = :userId', { userId: userId })
    //   .andWhere('fn.data_points <> 0')
    //   .andWhere('fn.amount_per_serving * uf.servings_per_week <> 0')
    //   .groupBy('fn.nutrient_id')
    //   .orderBy('weeklyAmount', 'DESC')
    //   .limit(1)
    //   .getOne();
    //
    // return topNutrient;

    return this.MostConsumedNutrientsRepository.findOne({
      where: { userId: userId },
    });
  }
}
