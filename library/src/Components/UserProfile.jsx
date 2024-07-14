import React from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  Icon,
  Heading
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const UserProfile = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} m={5} boxShadow="md">
      <Heading size="md" mb={4} bgColor="green.300" p={2} textAlign="center">User Profile</Heading>
      <VStack spacing={4} align="center">
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://madhusainadh.github.io/static/media/logo.b1c652514ac4b989f2a3.jpg"
          alt="Mitchell Admin"
        />
        <Text fontWeight="bold" fontSize="xl">Mitchell Admin</Text>
        <Text color="gray.500">@lord_herzlich</Text>
        <Text>215 Vine St</Text>
        <Text>Scranton PA 18503</Text>
        <Text>United States</Text>
        <HStack spacing={2}>
          <Icon as={FaPhone} />
          <Text>+1 555-555-5555</Text>
        </HStack>
        <HStack spacing={2}>
          <Icon as={FaEnvelope} />
          <Text>admin@yourcompany.example.com</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default UserProfile;
