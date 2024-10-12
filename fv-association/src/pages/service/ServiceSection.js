import React from "react";
import { Box, Flex, Heading, Text, Image, VStack } from "@chakra-ui/react";
import teamMember1 from "../../assets/teamMember-01.jpg";
import teamMember2 from "../../assets/teamMember-02.jpg";
import teamMember3 from "../../assets/teamMember-03.jpg";

const ServiceSectionData = [
  {
    id: 1,
    title: "Market Intelligence & Reports",
    description:
      "Our expert team provides detailed property valuations and market analysis to help you accurately price your property and understand the local real estate market.",
    image: teamMember1,
  },
  {
    id: 2,
    title: "Logistics and Distribution Assistance",
    description:
      "Wholesalers optimize their supply chain by providing access to affordable cold storage, warehousing, and transportation solutions, ensuring timely delivery of fresh produce while minimizing spoilage and losses.",
    image: teamMember2,
  },
  {
    id: 3,
    title: "Advocacy and Policy Representation",
    description:
      "Advocacy and Policy Representation communicates the interests of wholesalers to policymakers, influencing legislation on taxes and regulations.",
    image: teamMember3,
  },
];

const ServiceSection = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      wrap="wrap"
      mb="4rem"
      boxShadow={"md"}
    >
      {ServiceSectionData.map((service, index) => (
        <Box
          key={service.id}
          maxW={{ base: "100%", md: "30%" }}
          mb={{ base: "2rem", md: "0" }}
          p="1rem"
          borderRight={index < ServiceSectionData.length - 1 ? "2px solid" : "none"}
          borderColor="gray.300"
          pr={index < ServiceSectionData.length - 1 ? "1rem" : "0"}
        >
          <VStack spacing={4}>
            <Image
              src={service.image}
              alt={service.title}
              boxSize="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Heading as="h3" size="lg" textAlign="center">
              {service.title}
            </Heading>
            <Text textAlign="center">{service.description}</Text>
          </VStack>
        </Box>
      ))}
    </Flex>
  );
};

export default ServiceSection;
