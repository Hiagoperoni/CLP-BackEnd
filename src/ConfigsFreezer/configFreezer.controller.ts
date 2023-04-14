import { Body, Controller, Patch, Get, Param } from "@nestjs/common";
import { PatchConfigFreezerDTO } from "./configFreezerDTO/patch-configFreezer.dto";
import { ConfigFreezerService } from "./configFreezer.service";

@Controller('freezer/config')
export class ConfigFreezerController {

  constructor (private readonly configFreezerService: ConfigFreezerService) {}

  @Get('id')
    async getAll(@Param('id') id: number) {
      return this.configFreezerService.getAll(id);
    }
  
  @Patch('id')
    async patchData(@Param('id') id: number, @Body() data: PatchConfigFreezerDTO) {
      return this.configFreezerService.patchData(id, data);
    }
}