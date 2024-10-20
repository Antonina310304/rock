import { Injectable } from "@nestjs/common";

import { WorkoutRepository } from "../common/repositories/workout/workout.repository";
import { WorkoutListInterface } from "../common/repositories/workout/workout.types";

import { Workout } from "./types";
import { ApiMapper } from "./api.mapper";

@Injectable()
export class ApiService {
  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async getExerciseListByUser(useId: string): Promise<Record<string, Workout[]>> {
    const workoutList: WorkoutListInterface[] = await this.workoutRepository.getExerciseListByUser(useId);

    const response: Record<string, Workout[]> = {};
    ApiMapper.mapWorkout(workoutList, response);
    return response;
  }
}
