import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from './auth.service';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [HeaderAPIKeyStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
