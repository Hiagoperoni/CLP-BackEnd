import { Module } from '@nestjs/common';
import { InfoSensorController } from './infoSensor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoSensorEntity } from './entity/infoSensor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([InfoSensorEntity])],
    controllers: [InfoSensorController],
    providers: [],
    exports: [TypeOrmModule],
})

export class InfoSensorModule {}