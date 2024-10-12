import React from 'react';
import "../../comman/styles/commanStyles.css"
import { Box, Image, VStack, Text, Heading, Flex, Grid, Stack, useBreakpointValue } from "@chakra-ui/react";
import associationTeam from "../../assets/associationTeam.jpg"

function AboutSection() {
    const isSmallScreen = useBreakpointValue({ base: true, lg: false });

    return ( 
        <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        pt={{ base: "2rem", lg: "5rem" }}
        px={{ base: "3rem", md: "10rem", lg: "10rem" }}
        mb={{ base: "1rem", lg: "8rem" }}
      >
        {/* Text Section */}
        <Box
          maxW="500px"
          textAlign="left"
          flex="1"
          mt={{ base: isSmallScreen ? "0" : "7rem", md: "0rem", lg: "0rem" }}
          ml={{ base: "0", md: "0rem", lg: "0rem" }}
          mr={{ base: "0", md: "7rem", lg: "0rem" }}
        >
          <Text color="grey" fontWeight="500">
            ABOUT US
          </Text>
  
          <Heading
            as="h2"
            size="lg"
            mb={{ base: "1rem", md: "2rem" }}
            fontSize={{ base: "2rem", lg: "2.5rem" }}
          >
            The Major Voice Of Fruit-Vegetable Wholesalers
          </Heading>
  
          {/* Show Image Right After Heading for Small Screens */}
          {isSmallScreen && (
            <VStack spacing={2} mb={{ base: "2rem", lg: "0" }}>
              <Image
                boxShadow={"md"}
                marginRight={{ base: "0rem", md: "12rem" }}
                marginLeft={{ base: "0rem", lg: "10rem" }}
                mt={{ base: "1rem", lg: "0rem" }}
                borderRadius={"15px"}
                width={{ base: "auto", lg: "auto" }}
                height={{ base: "auto", lg: "auto" }}
                src={associationTeam}
                alt={"associationTeam"}
              />
            </VStack>
          )}
  
          {/* Text Content */}
          <Text mb={"1rem"}>
            Fruit-Vegetable Wholesalers Association (FVWA) is a professional organization dedicated to representing the interests of fruit and vegetable wholesalers across India. The association serves as a unified voice for the industry, promoting sustainable practices, advocating for fair trade policies, and supporting members in navigating market trends, regulations, and logistics.
          </Text>
  
          <Text>
            FVWA provides resources, networking opportunities, and up-to-date information on market prices, government regulations, and industry advancements. It also helps members collaborate with suppliers, retailers, and regulatory bodies to ensure a thriving wholesale market. With a focus on quality, transparency, and innovation, FVWA aims to strengthen India's fruit and vegetable supply chain.
          </Text>
        </Box>
  
        {/* Image Section for Larger Screens */}
        {!isSmallScreen && (
          <Box mb={{ base: "2rem", lg: "0" }} maxW="500px" flex="1">
            <VStack spacing={2}>
              <Image
                boxShadow={"md"}
                marginRight={{ base: "0rem", md: "12rem" }}
                marginLeft={{ base: "-2rem", lg: "10rem" }}
                mt={{ base: "10rem", lg: "0rem" }}
                borderRadius={"15px"}
                width={{ base: "auto", lg: "auto" }}
                height={{ base: "auto", lg: "auto" }}
                src={associationTeam}
                alt={"associationTeam"}
              />
            </VStack>
          </Box>
        )}
      </Flex>
  
     );
}

export default AboutSection;