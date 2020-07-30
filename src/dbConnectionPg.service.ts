import { Injectable} from '@nestjs/common'
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'tcuapzkr',
      type: 'postgres',
      host: 'drona.db.elephantsql.com',
      port: 5432,
      username: 'tcuapzkr',
      password: 'ux_b6efR6I8Mag6XM7t1CQYhDkjrpBY_',
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: ['dist/**/*.entity.js']
    }
  }


}