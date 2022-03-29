import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  List,
} from '@chakra-ui/react';
import React, { useState, useRef, useContext } from 'react';
import { deleteTodo, setName, addTodo, updateTodo } from '../../actions';
import { TodoContext } from '../../App';
import Search from '../Search';
import TodoItem from '../TodoItem';

export default function TodoList({ state }) {
  const { name, todos, search } = state;

  const dispatch = useContext(TodoContext);

  const [edit, setEdit] = useState(false);
  const [idEdit, setIdEdit] = useState('');

  const nameRef = useRef(null);

  const handleEditTodo = todo => {
    dispatch(setName(todo.name));
    setIdEdit(todo.id);
    setEdit(true);
    nameRef.current.focus();
  };

  const handleDeleteTodo = todo => {
    dispatch(deleteTodo(todo.id));
    dispatch(setName(''));
    setEdit(false);
  };

  const handleAddTodo = () => {
    dispatch(addTodo({ name, id: Date.now().toString(), completed: false }));
    dispatch(setName(''));
  };

  const handleUpdateTodo = () => {
    dispatch(updateTodo({ id: idEdit, name: name }));
    dispatch(setName(''));
    setEdit(false);
    nameRef.current.focus();
  };

  return (
    <Flex align="center" justify="center" h="100vh" bg="gray.200">
      <Box
        h="700px"
        w="500px"
        borderRadius={8}
        boxShadow="xl"
        p="6"
        rounded="md"
        bg="white"
        position="relative"
      >
        <Heading textAlign="center">Todo App</Heading>

        <Search search={search} />
        <Box w="100%" h="450px" mt="5" overflowY="auto">
          <List spacing={3}>
            {/* {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleEditTodo={handleEditTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))} */}
            {todos
              .filter(todo => {
                if (search.trim() !== '') {
                  return todo.name.toLowerCase().includes(search.toLowerCase());
                }
                return true;
              })
              .map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleEditTodo={handleEditTodo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              ))}
          </List>
        </Box>
        <FormControl
          display="flex"
          position="absolute"
          bottom="10px"
          left="0px"
          p="24px"
        >
          <Input
            ref={nameRef}
            mr="4px"
            value={name}
            onChange={e => {
              dispatch(setName(e.target.value));
            }}
          />
          {edit ? (
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={handleUpdateTodo}
            >
              Edit
            </Button>
          ) : (
            <Button colorScheme="teal" variant="solid" onClick={handleAddTodo}>
              Add
            </Button>
          )}
        </FormControl>
      </Box>
    </Flex>
  );
}
