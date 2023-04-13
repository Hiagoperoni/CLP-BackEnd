import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoSensorModule } from './InfosSensor/infoSensor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoSensorEntity } from './InfosSensor/entity/infoSensor.entity';


@Module({
  imports: [InfoSensorModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [InfoSensorEntity],
    synchronize: process.env.ENV === "development",
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
