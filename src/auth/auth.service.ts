/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  validateApiKey(apiKey: string) {
    const apiKeys: string[] = ['api-key-1', 'api-key-2'];
    return apiKeys.find((key) => apiKey == key);
  }

  async validateUser(username: string, password: any) {}
}
