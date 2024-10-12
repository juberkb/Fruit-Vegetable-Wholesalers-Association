import React from "react";
import { Link} from "react-router-dom";
import { Box, Text, Flex, Input, VStack, HStack, Textarea, Icon, Image, Heading, useBreakpointValue } from "@chakra-ui/react";
import { FiArrowRight } from 'react-icons/fi';
import webLogo from "../../assets/logoFv-web.png";
// import inquiryNowImg from "../../assets/featrues-img-02.webp";
import "../../comman/styles/inquiry.css";
import ContactInfoSection from "./ContactInfoSection";
function ConstactUs() {
    


    return ( 
        <Box>
        <Box
          className="CommonBgImage"
          py={{ base: "3rem", md: "" }}
          mt={{ base: "", md: "1rem" }}
        >
          <Text fontSize="3rem" fontWeight="bold" textAlign="center">
          Contac Now
          </Text>
          <Text textAlign="center">Home &gt; Contact now</Text>
        </Box>
  
        <Flex direction={["column", "row"]} p={{ base: "3rem", md: "6rem" }} justifyContent="space-between">
          <VStack w={["100%", "25%"]} textAlign={{ base: "center", md: "start" }}>
            <Image src={webLogo} alt="inquiry now" />
            <ContactInfoSection variant="contact" />
            
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

export default ConstactUs;