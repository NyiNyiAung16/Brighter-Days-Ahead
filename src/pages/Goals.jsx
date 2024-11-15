import SetGoal from "../components/SetGoal";
import GoalLists from "../components/GoalLists";
import { useState } from "react";
import DefaultLayout from "../layouts/default";

export default function Goals() {
    const [goals,setGoals] = useState([
        { id:1, body: 'sleep 5 minutes', completed: false },
        { id:2, body: 'sleep 5 minutes', completed: true },
        { id:3, body: 'sleep 5 minutes', completed: false },
        { id:4, body: 'sleep 5 minutes', completed: false },
        { id:5, body: 'sleep 5 minutes', completed: true },
        { id:6, body: 'sleep 5 minutes', completed: false },
        { id:7, body: 'sleep 5 minutes', completed: true },
    ])

    return (
        <DefaultLayout>
            <div className="max-w-sm md:max-w-lg mx-5 md:mx-auto space-y-5">
                <SetGoal setGoals={setGoals}/>
                <GoalLists goals={goals} setGoals={setGoals}/>
            </div>
        </DefaultLayout>
    )
}