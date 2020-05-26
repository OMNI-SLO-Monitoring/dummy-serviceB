import { Test, TestingModule } from '@nestjs/testing';
import { ControllsController } from './controlls.controller';

describe('Controlls Controller', () => {
  let controller: ControllsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllsController],
    }).compile();

    controller = module.get<ControllsController>(ControllsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
