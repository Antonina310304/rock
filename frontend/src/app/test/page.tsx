import WorkoutResponse from "@rock/shared";
import {WorkoutService} from "@/api/service";
import {notFound} from "next/navigation";

export default async function Page() {
    let workoutList: WorkoutResponse = {} as WorkoutResponse
    try {g
        const data: Response = await WorkoutService.getWorkoutList();
        workoutList = await data.json();
    } catch (e) {
        console.info(e.message)
        return notFound()
    }

    return (
        <div>
            {JSON.stringify(workoutList)}
        </div>
    )
}