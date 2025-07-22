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
import UserTable from './components/UserTable';

import {
  columnsDataCheck,
  columnsDataComplex,
} from 'views/admin/default/variables/columnsData';

import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json';

const Dashboard = () => {
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  return (
    <>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
          gap="20px"
          mb="20px"
        >
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={RiTeamLine} color={brandColor} />
                }
              />
            }
            name="Team Size"
            value="29"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={AiOutlineTeam}
                    color={brandColor}
                  />
                }
              />
            }
            name="Direct Referrals"
            value="20"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={AiOutlineDollarCircle}
                    color={brandColor}
                  />
                }
              />
            }
            name="Total Team Invst."
            value="$1000.75"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={RiMoneyDollarCircleLine}
                    color={brandColor}
                  />
                }
              />
            }
            name="Your balance"
            value="$1,000"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={RiBitCoinLine}
                    color={brandColor}
                  />
                }
              />
            }
            name="Trade Inc."
            value="$302.90"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={GiReceiveMoney}
                    color={brandColor}
                  />
                }
              />
            }
            name="Referral Trade Inc."
            value="$335.20"
          />
        </SimpleGrid>
        <UserTable />
      </Box>
    </>
  );
};

export default Dashboard;
