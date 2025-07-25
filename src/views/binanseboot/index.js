import { ChakraProvider, Box, Text, Button, Flex, Input, IconButton, Tabs, TabList, TabPanels, TabPanel, Tab } from "@chakra-ui/react";

const BinanceBoot = () => {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Box p={5} maxW="800px" mx="auto" bg="gray.100" minH="100vh">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Configure Your Microgain Bot</Text>
        <Text mb={6}>Set up your bot with the necessary credentials to start automated trading</Text>
        <Flex mb={4} justifyContent="space-between">
          <Button leftIcon={<span>📋</span>} colorScheme="teal" variant="outline">Telegram</Button>
          <Button leftIcon={<span>💰</span>} colorScheme="teal" variant="outline">Binance</Button>
          <Button leftIcon={<span>🔑</span>} colorScheme="teal" variant="outline">Bot Access</Button>
          <Button leftIcon={<span>🌐</span>} colorScheme="teal" variant="outline">IP Whitelist</Button>
          <Button leftIcon={<span>🌐</span>} colorScheme="teal" variant="outline">Subdomain</Button>
          <Button leftIcon={<span>🚀</span>} colorScheme="teal" variant="outline">Deploy & Start Bot</Button>
        </Flex>
        <Tabs>
          <TabList mb="1em">
            <Tab>Telegram Configuration</Tab>
            <Tab>Binance Configuration</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box bg="gray.700" color="white" p={4} borderRadius="md">
                <Text mb={2}>Telegram Configuration</Text>
                <Text fontSize="sm" color="gray.300">Optionally enable Telegram notifications for your Microgain bot</Text>
                <Flex mt={2} alignItems="center">
                  <Input placeholder="Telegram Bot Token" value="123456789:ABCDEfghIJKLMnoPQRSTUvwxyz" isReadOnly mb={2} />
                  <IconButton aria-label="Verify Telegram" icon={<span>✅</span>} ml={2} colorScheme="green" />
                </Flex>
                <Input placeholder="Telegram Chat ID" value="-1001234567890" isReadOnly mb={2} />
                <Button colorScheme="purple" variant="outline">Get your Chat ID from @BotFather</Button>
                <Button mt={2} colorScheme="green">Verify Telegram</Button>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box bg="gray.700" color="white" p={4} borderRadius="md">
                <Text mb={2}>Binance Configuration</Text>
                <Text fontSize="sm" color="gray.300">Configure your Binance API credentials here.</Text>
                <Input placeholder="API Key" mt={4} mb={2} />
                <Input placeholder="API Secret" mb={2} />
                <Button colorScheme="teal" mt={2}>Verify Binance</Button>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default BinanceBoot;