import { Injectable } from '@nestjs/common';
import * as configcat from 'configcat-node';

@Injectable()
export class ConfigcatService {
  private readonly configcatClient = configcat.createClient('YOUR-SDK-KEY');
  
  // I'm mimicking a unique userid. Use login IDs and other similar values in production
  private userID = '343467';
 
  getFlagStatus() {
    return this.configcatClient.getValueAsync('newheading', false, {
      identifier: this.userID
    });
  }

  getUserID() {
    return this.userID;
  }
 
}