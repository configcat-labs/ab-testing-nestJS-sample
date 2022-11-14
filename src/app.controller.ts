import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigcatService } from './configcat/configcat.service';
import { AmplitudeService } from './amplitude/amplitude.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly configcatService: ConfigcatService, private readonly amplitudeService: AmplitudeService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/flag')
  async getFlagStatus(): Promise<boolean> {
    const flagStatus = await this.configcatService.getFlagStatus();
    return flagStatus;
  }

  @Post('/send')
  handleClick() {
    try {
      this.amplitudeService.sendCustomProperties();
      this.amplitudeService.sendClickEvent();
      console.log('Success!');
    } catch (error) {
      console.log(error);
    }     
  }
}