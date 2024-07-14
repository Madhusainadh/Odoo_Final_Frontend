import {
    Box,
    Flex,
    Input,
    Heading,
    VStack,
    SimpleGrid,
    useBreakpointValue,
    Button,
  } from "@chakra-ui/react";
  import BookListCard from "../Components/BookListCard";
import { useState } from "react";
  
  const BooksList = () => {

    const [searchValue, setSearchValue] = useState("")

    const inputWidth = useBreakpointValue({ base: "80%", md: "40%" });
    const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

    
    const handleSearch = () => {
        console.log("Search Value:", searchValue);
      };


    return (
      <VStack p={4}>
        <Flex w="full" p={2} alignItems="center" justifyContent="center">
          <Input placeholder="Search books..." size="lg" w={inputWidth} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
          <Button
          ml={2} // Margin left for spacing from the input field
          colorScheme="blue"
          onClick={handleSearch}
        >
          Search
        </Button>        </Flex>
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
    );
  };
  
  export default BooksList;
  