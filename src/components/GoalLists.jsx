import Goal from './Goal'

export default function GoalLists({ goals, setGoals }) {
  return (
    <div className="flex flex-col space-y-3 rounded">
      {goals.length === 0 && <p className="text-center text-gray-700">No goals yet.</p>}
      {goals.map((goal, i) => (
        <Goal goal={goal} setGoals={setGoals} key={i} />
      ))}
    </div>
  );
}
