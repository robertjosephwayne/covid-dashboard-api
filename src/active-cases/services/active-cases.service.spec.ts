import { Test, TestingModule } from '@nestjs/testing';
import { ActiveCasesService } from './active-cases.service';

describe('ActiveCasesService', () => {
  let service: ActiveCasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActiveCasesService],
    }).compile();

    service = module.get<ActiveCasesService>(ActiveCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
