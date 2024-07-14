import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

const bookGenres = [
  // Add your book genres array here
];

function AddBookModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isemNumber, setIsemNumber] = useState('');
  const [genre, setGenre] = useState('');
  const [stock, setStock] = useState('');
  const [pricePerMonth, setPricePerMonth] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({ isemNumber, genre, stock, pricePerMonth });
    onClose(); // Close the modal after form submission
  };

  return (
    <>
      <Button onClick={onOpen}>Add Book</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>ISEM Number</FormLabel>
              <Input 
                value={isemNumber} 
                onChange={(e) => setIsemNumber(e.target.value)} 
                placeholder="Enter ISEM number" 
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Genre</FormLabel>
              <Select 
                value={genre} 
                onChange={(e) => setGenre(e.target.value)} 
                placeholder="Select genre"
              >
                {bookGenres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Stock</FormLabel>
              <Input 
                type="number" 
                value={stock} 
                onChange={(e) => setStock(e.target.value)} 
                placeholder="Enter stock quantity" 
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price Per Month</FormLabel>
              <Input 
                type="number" 
                value={pricePerMonth} 
                onChange={(e) => setPricePerMonth(e.target.value)} 
                placeholder="Enter price per month" 
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddBookModal;
