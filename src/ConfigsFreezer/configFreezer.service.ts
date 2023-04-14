import { Injectable } from "@nestjs/common";
import { ConfigFreezerPrismaService } from "src/ConfigsFreezer/configFreezerPrisma/configFreezer.prisma.service";
import { PatchConfigFreezerDTO } from "./configFreezerDTO/patch-configFreezer.dto";
import ConfigFreezerWhereUniqueInput from "./configFreezerDTO/typesFreezer";

@Injectable()
export class ConfigFreezerService {
  constructor (private readonly prisma: ConfigFreezerPrismaService) {}

  async getAll(clienteId: number) {
    const where: ConfigFreezerWhereUniqueInput = { cliente_id: Number(clienteId) };
    return this.prisma.configFreezer.findMany({ where });
  }

  async patchData(freezerId: number, data: PatchConfigFreezerDTO) {
    const where: ConfigFreezerWhereUniqueInput = { freezer_id: Number(freezerId) };
    return this.prisma.configFreezer.update({
      where,
      data,
    });
  }

}