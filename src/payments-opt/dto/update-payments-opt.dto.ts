import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentsOptDto } from './create-payments-opt.dto';

export class UpdatePaymentsOptDto extends PartialType(CreatePaymentsOptDto) {
  id: number;
}
