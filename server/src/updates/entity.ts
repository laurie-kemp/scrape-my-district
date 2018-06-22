import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { MinLength, IsString } from 'class-validator';

@Entity()
export default class Update extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(2)
  @Column('text')
  company: string

  @IsString()
  @Column('text')
  timestamp: string

  @IsString()
  @Column('text')
  columnName: string

  @IsString()
  @Column('text')
  change: string

}
