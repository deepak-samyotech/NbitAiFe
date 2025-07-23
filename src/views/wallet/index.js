import {
  Box,
  Text,
  Icon,
  HStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import Card from 'components/card/Card';
import WalletTable from './components/WalletTable';
import WalletBalance from './components/WalletBalance';

const Wallet = () => {
  return (
    <Box mt="80px">
      <WalletBalance />
      <WalletTable />
    </Box>
  );
};

export default Wallet;
