import { useContext } from "react";
import { RelaxationContext } from "../contexts/relaxationContext";

export default function useRelaxation() {
    const context = useContext(RelaxationContext);

    return context;
}