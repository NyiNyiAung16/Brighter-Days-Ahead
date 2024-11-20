import SetGoal from "../components/SetGoal";
import GoalLists from "../components/GoalLists";
import DefaultLayout from "../layouts/default";
import Spinner from "../components/Spinner";
import useGoal from "../helpers/useGoal";
import { setTitle } from "../helpers/setTitle";

export default function Goals() {
  const goalContext = useGoal();
  setTitle("Goals");

  return (
    <DefaultLayout>
      <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto px-3 sm:px-0 space-y-5">
        <SetGoal />
        {goalContext?.isLoading && <Spinner className="block mx-auto"/>}
        {!goalContext?.isLoading && <GoalLists goals={goalContext?.goals}/>}
      </div>
    </DefaultLayout>
  );
}
