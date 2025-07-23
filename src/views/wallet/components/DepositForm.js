import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Checkbox,
  Text,
  Box,
  Image,
  CloseButton,
} from '@chakra-ui/react';
import qrcode from '../../../assets/img/Qrcode.png';

const DepositModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent
        borderWidth="2px"
        borderColor="purple.600"
        borderRadius="md"
      >
        <ModalHeader display="flex" justifyContent="center" position="relative">
          Deposit Funds
          <CloseButton
            position="absolute"
            right="3"
            top="3"
            onClick={onClose}
          />
        </ModalHeader>
        <ModalBody>
          <Box display="flex" justifyContent="center" mb={4}>
            <Image src={qrcode} alt="QR Code" boxSize="128px" />
          </Box>
          <Box mb={4}>
            <Text fontSize="sm" fontWeight="medium" mb={2}>
              Wallet Address:
            </Text>
            <Input value="0xbcEdEB21A...dE7821Ae" isReadOnly mb={2} />
            <Text fontSize="sm" color="gray.500">
              Send only BSC-compatible USDT to this address.
            </Text>
          </Box>
          <Checkbox>I agree to the Terms & Conditions</Checkbox>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="center">
          <Button
            colorScheme="red"
            onClick={onClose}
            width="60"
            borderRadius="md"
          >
            I've Deposited
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DepositModal;
