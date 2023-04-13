import { Body, Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('freezer')
export class InfoSensorController {

  @Get()
  async getAll() {
    return 'Get All';
  }
  
  @Post()
  async patchData(@Body() body) {
    return {body};
  }
}