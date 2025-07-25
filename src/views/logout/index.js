import React, { useState } from 'react';
import {
  ChakraProvider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
} from '@chakra-ui/react';

const LogoutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear session, redirect)
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm Logout</ModalHeader>
        <ModalBody>
          <Text>Are you sure you want to logout?</Text>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={handleClose} mr={3}>
            Cancel
          </Button>
          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LogoutModal;
