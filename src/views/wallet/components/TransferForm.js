import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const TransferModal = ({ isOpen, onClose }) => {
  const [user, setUser] = useState('');
  const [amount, setAmount] = useState(0);
  const maxAmount = 40.0;
  const handleMaxClick = () => {
    setAmount(maxAmount);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        borderWidth="2px"
        borderColor="purple.600"
        borderRadius="md"
      >
        <ModalHeader display="flex" justifyContent="center" position="relative" p={6}>
          Transfer (USDT-BSC)
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={2}>Search UnityFund User</Text>
          <InputGroup mb={4}>
            <Input
              placeholder="Search by username or email"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <InputRightElement>
              <SearchIcon color="gray.500" />
            </InputRightElement>
          </InputGroup>

          <div>
            <Text mb={2}>Amount (USDT)</Text>
            <Stack direction="row" spacing={2} align="center">
              <InputGroup>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) =>
                    setAmount(Math.min(e.target.value, maxAmount))
                  }
                  max={maxAmount}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    colorScheme="purple"
                    onClick={handleMaxClick}
                  >
                    Max
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Max. Amount: {maxAmount}
            </Text>
          </div>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="center">
          <Button
            colorScheme="red"
            width="60"
            borderRadius="md"
            onClick={() => console.log('Continue clicked')}
          >
            Continue
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TransferModal;
