import { Exercise } from "@rock/shared";
import { FC } from "react";

import Approaches from "~/app/approaches";

type ExerciseViewProps = {
  exercises: Exercise[];
};
const Exercises: FC<ExerciseViewProps> = ({ exercises }: ExerciseViewProps) => {
  return (
    <div>
      {exercises.map((exercise) => (
        <>
          <div>{exercise.exercise}</div>
          {exercise.comments && <div>{exercise.comments}</div>}

          {exercise.approach?.length && (
            <>
              <p>Подходы</p>
              <Approaches approaches={exercise.approach} />
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default Exercises;
