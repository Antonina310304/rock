import WorkoutResponse from "@rock/shared";
import {WorkoutService} from "@/api/service";
import {notFound} from "next/navigation";
import WorkoutList from "@/app/test/workout-list";

export default async function Page() {
    let workoutList: WorkoutResponse = {} as WorkoutResponse
    try {
        const data: Response = await WorkoutService.getWorkoutList();
        workoutList = await data.json();
    } catch (e) {
        console.info(e.message)
        return notFound()
    }

    return (
        <div>
            <WorkoutList workout={workoutList}></WorkoutList>
        </div>
    )
}