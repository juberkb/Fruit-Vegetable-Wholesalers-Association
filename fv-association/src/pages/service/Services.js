import React from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Image,

} from "@chakra-ui/react";
import ServiceSection from "./ServiceSection";

const servicesData = [
 {
    id: 4,
    title: "Marketing and Sales Support",
    description: "Lorem ipsum dolor sit amet",
    image: "/images/education.png",
  },
  {
    id: 5,
    title: "Training and Capacity Building",
    description: "Lorem ipsum dolor sit amet",
    image: "/images/transportation.png",
  },
  {
    id: 6,
    title: "Financial Services and Insurance",
    description: "Lorem ipsum dolor sit amet",
    image: "/images/traffic.png",
  },
  {
    id: 7,
    title: "Digital and E-commerce Solutions",
    description: "Lorem ipsum dolor sit amet",
    image: "/images/traffic.png",
  },
  {
    id: 8,
    title: "Sustainability and Waste Management",
    description: "Lorem ipsum dolor sit amet",
    image: "/images/traffic.png",
  },
  {
    id: 9,
    title: "Dispute Resolution and Legal Support",
    description: "Lorem ipsum dolor sit amet",
    image: "/images/traffic.png",
  },
  {
    id: 10,
    title: "Networking and Collaboration Opportunities",
    description: "Lorem ipsum dolor sit amet",
    image: "/images/traffic.png",
  },
];

const Services = () => {
  const topServices = servicesData.filter((service) => service.topService);
  const otherServices = servicesData.filter((service) => !service.topService);

  return (
    <Box p={{ base: "2rem", md: "4rem" }}>
      {/* Top Section: How We Help You */}
      <Heading as="h1" textAlign="center" mb="2rem">
        How We Help You
      </Heading>
      <Text textAlign="center" mb="3rem">
        Our team of experts is dedicated to helping you achieve your real estate
        goals
      </Text>

      <ServiceSection/> 

      <Heading as="h2" textAlign="center" mb="2rem">
        Explore Fruit-Vegetable Wholesalers Association
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        mb="3rem"
      >
        {otherServices.map((service) => (
          <Box
            key={service.id}
            border="1px solid #e2e2e2"
            borderRadius="md"
            p="1.5rem"
            textAlign="center"
            transition="all 0.2s"
            _hover={{ transform: "scale(1.05)", shadow: "md" }}
          >
            <Image
              src={service.image}
              alt={service.title}
              boxSize="100px"
              objectFit="cover"
              borderRadius="md"
              mb="1rem"
            />
            <Heading as="h4" size="md" mb="1rem">
              {service.title}
            </Heading>
            <Text>{service.description}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
