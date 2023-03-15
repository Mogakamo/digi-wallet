import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-headerapikey/lib/Strategy';
import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

export class HeaderApiKeyStrategy extends PassportStrategy(
  Strategy,
  'api-key',
) {
  constructor(private readonly authService: AuthService) {
    super(
      {
        header: 'api-key',
        prefix: '',
      },
      true,
      async function (apiKey: any, done: any) {
        if (this.authService.validateApiKey(apiKey)) {
          done(null, true);
        }
        done(new UnauthorizedException(), null);
      },
    );
  }
}
