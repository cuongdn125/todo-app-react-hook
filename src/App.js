import { ChakraProvider, theme } from '@chakra-ui/react';
import React, { useReducer, createContext } from 'react';
import TodoList from './components/TodoList';

import { reducer } from './reducer';

const intitialState = {
  name: '',
  search: '',
  todos: [
    { id: 1, name: 'Learn ReactJs', completed: false },
    { id: 2, name: 'Learn Chakra UI', completed: true },
  ],
};

export const TodoContext = createContext(null);
function App() {
  const [state, dispatch] = useReducer(reducer, intitialState);
  return (
    <ChakraProvider theme={theme}>
      <TodoContext.Provider value={dispatch}>
        <TodoList state={state} />
      </TodoContext.Provider>
    </ChakraProvider>
  );
}

export default App;
