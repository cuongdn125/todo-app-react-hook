import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { setSearch } from '../../actions';
import { TodoContext } from '../../App';

export default function Search({ search }) {
  const dispatch = useContext(TodoContext);

  return (
    <Box w="100%">
      <FormControl>
        <FormLabel htmlFor="search">Search</FormLabel>
        <Input
          id="search"
          placeholder="Search"
          value={search}
          autoComplete="off"
          onChange={e => dispatch(setSearch(e.target.value))}
        />
      </FormControl>
    </Box>
  );
}
