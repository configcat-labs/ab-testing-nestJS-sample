import { Controller, Get, Post } from '@nestjs/common';
import { ConfigcatService } from './configcat/configcat.service';
import { AmplitudeService } from './amplitude/amplitude.service';

@Controller()
export class AppController {
  constructor(private readonly configcatService: ConfigcatService, private readonly amplitudeService: AmplitudeService) {}

  @Get('/flag')
  async getFlagStatus(): Promise<boolean> {
    const flagStatus = await this.configcatService.getFlagStatus();
    return flagStatus;
  }

  @Post('/send')
  async handleClick() {
    const flagStatus = await this.configcatService.getFlagStatus();
    const userID = this.configcatService.getUserID();
    console.log(flagStatus);
    try {
      this.amplitudeService.sendClickEvent(userID, flagStatus);
    } catch (error) {
      console.error(error);
    }     
  }
}
