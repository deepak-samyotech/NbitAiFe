import React from 'react';
import { Box, Text, Button, CircularProgress, Flex } from '@chakra-ui/react';

const InvestmentCard = ({
  id,
  investment,
  roi,
  earnings,
  months,
  date,
  progress,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      m={4}
      w="300px"
      boxShadow="md"
      bg="white"
    >
      <Flex justifyContent="space-between" mb={4}>
        <Text fontSize="sm" color="gray.600">
          ID: {id || 'INV-250602-9KBJ-U560'}
        </Text>
        <Button
          size="xs"
          bg="red.100"
          borderColor="red.500"
          color="red.500"
          borderRadius="full"
          px={1.5}
          py={1}
          variant="outline"
        >
          <Text fontSize="xs" fontWeight="semibold">
            Inactive
          </Text>
        </Button>
      </Flex>
      <Box textAlign="center">
        <Text fontSize="sm" fontWeight="semibold" mt={4}>
          INVESTMENT: $ {investment || '100'}
        </Text>
        <Box position="relative" w="120px" h="120px" mx="auto">
          <CircularProgress
            value={progress}
            color="green.400"
            size="120px"
            thickness="10px"
            capIsRound
            trackColor="gray.200"
          />
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
          >
            {progress}%
          </Text>
        </Box>

        <Text fontSize="md" color="green.600" m={2} mb={5}>
          Monthly ROI: $ {roi || '80.79'}
        </Text>

        <Text fontSize="sm">Earnings: {earnings || '300.00./300.00'}</Text>
        <Text fontSize="sm">Months: {months || '30/30'}</Text>
        <Text fontSize="sm">Date: {date || '6/2/2025'} </Text>
        <Button
          mt={4}
          px={6}
          size="xs"
          backgroundColor="#445fe6ff"
          color="white"
          _hover="none"
        >
          View Transactions
        </Button>
      </Box>
    </Box>
  );
};

export default InvestmentCard;
