import { Box, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdTeamLine,
} from 'react-icons/md';
import {
  RiTeamLine,
  RiMoneyDollarCircleLine,
  RiBitCoinLine,
} from 'react-icons/ri';
import { AiOutlineTeam, AiOutlineDollarCircle } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';

import {
  columnsDataCheck,
  columnsDataComplex,
} from 'views/admin/default/variables/columnsData';

import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json';
import PaymentTable from './components/PaymentTable';

const Payment = () => {
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  return (
    <>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <PaymentTable />
      </Box>
    </>
  );
};

export default Payment;
