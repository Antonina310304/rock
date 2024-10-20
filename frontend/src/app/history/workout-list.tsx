"use client";
import { FC } from "react";
import { WorkoutResponse } from "@rock/shared";

import Exercises from "~/app/history/exercise";
import { DatesFormat } from "~/utils/dates-format";

type WorkoutListProps = {
  workout: WorkoutResponse;
};

const WorkoutList: FC<WorkoutListProps> = ({ workout }: WorkoutListProps) => {
  return (
    <ul>
      {Object.keys(workout).map((date) => {
        return (
          <li key={date}>
            <div>дата: {DatesFormat.userLocalFormat(date)}</div>
            <p>тренировки:</p>
            <ul>
              {workout[date].map((workout) => {
                return (
                  <div key={workout.id}>
                    <p>дата:{workout.date}</p>
                    {workout.comments && <p>комментарий: {workout.comments}</p>}
                    {workout.exercise?.length && (
                      <>
                        <p>упражнения:</p>
                        <Exercises exercises={workout.exercise} />
                      </>
                    )}
                  </div>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default WorkoutList;
