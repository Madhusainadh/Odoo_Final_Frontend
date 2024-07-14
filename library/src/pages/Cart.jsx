import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { incrementQuantity, decrementQuantity } from './actions';
import { Box, Button, Text, VStack, HStack, Image } from '@chakra-ui/react';
import { decrementQuantity, incrementQuantity } from '../Store/Actions/CartActions';

function Cart() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <VStack spacing={4}>
      {items.map((item) => (
        <HStack key={item.id} w="100%" p={4} borderWidth="1px" borderRadius="lg" alignItems="center" justifyContent="space-between">
          <Image src={item.imageSrc || 'placeholder.png'} boxSize="100px" alt={item.title} />
          <VStack align="start">
            <Text fontWeight="bold">{item.title}</Text>
            <Text>by {item.author}</Text>
            <Text>${item.price}</Text>
          </VStack>
          <HStack>
            <Button onClick={() => handleDecrement(item.id)}>-</Button>
            <Text>{item.quantity}</Text>
            <Button onClick={() => handleIncrement(item.id)}>+</Button>
          </HStack>
          <Text fontWeight="bold">${item.price * item.quantity}</Text>
        </HStack>
      ))}
      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg" textAlign="right">
        <Text fontSize="xl">Total: ${calculateTotal()}</Text>
      </Box>
    </VStack>
  );
}

export default Cart;
