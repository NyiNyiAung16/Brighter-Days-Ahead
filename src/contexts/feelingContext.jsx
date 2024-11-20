import { createContext, useEffect, useState } from "react";
import { getFeelings } from "../helpers/feelings";

const FeelingContext = createContext();

const FeelingContextProvider = ({ children }) => {
  const [feelings, setFeelings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      let data = await getFeelings();
      setFeelings(data);
      setIsLoading(false);
    };
    fetch();
  }, []);

  const value = {
    feelings,
    isLoading,
    setFeelings,
  };

  return (
    <FeelingContext.Provider value={value}>
        { children }
    </FeelingContext.Provider>
  );
};

export { FeelingContext, FeelingContextProvider };
