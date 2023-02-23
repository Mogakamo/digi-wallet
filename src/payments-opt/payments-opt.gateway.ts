import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PaymentsOptService } from './payments-opt.service';
import { CreatePaymentsOptDto } from './dto/create-payments-opt.dto';
import { UpdatePaymentsOptDto } from './dto/update-payments-opt.dto';

@WebSocketGateway()
export class PaymentsOptGateway {
  constructor(private readonly paymentsOptService: PaymentsOptService) {}

  @SubscribeMessage('createPaymentsOpt')
  create(@MessageBody() createPaymentsOptDto: CreatePaymentsOptDto) {
    return this.paymentsOptService.create(createPaymentsOptDto);
  }

  @SubscribeMessage('findAllPaymentsOpt')
  findAll() {
    return this.paymentsOptService.findAll();
  }

  @SubscribeMessage('findOnePaymentsOpt')
  findOne(@MessageBody() id: number) {
    return this.paymentsOptService.findOne(id);
  }

  @SubscribeMessage('updatePaymentsOpt')
  update(@MessageBody() updatePaymentsOptDto: UpdatePaymentsOptDto) {
    return this.paymentsOptService.update(updatePaymentsOptDto.id, updatePaymentsOptDto);
  }

  @SubscribeMessage('removePaymentsOpt')
  remove(@MessageBody() id: number) {
    return this.paymentsOptService.remove(id);
  }
}
