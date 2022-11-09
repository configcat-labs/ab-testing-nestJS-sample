import { Injectable } from '@nestjs/common';
import * as amplitude from '@amplitude/analytics-node';
import { ConfigcatService } from '../configcat/configcat.service';

@Injectable()
export class AmplitudeService {
    private configcatService = new ConfigcatService();
    
    async sendCustomProperties() {
        amplitude.init('YOUR-API-KEY');
        const identity = new amplitude.Identify();

        const flagValue = await this.configcatService.getFlagStatus();

        // custom Amplitude user property

        identity.set('showdownloadsize', flagValue);
        amplitude.identify(identity, {
            user_id: this.configcatService.getUserId
        });
    }

    sendClickEvent () {
        amplitude.logEvent('Download Button Clicked!', undefined, {
            user_id: this.configcatService.getUserId
        });
    }
}