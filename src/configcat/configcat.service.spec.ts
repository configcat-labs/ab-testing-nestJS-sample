import { Test, TestingModule } from '@nestjs/testing';
import { ConfigcatService } from './configcat.service';

describe('ConfigcatService', () => {
  let service: ConfigcatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigcatService],
    }).compile();

    service = module.get<ConfigcatService>(ConfigcatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
