import { Injectable } from '@nestjs/common';
import * as configcat from 'configcat-node';

@Injectable()
export class ConfigcatService {
  private readonly configcatClient = configcat.createClient('YOUR-SDK-KEY');
  protected userId = '343467';

  get getUserId() {
    return this.userId;
  }
  
  getFlagStatus() {
    return this.configcatClient.getValueAsync('showdownloadsize', false, {
      identifier: this.userId
    });
  }
}