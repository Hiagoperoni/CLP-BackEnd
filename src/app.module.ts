import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoSensorModule } from './InfosSensor/infoSensor.module';

@Module({
  imports: [InfoSensorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
