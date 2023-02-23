import { Injectable } from '@nestjs/common';
import { CreatePaymentsOptDto } from './dto/create-payments-opt.dto';
import { UpdatePaymentsOptDto } from './dto/update-payments-opt.dto';

@Injectable()
export class PaymentsOptService {
  create(createPaymentsOptDto: CreatePaymentsOptDto) {
    return 'This action adds a new paymentsOpt';
  }

  findAll() {
    return `This action returns all paymentsOpt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentsOpt`;
  }

  update(id: number, updatePaymentsOptDto: UpdatePaymentsOptDto) {
    return `This action updates a #${id} paymentsOpt`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentsOpt`;
  }
}
