import { Body, Controller, Post } from "@nestjs/common";
import { LogsFreezerService } from "./logsFreezer.service";
import { PostLogsFreezer } from "./LogsFreezerDTO/post-LogsFreezer";

@Controller('freezer/logs')
export class LogsFreezerController {

  constructor(private readonly logsFreezerService: LogsFreezerService) {}
  
  @Post()
  async postData(@Body() data: PostLogsFreezer) {
    return this.logsFreezerService.postData(data);
  }
}