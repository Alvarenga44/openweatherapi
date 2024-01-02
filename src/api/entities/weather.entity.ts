import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Weather {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 90 })
  city: string;

  @Column({ type: 'double precision' })
  temperature: number;

  @Column({ type: 'double precision' })
  max_temperature: number;

  @Column({ type: 'double precision' })
  min_temperature: number;

  @Column({ type: 'double precision' })
  humidity: number;

  @Column({ type: 'date', default: () => 'NOW()::date' })
  collectionDate: Date;

  @CreateDateColumn()
  created_at: Date;
}
