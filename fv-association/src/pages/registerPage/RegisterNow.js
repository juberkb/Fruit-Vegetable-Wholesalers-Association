import React from "react";
import { Link} from "react-router-dom";
import { Box, Text, Flex, Input, VStack, HStack, Textarea, Icon, Image, Heading, useBreakpointValue } from "@chakra-ui/react";
import { FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube, } from 'react-icons/fa';
// import inquiryNowImg from "../../assets/featrues-img-02.webp";
import "../../comman/styles/inquiry.css";
function RegisterNow() {
    return ( 
        <Box>
        <Box
          className="CommonBgImage"
          py={{ base: "3rem", md: "6rem" }}
          mt={{ base: "", md: "1rem" }}
        >
          <Text fontSize="3rem" fontWeight="bold" textAlign="center">
         Register Now
          </Text>
          <Text textAlign="center">Home &gt; Register now</Text>
        </Box>
  
        <Flex direction={["column", "row"]} p={{ base: "3rem", md: "6rem" }} justifyContent="space-between">
          <VStack w={["100%", "25%"]} textAlign={{ base: "center", md: "start" }}>
            {/* Display the title od courses in the heading */}
            <Heading textAlign={"center"}>Register Us</Heading>
            <Text>Fill the form and we will reach out to you</Text>
            <Image src={""} alt="inquiry now" />
            <HStack mt={6} spacing={4}>
              <Link href="#"><Icon as={FaFacebook} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaLinkedin} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaInstagram} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaTwitter} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
              <Link href="#"><Icon as={FaYoutube} w={"1.5rem"} h={"1.5rem"} color="#1bb69b" /></Link>
            </HStack>
          </VStack>
  
          <Box w={["100%", "55%"]} h={["100%", "90vh"]} bg="white" p={"2rem"} boxShadow="lg" borderRadius="md" mt={{ base: "2rem", md: "" }}>
            <Text fontSize="xl" mb={2}>Get In Touch</Text>
            <VStack as="form">
              <HStack
                spacing={{ base: "2", md: 4 }}
                width="100%"
                alignItems="flex-start"
                flexDirection={useBreakpointValue({ base: "column", md: "row" })}
              >
  
                <Box className="floating-label" width={useBreakpointValue({ base: "100%", md: "50%" })}>
                  <Input
                    
                    placeholder=" "
                    required
                  />
                  <label>Your name *</label>
                </Box>
                <Box className="floating-label" width={useBreakpointValue({ base: "100%", md: "50%" })}>
                  <Input
                    placeholder=" "
                  />
                  <label>Mobile No</label>
                </Box>
              </HStack>
  
              <Box className="floating-label" width={"100%"}>
                <Input
                  placeholder=" "
                />
                <label>Course Name</label>
              </Box>
              <Box className="floating-label" width={"100%"}>
                <Input
                  placeholder=" "
                />
                <label>Address</label>
              </Box>
              <Box className="floating-label" width={"100%"}>
                <Textarea
                  placeholder=" "
                  rows={6}
                  mb={6}
                />
                <label>Your Message</label>
              </Box>
              <button className="navSingleButton">
                <span className="nav-item">Submit Now <FiArrowRight /></span>
              </button>
            </VStack>
          </Box>
        </Flex>
      </Box>
     );
}

export default RegisterNow;