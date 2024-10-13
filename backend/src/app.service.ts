import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class AppService {
  async getHello(): Promise<number> {
    const client = new PrismaClient();
    return client.user.count();
  }
}
