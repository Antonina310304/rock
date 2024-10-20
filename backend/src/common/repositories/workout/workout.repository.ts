import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { DatabaseService } from "../../database/database.service";

import { WorkoutListInterface } from "./workout.types";

@Injectable()
export class WorkoutRepository {
  constructor(private readonly prisma: DatabaseService) {}

  async getExerciseListByUser(useId: string): Promise<WorkoutListInterface[]> {
    return await this.prisma.$queryRaw(Prisma.sql`
            SELECT w.id as "workoutId",
                   -- date_trunc('day', w.date)::varchar as date,
                   TO_CHAR(w.date::date, 'YYYY-MM-DD') as date,
                   w.cardio,
                   w.comments as "workoutComments",
                   e.id      as "exerciseId",
                   em.title   as exercise,
                   e.comments as "exerciseComments",
                   a.approach,
                   a.comments as "approachComments",
                   a.weight
            FROM workout w
                     LEFT JOIN exercise e on e.workout_id = w.id
                     LEFT JOIN exercise_map em on e.exercise_id = em.id
                     LEFT JOIN approach a on a.exercise_id = e.id
            WHERE user_id = ${useId}::UUID;
        `);
  }
}
