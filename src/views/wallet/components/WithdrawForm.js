import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const WithdrawModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const availableBalance = 40.0;
  const withdrawalFee = 10;
  const minAmount = 100;

  const handleMaxClick = () => {
    setAmount(availableBalance);
  };

  const calculateReceiveAmount = () => {
    const amountNum = parseFloat(amount) || 0;
    const receive =
      amountNum - withdrawalFee > 0 ? amountNum - withdrawalFee : 0;
    return receive.toFixed(2);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent
        borderWidth="2px"
        borderColor="purple.600"
        borderRadius="md"
      >
        <ModalHeader display="flex" justifyContent="center" position="relative">
          Withdraw Funds
        </ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <div>
              <Text fontSize="sm" fontWeight="medium" mb={2}>
                Wallet Address:
              </Text>
              <Input
                value="0xbcBEdEb21aE771d0A73F8E2e440d"
                isReadOnly
                bg="gray.100"
              />
            </div>

            <div>
              <Text fontSize="sm" fontWeight="medium" mb={2}>
                Amount (Min ${minAmount}):
              </Text>
              <Stack direction="row" spacing={2} align="center">
                <InputGroup>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min={minAmount}
                    placeholder="Enter amount"
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
                Available: {availableBalance} USDT
              </Text>
            </div>
            <Text fontSize="sm" color="green.500" mt={2}>
              You will receive ~USDT 0.00
            </Text>

            <Text fontSize="sm" color="gray.500">
              Note: ${withdrawalFee} withdrawal fees will be charged
            </Text>
          </Stack>
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

export default WithdrawModal;
