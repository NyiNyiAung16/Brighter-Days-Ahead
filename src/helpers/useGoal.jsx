import { useContext } from "react";
import { GoalContext } from "../contexts/goalContext";

export default function useGoal() {
    const context = useContext(GoalContext);
    return context;
}