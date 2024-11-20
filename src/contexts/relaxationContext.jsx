import { createContext, useEffect, useState } from "react";
import { getRelaxation } from "../helpers/relaxation";

const RelaxationContext = createContext();

const RelaxationContextProvider = ({ children }) => {
    const [relaxations, setRelaxations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      const fetch = async () => {
        setIsLoading(true);
        let data =  await getRelaxation();
        setRelaxations(data);
        setIsLoading(false);
      };
      fetch();
    },[]);
    

    const value = {
        relaxations,
        isLoading,
        setRelaxations
    }

    return <RelaxationContext.Provider value={value}>{ children }</RelaxationContext.Provider>
} 


export { RelaxationContext, RelaxationContextProvider };