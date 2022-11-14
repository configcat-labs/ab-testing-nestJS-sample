import { Injectable } from '@nestjs/common';
import * as amplitude from '@amplitude/node';

@Injectable()
export class AmplitudeService {
    private readonly client = amplitude.init('YOUR-API-KEY');
    
    sendClickEvent(userID: string, flagValue: boolean) {
         
        this.client.logEvent( 
            {
                event_type: 'Click Subscribe', // event name
                user_id: userID,
                event_properties: {
                    newHeadingEnabled: flagValue
                }
            }
        );
    }   
}