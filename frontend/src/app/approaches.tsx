import { Approach } from "@rock/shared";
import { FC } from "react";

type ApproachViewProps = {
  approaches: Approach[];
};
const Approaches: FC<ApproachViewProps> = ({ approaches }: ApproachViewProps) => {
  return (
    <div>
      {approaches.map((approach) => (
        <div key={approach.approach}>
          <div>подход: {approach.approach}</div>
          <div>вес: {approach.weight}</div>
          {approach.comments && <div>комментарий: {approach.comments}</div>}
        </div>
      ))}
    </div>
  );
};

export default Approaches;
