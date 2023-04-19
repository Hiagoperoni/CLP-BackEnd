import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoSensorModule } from './InfosSensor/infoSensor.module';
import { ConfigFreezerModule } from './ConfigsFreezer/configFreezer.module';
import { UsersModule } from './Users/users.module';
import { LogsFreezerModule } from './LogsFreezer/logsFreezer.module';

@Module({
  imports: [InfoSensorModule, ConfigFreezerModule, UsersModule, LogsFreezerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
