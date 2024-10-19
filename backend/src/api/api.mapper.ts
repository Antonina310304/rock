import { WorkoutListInterface } from '../common/repositories/workout/workout.types';
import { Approach, Exercise, Workout } from './types';

export class ApiMapper {
  static mapWorkout(
    response: WorkoutListInterface[],
    destination: Record<string, Workout[]>,
  ) {
    const exercise: Record<string, Record<string, Exercise>> = {};
    const approach: Record<string, Approach[]> = {};

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
          // могут приходить подходы со всеми полями null
          approach: Object.values(approach[workout.exerciseId]).filter(
            (approach) => approach.approach && approach.weight,
          ),
        },
      };

      destination[workout.date] = [
        ...(workout[workout.date] ?? []),
        {
          id: workout.workoutId,
          date: workout.date,
          comments: workout.workoutComments,
          exercise: Object.values(exercise[workout.workoutId]),
        },
      ];
    });
  }
}
