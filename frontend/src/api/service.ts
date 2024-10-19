export class WorkoutService {
    static async getWorkoutList(): Promise<Response> {
        return  await fetch('http://backend:3000/get-exercise');
    }
}