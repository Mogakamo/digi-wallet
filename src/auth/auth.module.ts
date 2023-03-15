import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import {UsersService} from '../users/users.service'

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    JwtModule.register({
      secret: 'jwt-secret',
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  providers: [HeaderAPIKeyStrategy, AuthService, LocalStrategy, JwtStrategy, UsersService],
  exports: [AuthService],
})
export class AuthModule {}
