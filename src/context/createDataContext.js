import React, { useReducer } from "react";

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const triggerActions = {};
    for (let key in actions) {
      triggerActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...triggerActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Provider, Context };
};
