import { Injectable } from "@nestjs/common";
import { PostInfoSensor } from "./infoSensorDTO/post-infoSensor.dto";
import { InfoSensorPrismaService } from "src/InfoSensorPrisma/infoSensor.prisma.service";

@Injectable()
export class InfoSensorService {

  constructor(private readonly prisma: InfoSensorPrismaService) {}

  async postData({cliente_id, freezer_id, status_porta, temp_atual}: PostInfoSensor) {
    return this.prisma.freezerApi.create({
      data: {
        cliente_id,
        freezer_id,
        temp_atual,
        status_porta,
      },
    });
  }
}