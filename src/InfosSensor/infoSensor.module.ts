import { Module } from '@nestjs/common';
import { InfoSensorController } from './infoSensor.controller';

@Module({
    imports: [],
    controllers: [InfoSensorController],
    providers: [],
    exports: [],
})

export class InfoSensorModule {}