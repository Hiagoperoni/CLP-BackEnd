import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostInfoSensor } from './infoSensorDTO/post-infoSensor.dto';

@Controller('freezer')
export class InfoSensorController {

  @Get()
  async getAll() {
    return 'Get All';
  }
  
  @Post()
  async postData(@Body() body: PostInfoSensor) {
    return {body};
  }
}