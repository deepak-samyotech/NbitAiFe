// /* eslint-disable */
// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// // chakra imports
// import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";

// export function SidebarLinks(props) {
//   //   Chakra color mode
//   let location = useLocation();
//   let activeColor = useColorModeValue("gray.700", "white");
//   let inactiveColor = useColorModeValue(
//     "secondaryGray.600",
//     "secondaryGray.600"
//   );
//   let activeIcon = useColorModeValue("brand.500", "white");
//   let textColor = useColorModeValue("secondaryGray.500", "white");
//   let brandColor = useColorModeValue("brand.500", "brand.400");

//   const { routes } = props;

//   // verifies if routeName is the one active (in browser input)
//   const activeRoute = (routeName) => {
//     return location.pathname.includes(routeName);
//   };

//   // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
//   const createLinks = (routes) => {
//     return routes.map((route, index) => {
//       if (route.category) {
//         return (
//           <>
//             <Text
//               fontSize={"md"}
//               color={activeColor}
//               fontWeight='bold'
//               mx='auto'
//               ps={{
//                 sm: "10px",
//                 xl: "16px",
//               }}
//               pt='18px'
//               pb='12px'
//               key={index}>
//               {route.name}
//             </Text>
//             {createLinks(route.items)}
//           </>
//         );
//       } else if (
//         route.layout === "/admin" ||
//         route.layout === "/auth" ||
//         route.layout === "/rtl"
//       ) {
//         return (
//           <NavLink key={index} to={route.layout + route.path}>
//             {route.icon ? (
//               <Box>
//                 <HStack
//                   spacing={
//                     activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
//                   }
//                   py='5px'
//                   ps='10px'>
//                   <Flex w='100%' alignItems='center' justifyContent='center'>
//                     <Box
//                       color={
//                         activeRoute(route.path.toLowerCase())
//                           ? activeIcon
//                           : textColor
//                       }
//                       me='18px'>
//                       {route.icon}
//                     </Box>
//                     <Text
//                       me='auto'
//                       color={
//                         activeRoute(route.path.toLowerCase())
//                           ? activeColor
//                           : textColor
//                       }
//                       fontWeight={
//                         activeRoute(route.path.toLowerCase())
//                           ? "bold"
//                           : "normal"
//                       }>
//                       {route.name}
//                     </Text>
//                   </Flex>
//                   <Box
//                     h='36px'
//                     w='4px'
//                     bg={
//                       activeRoute(route.path.toLowerCase())
//                         ? brandColor
//                         : "transparent"
//                     }
//                     borderRadius='5px'
//                   />
//                 </HStack>
//               </Box>
//             ) : (
//               <Box>
//                 <HStack
//                   spacing={
//                     activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
//                   }
//                   py='5px'
//                   ps='10px'>
//                   <Text
//                     me='auto'
//                     color={
//                       activeRoute(route.path.toLowerCase())
//                         ? activeColor
//                         : inactiveColor
//                     }
//                     fontWeight={
//                       activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
//                     }>
//                     {route.name}
//                   </Text>
//                   <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
//                 </HStack>
//               </Box>
//             )}
//           </NavLink>
//         );
//       }
//     });
//   };
//   //  BRAND
//   return createLinks(routes);
// }

// export default SidebarLinks;


import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Text,
  Collapse,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
 
export function SidebarLinks(props) {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
 
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue("secondaryGray.600", "secondaryGray.600");
  const activeIcon = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("secondaryGray.500", "white");
  const brandColor = useColorModeValue("brand.500", "brand.400");
 
  const { routes } = props;
 
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
 
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      const isActive = activeRoute(route.path?.toLowerCase() || "");
      const isOpen = openIndex === index;
      const hasSubNav = route.subNav && route.subNav.length > 0;
 
      if (route.category) {
        return (
          <React.Fragment key={index}>
            <Text
              fontSize="md"
              color={activeColor}
              fontWeight="bold"
              mx="auto"
              ps={{ sm: "10px", xl: "16px" }}
              pt="18px"
              pb="12px"
            >
              {route.name}
            </Text>
            {createLinks(route.items)}
          </React.Fragment>
        );
      } else if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        if (hasSubNav) {
          return (
            <Box key={index}>
              <Flex
                align="center"
                py="5px"
                ps="10px"
                pe="10px"
                cursor="pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <Box color={isActive ? activeIcon : textColor} me="18px">
                  {route.icon}
                </Box>
                <Text
                  color={isActive ? activeColor : textColor}
                  fontWeight={isActive ? "bold" : "normal"}
                  flex="1"
                >
                  {route.name}
                </Text>
                <IconButton
                  icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  size="lg"
                  variant="ghost"
                  aria-label="Toggle submenu"
                />
              </Flex>
 
              <Collapse in={isOpen} animateOpacity>
                {route.subNav.map((sub, subIndex) => {
                  const subActive = activeRoute(sub.path.toLowerCase());
                  return (
                    <NavLink key={subIndex} to={route.layout + sub.path}>
                      <HStack
                        spacing="20px"
                        py="4px"
                        ps="30px"
                        pe="10px"
                        align="center"
                        justify="space-between"
                      >
                        <Flex align="center">
                          <Box color={subActive ? activeIcon : textColor} me="18px">
                            {sub.icon}
                          </Box>
                          <Text
                            color={subActive ? activeColor : textColor}
                            fontWeight={subActive ? "bold" : "normal"}
                          >
                            {sub.name}
                          </Text>
                        </Flex>
                        <Box
                          h="36px"
                          w="4px"
                          bg={subActive ? brandColor : "transparent"}
                          borderRadius="5px"
                        />
                      </HStack>
                    </NavLink>
                  );
                })}
              </Collapse>
            </Box>
          );
        }
 
        return (
          <NavLink key={index} to={route.layout + route.path}>
            <Box>
              <HStack
                spacing={isActive ? "22px" : "26px"}
                py="5px"
                ps="10px"
              >
                <Flex w="100%" alignItems="center" justifyContent="center">
                  <Box color={isActive ? activeIcon : textColor} me="18px">
                    {route.icon}
                  </Box>
                  <Text
                    me="auto"
                    color={isActive ? activeColor : textColor}
                    fontWeight={isActive ? "bold" : "normal"}
                  >
                    {route.name}
                  </Text>
                </Flex>
                <Box
                  h="36px"
                  w="4px"
                  bg={isActive ? brandColor : "transparent"}
                  borderRadius="5px"
                />
              </HStack>
            </Box>
          </NavLink>
        );
      }
 
      return null;
    });
  };
 
  return createLinks(routes);
}
 
export default SidebarLinks;
