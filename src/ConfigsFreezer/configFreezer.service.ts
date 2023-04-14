import { Injectable } from "@nestjs/common";
import { ConfigFreezerPrismaService } from "src/ConfigsFreezer/configFreezerPrisma/configFreezer.prisma.service";
import { PatchConfigFreezerDTO } from "./configFreezerDTO/patch-configFreezer.dto";
import ConfigFreezerWhereUniqueInput from "./configFreezerDTO/types";

@Injectable()
export class ConfigFreezerService {
  constructor (private readonly prisma: ConfigFreezerPrismaService) {}

  async patchData(freezerId: number, data: PatchConfigFreezerDTO) {
    const where: ConfigFreezerWhereUniqueInput = { freezer_id: Number(freezerId) };
    return this.prisma.configFreezer.update({
      where,
      data,
    });
  }

}