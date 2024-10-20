import { WorkoutResponse } from "@rock/shared";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import { WorkoutService } from "~/api/service";
import WorkoutList from "~/app/history/workout-list";

export default async function Page(): Promise<ReactNode> {
  let workoutList: WorkoutResponse = {} as WorkoutResponse;
  try {
    const data: Response = await WorkoutService.getWorkoutList();
    workoutList = (await data.json()) as WorkoutResponse;
  } catch (e) {
    console.info((e as Error).message);
    return notFound();
  }

  return (
    <div>
      <WorkoutList workout={workoutList} />
    </div>
  );
}
