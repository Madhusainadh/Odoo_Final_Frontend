import { Box, Image, Text, VStack, Button, HStack, IconButton } from "@chakra-ui/react";
import { useState } from "react";

function BookListCard({
  title = "Book Title",
  author = "Author Name",
  imageSrc,
}) {
  const [quantity, setQuantity] = useState(1); // State to keep track of quantity

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Box
      p={4} // Padding inside the box
      shadow="md" // Medium shadow
      borderWidth="1px" // Optional border
      borderRadius="lg" // Rounded corners
      overflow="hidden" // Prevents content from spilling outside
      _hover={{ shadow: "lg" }} // Larger shadow on hover for better interactivity
    >
      <VStack spacing={4}>  // Added spacing between elements
        <Image
          src={imageSrc || "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"}
          alt={`Cover of ${title}`}
          boxSize="150px"
        />
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="sm">{author}</Text>
        <Text fontSize="sm" noOfLines={2}>
          {"Comprehensive tasks covering Odoo 10 in the right way..."} // Placeholder text
        </Text>
        <HStack>
          <IconButton
            icon={<i className="fas fa-minus" />} // Assuming FontAwesome is being used
            aria-label="Decrease quantity"
            onClick={decrementQuantity}
          />
          <Text>{quantity}</Text>
          <IconButton
            icon={<i className="fas fa-plus" />} // Assuming FontAwesome is being used
            aria-label="Increase quantity"
            onClick={incrementQuantity}
          />
          <Button colorScheme="teal" size="sm" onClick={() => alert('Added to cart!')}>
            Add to Cart
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default BookListCard;
