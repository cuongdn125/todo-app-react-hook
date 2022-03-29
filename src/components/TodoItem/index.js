import { Box, Checkbox, Text } from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { updateTodo } from '../../actions';
import { TodoContext } from '../../App';

export default function TodoItem(props) {
  const { todo, handleEditTodo, handleDeleteTodo } = props;

  const [checked, setChecked] = useState(todo.completed);

  const dispatch = useContext(TodoContext);

  const handleCheckedChange = () => {
    dispatch(updateTodo({ id: todo.id, completed: !checked }));

    setChecked(!checked);
  };
  const handleEdit = () => {
    handleEditTodo(todo);
  };
  const handleDelete = () => {
    handleDeleteTodo(todo);
  };
  return (
    todo && (
      <Box
        w="100%"
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        h={30}
        pl={4}
        pr={4}
        opacity={checked ? 0.3 : 1}
        textDecoration={checked ? 'line-through' : 'none'}
      >
        <Box display="flex">
          <Checkbox isChecked={checked} mr={2} onChange={handleCheckedChange} />
          <Text lineHeight={2}>{todo.name}</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            mr={4}
            w="20px"
            h="20px"
            bg="gray.200"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="4px"
            onClick={handleEdit}
          >
            <AiFillEdit />
          </Box>
          <Box
            w="20px"
            h="20px"
            bg="tomato"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="4px"
            onClick={handleDelete}
          >
            <AiFillDelete />
          </Box>
        </Box>
      </Box>
    )
  );
}
