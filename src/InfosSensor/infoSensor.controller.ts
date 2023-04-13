import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostInfoSensor } from './infoSensorDTO/post-infoSensor.dto';
import { InfoSensorService } from './infoSensor.service';

@Controller('freezer')
export class InfoSensorController {

  constructor(private readonly infoSensorService: InfoSensorService) {}

  @Get()
  async getAll() {
    return this.infoSensorService.getAll();
  }
  
  @Post()
  async postData(@Body() data: PostInfoSensor) {
    return this.infoSensorService.postData(data);
  }
}