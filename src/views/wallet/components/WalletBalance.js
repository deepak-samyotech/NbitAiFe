import {
  Box,
  Text,
  Icon,
  HStack,
  Button,
  useColorModeValue,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import Card from 'components/card/Card';
import DepositModal from './DepositForm';
import WithdrawModal from './WithdrawForm';
import TransferModal from './TransferForm';

const WalletBalance = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  const gradient = 'linear(to-r, #c193efff, #445fe6ff)';

  // Separate useDisclosure hooks for each modal
  const {
    isOpen: isDepositOpen,
    onOpen: onDepositOpen,
    onClose: onDepositClose,
  } = useDisclosure();
  const {
    isOpen: isWithdrawOpen,
    onOpen: onWithdrawOpen,
    onClose: onWithdrawClose,
  } = useDisclosure();
  const {
    isOpen: isTransferOpen,
    onOpen: onTransferOpen,
    onClose: onTransferClose,
  } = useDisclosure();

  return (
    <Card pt={{ base: '130px', xl: '80px' }}>
      <Stack spacing={2} mb={4}>
        <Text fontSize="md" fontWeight="500" color={textColor}>
          Wallet Balance <Icon as={ViewIcon} boxSize={4} color="gray.400" />
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="blue.500">
          USDT 40.00
        </Text>
        <Text fontSize="sm" color="gray.400">
          ≈ USDT 40.00
        </Text>
      </Stack>

      <HStack spacing="4">
        {/* <Button backgroundColor="#445fe6ff" color="white">
          Deposit
        </Button> */}
        <Button
          backgroundColor="#445fe6ff"
          color="white"
          onClick={onDepositOpen}
        >
          Deposit
        </Button>
        <Button
          // bgGradient={gradient}
          backgroundColor="#445fe6ff"
          color="white"
          onClick={onWithdrawOpen}
        >
          Withdraw
        </Button>
        <Button
          // bgGradient={gradient}
          backgroundColor="#445fe6ff"
          color="white"
          onClick={onTransferOpen}
        >
          Transfer
        </Button>
      </HStack>
      {/* Render the Modals with separate states */}
      <DepositModal isOpen={isDepositOpen} onClose={onDepositClose} />
      <WithdrawModal isOpen={isWithdrawOpen} onClose={onWithdrawClose} />
      <TransferModal isOpen={isTransferOpen} onClose={onTransferClose} />
    </Card>
  );
};

export default WalletBalance;
