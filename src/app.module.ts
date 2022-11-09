import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigcatService } from './configcat/configcat.service';
import { AmplitudeService } from './amplitude/amplitude.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConfigcatService, AmplitudeService],
})
export class AppModule {}
