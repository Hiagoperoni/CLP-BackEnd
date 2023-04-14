import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoSensorModule } from './InfosSensor/infoSensor.module';
import { ConfigFreezerModule } from './ConfigsFreezer/configFreezer.module';

@Module({
  imports: [InfoSensorModule, ConfigFreezerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
