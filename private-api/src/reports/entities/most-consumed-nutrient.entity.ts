import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  AfterInsert,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Exclude } from 'class-transformer';
import { Logger } from '@nestjs/common';

@Entity('most_consumed_nutrients')
export class MostConsumedNutrient extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'unit_name' })
  unitName: string;

  @Column('int', { name: 'weekly_amount' })
  weeklyAmount: number;

  @Column('int', { name: 'user_id' })
  @Exclude({ toPlainOnly: true })
  userId: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @AfterInsert()
  updateMostConsumedNutrient() {
    Logger.debug('AfterInsert::updateMostConsumedNutrient');
  }
}
