/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';

@Module({
  imports: [PassportModule, ConfigModule],
  controllers: [],
  providers: [HeaderAPIKeyStrategy],
})
export class AuthModule {}
