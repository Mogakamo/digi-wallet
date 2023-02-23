import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsOptGateway } from './payments-opt.gateway';
import { PaymentsOptService } from './payments-opt.service';

describe('PaymentsOptGateway', () => {
  let gateway: PaymentsOptGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsOptGateway, PaymentsOptService],
    }).compile();

    gateway = module.get<PaymentsOptGateway>(PaymentsOptGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
