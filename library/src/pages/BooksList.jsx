import {
  Box,
  Flex,
  Input,
  Heading,
  VStack,
  SimpleGrid,
  useBreakpointValue,
  Button,
  HStack,
} from "@chakra-ui/react";
import BookListCard from "../Components/BookListCard";
import { useState } from "react";
import UserProfile from "../Components/UserProfile";
import AddBookModal from "../Components/AdminComponents/AddBookModal";

const BooksList = () => {
  const [searchValue, setSearchValue] = useState("");

  const inputWidth = useBreakpointValue({ base: "80%", md: "40%" });
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  const handleSearch = () => {
    console.log("Search Value:", searchValue);
  };

  return (
    <HStack>
      <VStack p={4}>
        <Flex w="full" p={2} alignItems="center" justifyContent="space-between">
            <Input
              placeholder="Search books..."
              size="lg"
              w={inputWidth}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              ml={2} // Margin left for spacing from the input field
              colorScheme="blue"
              onClick={handleSearch}
            >
              Search
            </Button>{" "}

          <AddBookModal />
        </Flex>z
        <VStack spacing={4} w="full" p={4}>
          <Box>
            <Heading size="lg">New Arrivals</Heading>
            <SimpleGrid columns={columns} spacing={4}>
              {/* Map your new arrivals books here */}
              <BookListCard />
              <BookListCard />
              <BookListCard />
            </SimpleGrid>
          </Box>
          <Box>
            <Heading size="lg">Trending</Heading>
            <SimpleGrid columns={columns} spacing={4}>
              {/* Map your trending books here */}
              <BookListCard />
              <BookListCard />
              <BookListCard />
            </SimpleGrid>
          </Box>
        </VStack>
      </VStack>
      <Box display={{ base: "none", md: "block" }}>
    <UserProfile />
  </Box>
    </HStack>
  );
};

export default BooksList;
