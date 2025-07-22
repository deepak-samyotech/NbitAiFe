import React from "react";

// Chakra imports
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import NbitLogo from "assets/img/logo/nbitAI-logo.png"

export function SidebarBrand() {

  return (
    <Flex align='center' direction='column'>
      <Image src={NbitLogo} alt="Nbit Logo" h="30px" w="175px" mb="20px" />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
