import { Test, TestingModule } from '@nestjs/testing';
import { ActiveCasesController } from './active-cases.controller';

describe('ActiveCasesController', () => {
  let controller: ActiveCasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiveCasesController],
    }).compile();

    controller = module.get<ActiveCasesController>(ActiveCasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
