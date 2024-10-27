import { Injectable } from "@nestjs/common";

import { DatabaseService } from "../../database/database.service";

import { ExerciseMapType } from "./exercise-map.type";

@Injectable()
export class ExerciseMapRepository {
  constructor(private readonly database: DatabaseService) {}

  async getList(): Promise<ExerciseMapType[]> {
    return await this.database.exerciseMap.findMany();
  }
}
