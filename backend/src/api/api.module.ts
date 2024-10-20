import { Module } from "@nestjs/common";

import { DatabaseModule } from "../common/database/database.module";
import { WorkoutRepository } from "../common/repositories/workout/workout.repository";

import { ApiController } from "./api.controller";
import { ApiService } from "./api.service";

@Module({
  imports: [DatabaseModule],
  controllers: [ApiController],
  providers: [ApiService, WorkoutRepository]
})
export class ApiModule {}
