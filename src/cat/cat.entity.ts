import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity()
export class Cat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  @MinLength(1)
  @MaxLength(45)
  @IsString()
  name: string;

  @Column({ length: 45 })
  @MinLength(1)
  @MaxLength(45)
  @IsString()
  breed: string;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 10 })
  gender: string;

  @Column({ length: 500 })
  location: string;
}
