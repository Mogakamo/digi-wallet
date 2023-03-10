/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PaymentsOptModule } from './payments-opt/payments-opt.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { HeaderApiKeyStrategy } from './auth/auth-header-api-key.strategy';

@Module({
  imports: [UsersModule, PaymentsOptModule, ConfigModule.forRoot(), AuthModule, PassportModule.register({defaultStrategy: 'api-key'})],
  controllers: [AppController],
  providers: [AppService, HeaderApiKeyStrategy],
})
export class AppModule {}
