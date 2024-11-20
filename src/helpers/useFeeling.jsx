import { useContext } from "react";
import { FeelingContext } from '../contexts/feelingContext'

export default function useFeeling() {
    const context = useContext(FeelingContext);
    return context;
}