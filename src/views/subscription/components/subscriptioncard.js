// import React from 'react';
// import {
//   Box,
//   Button,
//   Text,
//   List,
//   ListItem,
//   Stack,
//   Badge,
// } from '@chakra-ui/react';

// const SubscriptionCard = () => {
//   return (
//     <Box
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       p={4}
//       bg="white"
//       boxShadow="md"
//       maxW="800px"
//     >
//       <Stack spacing={3}>
//         <Box>
//           <Text fontSize="xl" fontWeight="bold">
//             Quantum Edge
//           </Text>
//           <Badge colorScheme="purple" mr={2}>
//             Popular
//           </Badge>
//           <Text fontSize="2xl" color="blue.600" fontWeight="bold">
//             ₹3,095.00 /month
//           </Text>
//           <Text fontSize="sm" color="gray.500">
//             No payment required
//           </Text>
//         </Box>
//         <Button colorScheme="blue" variant="solid">
//           Purchase Now
//         </Button>
//         <List spacing={2}>
//           <ListItem>
//             AI-powered trading bot with safe, non-leveraged strategies
//           </ListItem>
//           <ListItem>
//             Monthly profit potential: 2% to 10% (Based on historical data)
//           </ListItem>
//           <ListItem>
//             No hidden fees - you keep 100% of self-managed profits
//           </ListItem>
//           <ListItem>
//             Optional fully managed plan with advanced capital rotation
//             strategies
//           </ListItem>
//           <ListItem>Supports Binance (and more exchanges soon)</ListItem>
//           <ListItem>Tested strategies with real-user performance data</ListItem>
//           <ListItem>Simple on-boarding & monitor trades and returns</ListItem>
//           <ListItem>Cancel or upgrade anytime</ListItem>
//         </List>
//         <Text fontSize="sm" color="gray.600">
//           Unlock intelligent trading with MicroGain AI - an automated trading
//           bot designed for consistent monthly profits. Suitable for
//           self-directed and fully managed crypto trading strategies. Choose your
//           plan based on autonomy and performance preference.
//         </Text>
//       </Stack>
//     </Box>
//   );
// };

// export default SubscriptionCard;

import React from 'react';
import {
  Box,
  Button,
  Text,
  List,
  ListItem,
  Stack,
  Badge,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

const SubscriptionCard = ({
  title,
  price,
  badge,
  paymentStatus,
  buttonText,
  features,
  description,
}) => {
  return (
    // <Box
    //   borderWidth="1px"
    //   borderRadius="lg"
    //   overflow="hidden"
    //   p={4}
    //   bg="white"
    //   boxShadow="md"
    //   maxW="800px"
    // >
    //   <Stack spacing={3}>
    //     <Box>
    //       <Text fontSize="xl" fontWeight="bold">
    //         {title}
    //       </Text>
    //       <Badge colorScheme="purple" mr={2} justifyContent="flex-end">
    //         {badge}
    //       </Badge>
    //       <Text fontSize="2xl" color="blue.600" fontWeight="bold">
    //         {price} /month
    //       </Text>
    //       <Text fontSize="sm" color="gray.500">
    //         {paymentStatus}
    //       </Text>
    //     </Box>
    //     <Button colorScheme="blue" variant="solid">
    //       {buttonText}
    //     </Button>
    //     <List spacing={2}>
    //       {features.map((feature, index) => (
    //         <ListItem key={index}>{feature}</ListItem>
    //       ))}
    //     </List>
    //     <Text fontSize="sm" color="gray.600">
    //       {description}
    //     </Text>
    //   </Stack>
    // </Box>

    <Box
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg="white"
      boxShadow="md"
      maxW="800px"
      colorScheme="purple"
      borderStyle="solid"
      borderWidth="1.5px"
      borderColor="purple.600"
    >
      <Stack spacing={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Badge colorScheme="purple" mr={2}>
            {badge}
          </Badge>
        </Box>
        <Text fontSize="2xl" color="blue.600" fontWeight="bold">
          {price} /month
        </Text>
        <Text fontSize="sm" color="gray.500">
          {paymentStatus}
        </Text>
        <Button colorScheme="blue" variant="solid">
          {buttonText}
        </Button>
        <UnorderedList spacing={2} p={2}>
          {features.map((feature, index) => (
            <ListItem key={index}>{feature}</ListItem>
          ))}
        </UnorderedList>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
      </Stack>
    </Box>
  );
};

export default SubscriptionCard;
