import { createContext, useEffect, useId, useState } from "react";
import { getGoals } from "../helpers/goals";
import { useUser } from "../helpers/useAuth";

const GoalContext = createContext();

const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const user = useUser();
  const userId = user.id;

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      let data = await getGoals();
      setGoals([...data].filter((goal) => goal.user.id === userId));
      setIsLoading(false);
    };
    fetch();
  }, [userId]);

  const value = {
    goals,
    isLoading,
    setGoals,
  };

  return <GoalContext.Provider value={value}>{children}</GoalContext.Provider>;
};

export { GoalContext, GoalProvider };
