import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

const SettingsPanel = () => (
  <Box pt={{ base: '130px', md: '80px', xl: '80px' }} p={6} minHeight="100vh">
    <Box
      maxW="full"
      mx="auto"
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p={6}
    >
      <Text fontSize="2xl" mb={5} fontWeight="semibold">
        Settings
      </Text>
      <Tabs isFitted variant="soft-rounded" colorScheme="purple">
        <TabList mb={4} gap={2} flexWrap="wrap">
          <Tab
            _selected={{ bg: '#445fe6ff', color: 'white' }}
            bg="gray.200"
            borderRadius="md"
            py={2}
            px={4}
            fontWeight="medium"
          >
            2FA
          </Tab>
          <Tab
            _selected={{ bg: '#445fe6ff', color: 'white' }}
            bg="gray.200"
            borderRadius="md"
            py={2}
            px={4}
            fontWeight="medium"
          >
            Language
          </Tab>
          <Tab
            _selected={{ bg: '#445fe6ff', color: 'white' }}
            bg="gray.200"
            borderRadius="md"
            py={2}
            px={4}
            fontWeight="medium"
          >
            Privacy Policy
          </Tab>
          <Tab
            _selected={{ bg: '#445fe6ff', color: 'white' }}
            bg="gray.200"
            borderRadius="md"
            py={2}
            px={4}
            fontWeight="medium"
          >
            About App
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box p={5} bg="white" borderRadius="md" boxShadow="sm">
              <Text color="gray.600">
                2FA content goes here. Configure two-factor authentication to
                secure your account with an additional layer of protection.
              </Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={5} bg="white" borderRadius="md" boxShadow="sm">
              <Text mb={4} color="gray.600">
                Select your preferred language
              </Text>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<span>▼</span>}
                  w="full"
                  maxW="200px"
                  colorScheme="purple"
                  variant="outline"
                >
                  English
                </MenuButton>
                <MenuList>
                  <MenuItem>English</MenuItem>
                  <MenuItem>Spanish</MenuItem>
                  <MenuItem>French</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={5} bg="white" borderRadius="md" boxShadow="sm">
              <Text color="gray.600">
                We are committed to protecting your data and privacy. Your
                information is encrypted and never shared with third parties
                without your consent.
              </Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={5} bg="white" borderRadius="md" boxShadow="sm">
              <Text color="gray.600">
                UnityFund is an intelligent platform that helps you grow with
                smart insights, gamified rewards, and community power.
              </Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Box>
);

export default SettingsPanel;
