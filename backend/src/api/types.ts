export interface Approach {
  approach: number;
  comments: string;
  weight: number;
}
export interface Exercise {
  exerciseId: string;
  comments: string;
  approach: Approach[];
}

export interface Workout {
  id: string;
  date: string;
  comments: string;
  exercise: Exercise[];
}
