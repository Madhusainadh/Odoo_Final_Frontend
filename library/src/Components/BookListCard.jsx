import {
  Box,
  Image,
  Text,
  VStack,
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/Actions/CartActions";
import { MinusIcon } from "@chakra-ui/icons";
import { AddIcon } from "@chakra-ui/icons";
import { useToast } from '@chakra-ui/react';

function BookListCard({
  title = "Book Title",
  author = "Author Name",
  imageSrc,
  price = 20.0, // Assuming a price prop
}) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAddToCart = () => {
    const productDetails = {
      _id:Math.random(),
      id:Math.random(),
      title,
      author,
      imageSrc,
      quantity,
      price,
    };
    dispatch(addToCart(productDetails));
    toast({
        title: "Added to cart",
        description: `${title} has been added to your cart.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right"
      });
    // alert('Added to cart!');
  };

  return (
    <Box
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ shadow: "lg" }}
    >
      <VStack spacing={4}>
        <Image
          src={
            imageSrc ||
            "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
          }
          alt={`Cover of ${title}`}
          boxSize="150px"
        />
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="sm">{author}</Text>
        <Text fontSize="sm" noOfLines={2}>
          {
            "ghts, configure the company and language, and so on.* Cover all platforms such as mobile, web, content management, and e-commerce.Who This Book Is ForThis book is targeted towards Odoo functional users and project managers who would like to use it for their organization. No expertise in Odoo is required.What You Will Learn* Learn the modern way of doing sales and managing sales contracts.* Create and configure your products and manage your sales quotations* Set up an online shop and start selling online with Odoo eCommerce* Manage multi-currency transactions and create a deferred revenue plan and link it with products* Administer vendors and products and request quotations, confirm orders, and get them delivered* Manage quality control in the warehouse and manual and real-time inventory stock valuations.* Manage projects and project forecasting via grid and Gantt views* Implement Human Resource apps and manage the employee appraisal process* Manage Workcenters and the product lifecycle* Track worker activity with tablets and launch new changes in productionIn DetailOdoo is a Python-based ERP system and is completely open source. Odoo is a comprehensive suite of business applications offering a wealth of functionalities that can be deployed to meet your business needs.This book will help you manage the different functionalities of your business and optimize it. You will learn in detail about the various facets of the business process such as sales, accounting, purchases, manufacturing, and inventory. We will cover each of these topics in detail and learn how Odoo handles all these tasks with much ease. With its modular approach, you will be able to build customized solutions, take advantage of the Odoo 10 system in your o"
          }
        </Text>
        <HStack>
          <IconButton
            icon={<MinusIcon />}
            aria-label="Decrease quantity"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          />{" "}
          <Text>{quantity}</Text>
          <IconButton
            icon={<AddIcon />}
            aria-label="Increase quantity"
            onClick={() => setQuantity(quantity + 1)}
          />
          <Button colorScheme="teal" size="sm" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default BookListCard;
