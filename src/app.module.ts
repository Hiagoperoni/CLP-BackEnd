import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoSensorModule } from './InfosSensor/infoSensor.module';
import { ConfigFreezerModule } from './ConfigsFreezer/configFreezer.module';
import { UsersService } from './Users/users.service';

@Module({
  imports: [InfoSensorModule, ConfigFreezerModule, UsersService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
