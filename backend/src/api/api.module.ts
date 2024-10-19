import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { DatabaseModule } from '../common/database/database.module';
import { ApiService } from './api.service';
import { WorkoutRepository } from '../common/repositories/workout/workout.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ApiController],
  providers: [ApiService, WorkoutRepository],
})
export class ApiModule {}
