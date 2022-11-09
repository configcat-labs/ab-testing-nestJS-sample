import { Test, TestingModule } from '@nestjs/testing';
import { AmplitudeService } from './amplitude.service';

describe('AmplitudeService', () => {
  let service: AmplitudeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmplitudeService],
    }).compile();

    service = module.get<AmplitudeService>(AmplitudeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
