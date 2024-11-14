import Goal from './Goal'

export default function GoalLists({ goals, setGoals }) {
  return (
    <div className="flex flex-col border border-info rounded">
      {goals.map((goal, i) => (
        <Goal goal={goal} setGoals={setGoals} key={i} />
      ))}
    </div>
  );
}
