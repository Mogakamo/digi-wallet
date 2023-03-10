/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-headerapikey/lib/Strategy';
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException } from '@nestjs/common';

export class HeaderApiKeyStrategy extends PassportStrategy(
  Strategy,
  'api-key',
) {
  constructor(private readonly configService: ConfigService) {
    super(
      {
        header: 'X-API-KEY',
        prefix: '',
        passReqToCallback: false,
      },
      true,
      async function (apiKey: any, done: any) {
        return this.validate(apiKey, done);
      },
    );
  }

  public validate = (apiKey: string, done: (error: any, data: any) => {}) => {
    if (this.configService.get('API_KEY') === apiKey) {
         done(null, true);
    }

    done(new UnauthorizedException(), null);
  };
}
