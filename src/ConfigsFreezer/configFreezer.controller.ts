import { Body, Controller, Patch } from "@nestjs/common";
import { PatchConfigFreezerDTO } from "./configFreezerDTO/patch-configFreezer.dto";
import { ConfigFreezerService } from "./configFreezer.service";

@Controller('freezer/config')
export class ConfigFreezerController {

  constructor (private readonly configFreezerService: ConfigFreezerService) {}
  
  @Patch()
    async PatchConfigFreezerDTO(id: number, @Body() data: PatchConfigFreezerDTO) {
      return this.configFreezerService.patchData(id, data);
    }
}