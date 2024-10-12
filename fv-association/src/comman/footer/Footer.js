import React from 'react';
import { Link} from 'react-router-dom'; 
import "../styles/commanStyles.css"
import { Box, VStack, HStack, SimpleGrid, GridItem, Text,  Icon, Flex, Image } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import webLogo from "../../assets/logoFv-web.png";

const Footer = () => {
 
  return (
    <Box bg="#006A4E"
      padding={{ base: '2rem', md: '6rem' }} color={"white"}>
      <SimpleGrid columns={[1, 1, 2, 4]} spacing={8} maxW="1200px" mx="auto" px={4} className="footer">
        <GridItem>
          <VStack align={["flex-start", "flex-start", "flex-start", "flex-start"]}>
            <Flex direction={["column", "column", "row"]} align="flex-start" w="full" justify="space-between">
              <Box className="logo">
                <Image src={webLogo} alt="EduBlink" width="50%" />

                <Text fontSize="sm" my={{ base: ".5rem", md: "0rem" }}>Build Your Programming Skill with EdubLink </Text>
                <Text mt={4}><strong>Add:</strong> 70-80 Upper St Norwich NR2</Text>
                <Text><strong>Call:</strong> +01 123 5641 231</Text>
                <Text><strong>Email:</strong> info@edublink.co</Text>
              </Box>
            </Flex>
          </VStack>
        </GridItem>

        <GridItem>
          <Box display={"flex"} flexDirection={"column"}>
            <Text fontSize="lg" fontWeight="bold">Online Platform</Text>
            <Link to="/" fontSize="sm">Home</Link>
            <Link to="/aboutus" fontSize="sm">About-Us</Link>
            <Link to="/members" fontSize="sm">Our-Members</Link>
            <Link to="/services" fontSize="sm">Our-Services</Link>
            <Link to="/contact" fontSize="sm">Contact-Us</Link>
          </Box>
        </GridItem>

        <GridItem>
          <Box display={"flex"} flexDirection={"column"}>
            <Text fontSize="lg" fontWeight="bold" >Links</Text>
            <Link to="/events" fontSize="sm">Events</Link>
            <Link to="/resources" fontSize="sm">Resources</Link>
            <Link to="/news" fontSize="sm">News</Link>
            <Link to="/registernow" fontSize="sm">Sign In/Registration</Link>
          </Box>
        </GridItem>

        <GridItem colSpan={[1, 1, 1, 1]}>
          <VStack align="flex-start" spacing={4} w="100%">
            <Text fontSize="lg" fontWeight="bold">Contacts</Text>
            <Text fontSize="sm">Enter your email address to register for our newsletter subscription</Text>

            <HStack mt={4} spacing={4}>
              <Link to="/"><Icon as={FaFacebook} w={"1.5rem"} h={"1.5rem"} color="/1bb69b"  _hover={{ color: "#17B169" }} 
               transition="color 0.3s ease"/></Link>
              <Link to="/"><Icon as={FaLinkedin} w={"1.5rem"} h={"1.5rem"} color="/1bb69b"  _hover={{ color: "#17B169" }} 
               transition="color 0.3s ease"/></Link>
              <Link to="/"><Icon as={FaInstagram} w={"1.5rem"} h={"1.5rem"} color="/1bb69b"  _hover={{ color: "#17B169" }} 
               transition="color 0.3s ease"/></Link>
              <Link to="/"><Icon as={FaTwitter} w={"1.5rem"} h={"1.5rem"} color="/1bb69b"  _hover={{ color: "#17B169" }} 
               transition="color 0.3s ease"/></Link>
              <Link to="/"><Icon as={FaYoutube} w={"1.5rem"} h={"1.5rem"} color="/1bb69b"  _hover={{ color: "#17B169" }} 
               transition="color 0.3s ease"/></Link>
            </HStack>

          </VStack>
        </GridItem>
      </SimpleGrid>

      <Box textAlign="center" pt={6} bg={"ebeff0"}>
        <Text fontSize="sm">Copyright 2024 EduBlink | Developed by DevsBlink. All Rights Reserved</Text>
      </Box>
    </Box>
  );
};

export default Footer;
