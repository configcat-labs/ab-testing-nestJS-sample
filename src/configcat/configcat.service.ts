import { Injectable } from '@nestjs/common';
import * as configcat from 'configcat-node';

@Injectable()
export class ConfigcatService {
  private readonly configcatClient = configcat.createClient('YOUR-SDK-KEY');
  
  // mimic unique user ID
  private userID = '8a87567';

  async getFlagStatus() {
    let flagStatus = await this.configcatClient.getValueAsync('newheading', false, {
      identifier: this.userID
    });
    console.log(flagStatus);
    return flagStatus; 
  }

  getUserId() {
    return this.userID;
  }

}