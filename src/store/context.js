import {createContext, useState} from 'react';
import {INITIAL_STATE} from './const';

export const StoreContext = createContext();

export const ContextProvider = ({children}) => {
  const [context, setContext] = useState(INITIAL_STATE);

  return (
    <StoreContext.Provider value={{context, setContext}}>
      {children}
    </StoreContext.Provider>
  );
};
