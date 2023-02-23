import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PaymentsOptModule } from './payments-opt/payments-opt.module';

@Module({
  imports: [UsersModule, PaymentsOptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
