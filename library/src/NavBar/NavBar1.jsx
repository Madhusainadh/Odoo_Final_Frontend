import React from 'react';
import {
  Flex,
  Text,
  IconButton,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar1() {
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
        <Link to="/">
          <IconButton
            icon={<FaHome />}
            isRound={true}
            aria-label="Home Button"
            bg="red.500"
            color="white"
            _hover={{ bg: 'red.600' }}
          />
        </Link>
        <Link to="/login">
          <Text marginLeft="8" cursor="pointer">
            Login
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default NavBar1;
