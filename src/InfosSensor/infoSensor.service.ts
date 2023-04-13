import { Injectable } from "@nestjs/common";
import { PostInfoSensor } from "./infoSensorDTO/post-infoSensor.dto";
import { Repository } from "typeorm";
import { InfoSensorEntity } from "./entity/infoSensor.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class InfoSensorService {

  constructor(
    @InjectRepository(InfoSensorEntity)
    private infoSensorRepository: Repository<InfoSensorEntity>
  ) {}

    async postData(data: PostInfoSensor) {
      return this.infoSensorRepository.create(data)
    }
}