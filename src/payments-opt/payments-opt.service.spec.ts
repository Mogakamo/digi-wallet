import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsOptService } from './payments-opt.service';

describe('PaymentsOptService', () => {
  let service: PaymentsOptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsOptService],
    }).compile();

    service = module.get<PaymentsOptService>(PaymentsOptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
