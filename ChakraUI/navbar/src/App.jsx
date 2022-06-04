import logo from './logo.svg';
import './App.css';

import { Box , Text , Flex, Spacer, Heading} from '@chakra-ui/react';

import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
      <Box bg='tomato' w='100%' p={"4"} color='white'>

      <Flex>
      <Box  w='100px'>
           Logo
      </Box>
      <Box w='120px' h='10'>
          Inspiration
      </Box>
      <Box w='120px' h='10'>
          Inspiration
      </Box>
      <Box w='120px' h='10'>
          Inspiration
      </Box>
      <Box w='120px' h='10'>
          Inspiration
      </Box>

      <Spacer />

      <ButtonGroup>
        <Button colorScheme='teal' variant='solid'>Sign Up</Button>
        <Button colorScheme='teal'>Log in</Button>
      </ButtonGroup>
      </Flex>

      

      </Box>
  );
}

export default App;
