import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Text,
  Card,
  Menu,
  Flex,
} from '@chakra-ui/react';
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
import { AiFillDollarCircle, AiFillFund, AiFillProfile } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';

import {
  columnsDataCheck,
  columnsDataComplex,
} from 'views/admin/default/variables/columnsData';

import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json';
import InvestmentCard from './components/InvestmentCard';
import { whiten } from '@chakra-ui/theme-tools';
import InvestmentTable from './components/InvestmentTable';

const Portfolio = () => {
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  // Sample data for three investment cards
  const investmentData = [
    {
      id: 'INV-250602-9KBJ-U560',
      investment: '$100',
      roi: '$80.79',
      earnings: '300.00/300.00',
      months: '30/30',
      date: '6/2/2025',
      progress: 50,
    },
    {
      id: 'INV-250603-7HKL-P890',
      investment: '$200',
      roi: '$150.50',
      earnings: '450.00/450.00',
      months: '24/24',
      date: '6/3/2025',
      progress: 75,
    },
    {
      id: 'INV-250604-5MNP-Q123',
      investment: '$150',
      roi: '$120.25',
      earnings: '360.00/360.00',
      months: '36/36',
      date: '6/4/2025',
      progress: 95,
    },
  ];
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
                  <Icon
                    w="32px"
                    h="32px"
                    as={AiFillDollarCircle}
                    color={brandColor}
                  />
                }
              />
            }
            name="Total Investment"
            value="$908.4"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={AiFillFund} color={brandColor} />
                }
              />
            }
            name="Total Trade Income"
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
                    as={AiFillProfile}
                    color={brandColor}
                  />
                }
              />
            }
            name="Total Ref. Trade Inc."
            value="$335.20"
          />
        </SimpleGrid>

        {/* <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
          gap="20px"
          mb="20px"
          bg="white"
          p={4}
        >
          {investmentData.map((data, index) => (
            <InvestmentCard
              key={index}
              id={data.id}
              investment={data.investment}
              roi={data.roi}
              earnings={data.earnings}
              months={data.months}
              date={data.date}
              progress={data.progress}
            />
          ))}
        </SimpleGrid> */}

        <Card
          flexDirection="column"
          w="100%"
          overflowX="auto"
          px="0px"
          py="10px"
          mb="20px"
        >
          <Flex px="10px" justifyContent="space-between" align="center">
            <Text fontSize="22px" fontWeight="700">
              Investments
            </Text>
            <Menu />
          </Flex>
          <Flex>
            {investmentData.map((data, index) => (
              <InvestmentCard
                key={index}
                id={data.id}
                investment={data.investment}
                roi={data.roi}
                earnings={data.earnings}
                months={data.months}
                date={data.date}
                progress={data.progress}
              />
            ))}
          </Flex>
        </Card>

        <SimpleGrid>
          <InvestmentTable />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Portfolio;
