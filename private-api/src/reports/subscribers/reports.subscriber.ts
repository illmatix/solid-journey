import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  Repository,
} from 'typeorm';
import { UserFood } from '../../user-foods/entities/user-food.entity';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MostConsumedNutrient } from '../entities/most-consumed-nutrient.entity';

@Injectable()
@EventSubscriber()
export class ReportsSubscriber implements EntitySubscriberInterface<UserFood> {
  constructor(
    @InjectRepository(MostConsumedNutrient)
    private MostConsumedNutrientsRepository: Repository<MostConsumedNutrient>,
  ) {}

  listenTo() {
    return UserFood;
  }

  /**
   * Called before post insertion.
   */
  afterInsert(event: InsertEvent<UserFood>) {
    Logger.debug(event.entity);
    Logger.debug(this.MostConsumedNutrientsRepository);

    // find total if changed.
    // const topNutrient = getRepository(UserFood)
    //   .createQueryBuilder('uf')
    //   .select(
    //     'SUM(uf.servings_per_week * fn.amount_per_serving)',
    //     'weeklyAmount',
    //   )
    //   .leftJoin(FoodNutrient, 'fn', 'fn.food_id = uf.food_id')
    //   .where('uf.user_id = :userId', { userId: event.entity.userId })
    //   .andWhere('fn.data_points <> 0')
    //   .andWhere('fn.amount_per_serving * uf.servings_per_week <> 0')
    //   .groupBy('fn.nutrient_id')
    //   .orderBy('weeklyAmount', 'DESC')
    //   .limit(1)
    //   .getOne();

    // get current entry
    // const mcnr = this.MostConsumedNutrientsRepository.find({
    //   where: { userId: event.entity.userId },
    // });

    // update mcnr if updated.
    // mcnr.save()
    //
    // Logger.debug(mcnr);
  }

  /**
   * Called before post insertion.
   */
  afterRemove(event: RemoveEvent<any>) {
    // Logger.debug(event.entity);
  }
}
