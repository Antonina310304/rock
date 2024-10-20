"use client";
import { WorkoutResponse } from "@rock/shared";
import { FC } from "react";

import Exercises from "~/app/history/exercise";

type WorkoutListProps = {
  workout: WorkoutResponse;
};

const WorkoutList: FC<WorkoutListProps> = ({ workout }: WorkoutListProps) => {
  return (
    <ul>
      {Object.keys(workout).map((date) => {
        return (
          <li key={date}>
            <div>дата: {date}</div>
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
