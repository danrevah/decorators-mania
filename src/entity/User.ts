import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {ExclusionPolicy, Expose, Groups, Strategy} from 'typeserializer';

@Entity()
@Strategy(ExclusionPolicy.ALL)
export class User {

  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column()
  @Expose()
  @Groups(['personal-info'])
  firstName: string;

  @Column()
  @Expose()
  @Groups(['personal-info'])
  lastName: string;

  @Column()
  @Expose()
  @Groups(['personal-info', 'other'])
  age: number;

  @Column()
  password: string;
}