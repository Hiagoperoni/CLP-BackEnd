import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { PostInfoSensor } from './infoSensorDTO/post-infoSensor.dto';

@Controller('freezer')
export class InfoSensorController {

  @Get()
  async getAll() {
    return 'Get All';
  }
  
  @Post()
  async patchData(@Body() body: PostInfoSensor) {
    return {body};
  }
}