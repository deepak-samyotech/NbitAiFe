import { Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
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
import SubscriptionCard from './components/subscriptioncard';

const Subscription = () => {
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  const plans = [
    {
      title: 'NBITAi Quantum AI',
      price: '₹3,095.00',
      badge: 'Popular',
      paymentStatus: 'No payment required',
      buttonText: 'Activate AI Trading',
      features: [
        'AI-powered trading bot with advanced neural network strategies',
        'Monthly profit potential: 2% to 10% (Based on AI simulations)',
        'No hidden fees - retain 100% of AI-managed profits',
        'Adaptive learning with real-time market analysis',
        'Supports Binance and NBITAi exchange integration',
        'AI-optimized strategies with historical performance data',
        'Seamless onboarding & AI-driven trade monitoring',
        'Upgrade or adjust AI models anytime'
      ],
      description: 'Harness the power of NBITAi Quantum AI - an intelligent trading bot designed for optimal crypto profits using cutting-edge AI algorithms.'
    },
    {
      title: 'NBITAi Starter AI',
      price: '₹1,500.00',
      badge: 'New',
      paymentStatus: 'Payment required',
      buttonText: 'Start AI Journey',
      features: [
        'Basic AI trading bot with machine learning strategies',
        'Monthly profit potential: 1% to 5% (Based on AI models)',
        'Transparent fee structure',
        'Supports Binance with NBITAi API',
        'Simple AI onboarding & basic trade tracking'
      ],
      description: 'Begin your AI trading experience with NBITAi Starter AI, tailored for new users with foundational machine learning capabilities.'
    },
    {
      title: 'NBITAi Elite AI',
      price: '₹5,000.00',
      badge: 'Elite',
      paymentStatus: 'No payment required',
      buttonText: 'Unlock Elite AI',
      features: [
        'Advanced AI trading bot with deep learning optimization',
        'Monthly profit potential: 5% to 15% (Based on AI forecasts)',
        'Full profit retention with AI risk management',
        'Multi-exchange support including NBITAi platform',
        'Real-time AI analytics and predictive trading'
      ],
      description: 'Elevate your trading with NBITAi Elite AI, featuring state-of-the-art deep learning for maximum crypto profitability.'
    }
  ];

  return (
    <>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <Box bg="white" mt={6} p={6} borderRadius="md">
          <Text fontSize="2xl" fontWeight="bold" mb={4} color="black" textAlign="center">
            Choose Plan Which Right For U
          </Text>
          <Text mb={6} color="black" textAlign="center">
            Select a plan that suits your trading needs and preferences for
            optimal AI-driven crypto trading performance.
          </Text>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="200px"
          >
            <SimpleGrid
              columns={{ base: 1, md: 1, lg: 1 }}
              spacing={6}
              justifyContent="center"
            >
              {plans.map((plan, index) => (
                <SubscriptionCard key={index} {...plan} />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Subscription;