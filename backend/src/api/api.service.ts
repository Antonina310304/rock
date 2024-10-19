import { Injectable } from '@nestjs/common';
import { WorkoutRepository } from '../common/repositories/workout/workout.repository';
import { WorkoutListInterface } from '../common/repositories/workout/workout.types';
import { Approach, Exercise, Workout } from './types';

@Injectable()
export class ApiService {
  constructor(private readonly workoutRepository: WorkoutRepository) {}
  async getExerciseListByUser(
    useId: string,
  ): Promise<Record<string, Workout[]>> {
    const response: WorkoutListInterface[] =
      await this.workoutRepository.getExerciseListByUser(useId);

    const map: Record<string, Workout[]> = {};
    const exercise: Record<string, Record<string, Exercise>> = {};
    const approach: Record<string, Approach[]> = {};

    // список подходов соединить со списоком упражнений
    // список упражнений соединить со списком тренировок
    response.forEach((workout: WorkoutListInterface) => {
      approach[workout.exerciseId] = [
        ...(approach[workout.exerciseId] ?? []),
        {
          approach: workout.approach,
          comments: workout.approachComments,
          weight: workout.weight,
        },
      ];

      exercise[workout.workoutId] = {
        ...(exercise[workout.workoutId] ?? {}),
        [workout.exerciseId]: {
          exerciseId: workout.exerciseId,
          exercise: workout.exercise,
          comments: workout.comments,
          approach: approach[workout.exerciseId],
        },
      };

      map[workout.date] = [
        ...(workout[workout.date] ?? []),
        {
          id: workout.workoutId,
          date: workout.date,
          comments: workout.workoutComments,
          exercise: exercise[workout.workoutId],
        },
      ];
    });

    return map;
  }
}
