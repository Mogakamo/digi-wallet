import { Module } from '@nestjs/common';
import { PaymentsOptService } from './payments-opt.service';
import { PaymentsOptGateway } from './payments-opt.gateway';

@Module({
  providers: [PaymentsOptGateway, PaymentsOptService],
})
export class PaymentsOptModule {}
