import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Button,
  Text,
  Heading,
} from '@chakra-ui/react';

const HelpSupportForm = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }} p={6} minHeight="100vh">
      <Box p={5} borderWidth="1px" borderRadius={8} boxShadow="lg" bg="white">
        <Text fontSize="2xl" mb={5} fontWeight="semibold">
          Help & Support
        </Text>
        <FormControl mb={4}>
          <FormLabel>Subject</FormLabel>
          <Select placeholder="-- Select an issue --">
            <option value="issue1">Issue 1</option>
            <option value="issue2">Issue 2</option>
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Describe your issue in detail..." />
        </FormControl>
        <Text mb={4}>
          Note: You can also request for support on our telegram channel:
          @NbitAI
        </Text>
        <Button
          backgroundColor="#445fe6ff"
          color="white"
          size="sm"
          borderRadius="md"
        >
          Submit Request
        </Button>
      </Box>
    </Box>
  );
};

export default HelpSupportForm;
