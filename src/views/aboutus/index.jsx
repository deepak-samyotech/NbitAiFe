import React from 'react';
import {
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }} p={6} minHeight="100vh">
      <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
        <Text fontSize="2xl" mb={5} fontWeight="semibold">
          About NbitAI
        </Text>
        <Text mb={6}>
          UnityFund is more than just a financial platform — it’s a
          revolutionary approach to smart investing, built on the principles of
          transparency, community, and growth. We empower users around the world
          to make smarter financial decisions through a blend of technology,
          data-driven insights, and a vibrant reward-based reward system.
        </Text>
        <Text mb={6}>
          At UnityFund, we believe in giving back to our community. Our unique
          gamified structure allows users not only to invest and grow their
          portfolios but also to participate in leadership ranks, team-building,
          and bonus rewards that scale with engagement.
        </Text>
        <Text mb={6}>
          With a secure blockchain-backed infrastructure, lightning-fast
          transactions, and a user-first experience, UnityFund is designed for
          both beginner and expert investors alike. Whether you’re here to grow
          your wealth, expand your network, or explore the power of
          decentralized finance — UnityFund gives you the tools, support, and
          vision to thrive.
        </Text>
        <Text fontStyle="italic" mt={5}>
          Join the movement. Invest with Unity. Build with purpose.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutUs;
