import { Injectable } from "@nestjs/common";

import { WorkoutRepository } from "../common/repositories/workout/workout.repository";
import { WorkoutListInterface } from "../common/repositories/workout/workout.types";
import { ExerciseMapRepository } from "../common/repositories/exercise-map/exercise-map";
import { ExerciseMapType } from "../common/repositories/exercise-map/exercise-map.type";

import { Workout } from "./types";
import { ApiMapper } from "./api.mapper";

@Injectable()
export class ApiService {
  constructor(
    private readonly workoutRepository: WorkoutRepository,
    private readonly exerciseMapRepository: ExerciseMapRepository
  ) {}

  async getExerciseListByUser(useId: string): Promise<Record<string, Workout[]>> {
    const workoutList: WorkoutListInterface[] = await this.workoutRepository.getExerciseListByUser(useId);

    console.log(workoutList);

    const response: Record<string, Workout[]> = {};
    ApiMapper.mapWorkout(workoutList, response);
    return response;
  }

  async getExerciseMap(): Promise<ExerciseMapType[]> {
    return await this.exerciseMapRepository.getList();
  }
}
