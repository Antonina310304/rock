import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { Workout } from '@rock/shared';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('get-exercise')
  async getExerciseListByUser(): Promise<Record<string, Workout[]>> {
    return await this.apiService.getExerciseListByUser(
      '117636cf-73b0-4be0-988f-08c14171708f',
    );
  }
}
