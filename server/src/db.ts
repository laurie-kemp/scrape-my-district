import { createConnection } from 'typeorm'
import { DefaultNamingStrategy } from 'typeorm/naming-strategy/DefaultNamingStrategy'
import { NamingStrategyInterface } from 'typeorm/naming-strategy/NamingStrategyInterface'
import { snakeCase } from 'typeorm/util/StringUtils'
import User from './users/entity'
import Database from './database/entity'
import Update from './updates/entity';


class CustomNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {

  tableName(targetName: string, userSpecifiedName: string): string {
    return userSpecifiedName ? userSpecifiedName : snakeCase(targetName) + 's';
  }

  columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    return snakeCase(embeddedPrefixes.concat(customName ? customName : propertyName).join("_"));
  }

  columnNameCustomized(customName: string): string {
    return customName;
  }

  relationName(propertyName: string): string {
    return snakeCase(propertyName); 
  }
}

export default () =>
  createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL || 'postgres://dweaglqdafzvlr:f80a7a6d81ece774d37b9eca512b6765e3dfaeba3a360f1880da96fab7b2192b@ec2-54-217-217-194.eu-west-1.compute.amazonaws.com:5432/d9n88nf4t2vf6i',
    entities: [
      User,
      Database,
      Update
    ],
    ssl: true,
    synchronize: true, // careful with this in production!
    logging: true,
    namingStrategy: new CustomNamingStrategy()
  })
    .then(_ => console.log('Connected to Postgres with TypeORM'))