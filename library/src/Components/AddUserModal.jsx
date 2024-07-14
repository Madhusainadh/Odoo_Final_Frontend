import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function AddUserModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
    password: "",
  });

  console.log(API_BASE_URL);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Details:", user);
    const response = await axios
      .post(`http://localhost:5000/api/v1/user`, user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    toast({
      title: "User added.",
      description: "The user has been added successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    onClose(); // Close the modal after submitting
    setUser({ name: "", email: "", number: "", role: "", password: "" }); // Reset form fields
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Add User
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={user.name}
                  placeholder="Name"
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={user.email}
                  placeholder="Email"
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel htmlFor="number">Phone Number</FormLabel>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  onChange={handleChange}
                  value={user.phoneNumber}
                  placeholder="Phone Number"
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel htmlFor="role">Role</FormLabel>
                <Select
                  id="role"
                  name="role"
                  onChange={handleChange}
                  value={user.role}
                  placeholder="Select role"
                >
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                </Select>
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={user.password}
                  placeholder="Password"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="teal" type="submit">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddUserModal;
