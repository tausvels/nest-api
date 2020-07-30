import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import keys from './config/keys';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './dbConnectionPg.service';


@Module({
  imports: [ItemsModule, MongooseModule.forRoot(keys.mongoURI), AuthModule, TypeOrmModule.forRootAsync({useClass: DatabaseConnectionService,})],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
