import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  IconButton,
  HStack
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

function NavBar() {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('black', 'white');

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg={bgColor}
      color={color}
      borderBottom="1px solid black"
    >
      <HStack spacing={4} align="center">
        <Text>Odoo Public Library</Text>
      </HStack>

      <Flex align="center">
        <IconButton
          icon={<FaHome />}
          isRound="true"
          onClick={() => alert("Home clicked")}
          aria-label="Home Button"
          bg="red.500"
          color="white"
          _hover={{ bg: 'red.600' }}
        />
        <Text marginLeft="8">Login</Text>
      </Flex>
    </Flex>
  );
}

export default NavBar;
