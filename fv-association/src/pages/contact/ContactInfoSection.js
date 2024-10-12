import React from "react";
import { Box, Text, VStack, HStack, Link, Icon, Flex } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


function ContactInfoSection({ variant }) {
    const contactUsInfo = {
        heading:"fill the form we will reach out to you",
        address:"jaipur",
       email: "abc@.com",
       phone:"9876543210"
    }


  const homePageLayout = (
    <Box
    //    background="linear-gradient(to right, #30b979, #1bb69b)"
      p={{ base: "2rem", md: "3rem" }}
      borderRadius="3rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      maxW="1200px"
      mx={{ base: "auto", md: "auto" }}
      mt={{ base: "0rem", md: "1.5rem" }}
      color="black"
    >

        <VStack spacing={4} alignItems="center"  >
          <HStack
            spacing={{ base: 4, md: 8 }}
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
          >
            <VStack align="center" spacing={2}>
              <Text fontSize={{ base: "1rem", md: "1.3rem" }} >Get In Touch:</Text>
              <Link
                fontSize={{ base: "1.2rem", md: "1.7rem" }}
                fontWeight="bold"
              >
                {contactUsInfo.email}
              </Link>
            </VStack>

            <Text
              p={{ base: "1rem", md: "1rem" }}
              fontSize={{ base: "1.2rem", md: "2rem" }}
              fontWeight="bold"
              border={"3px double #30b979"}
              borderRadius={"45%"}
              color={"#1bb69b"}
              background={"transparent"}
            >
              or
            </Text>

            <VStack align="center" spacing={2}>
              <Text fontSize={{ base: "1rem", md: "1.3rem" }}>Call Us Via:</Text>
              <Link
                fontSize={{ base: "1.4rem", md: "1.8rem" }}
                fontWeight="bold"
              >
                {contactUsInfo.phone}
              </Link>
            </VStack>
          </HStack>
        </VStack>

    </Box>
  );

  const contactPageLayout = (
    <Box px={{ base: 1, md: 6, lg: 6 }}>

        <VStack
          align="start"
          w={"100%"}
          justifyContent="space-between"
          spacing={{ base: 1, md:1 }}
          
        >
          <Text
            fontSize={{ base: "1.5rem", md: "1.75rem", lg: "2rem" }}
            fontWeight="bold">
            {contactUsInfo.heading}
          </Text>

          <Flex alignItems="center"  gap={4}>
        <Text fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }} >
          Address:
        </Text>
        <Text fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}>
          {contactUsInfo.address}
        </Text>
      </Flex>
      <Flex alignItems="center" gap={4}>
          <Text fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}>Email:</Text>
          <Text fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}>
            {contactUsInfo.email}
          </Text>
          </Flex>
          <Flex alignItems="center"   gap={4}>
          <Text  fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}>Phone:</Text>
          <Text fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}>{contactUsInfo.phone}
          </Text>
          </Flex>
          <HStack
            my={6}
            spacing={{ base: 14, md: 4, lg: 5 }}
          >
            <Link href="#">
              <Icon as={FaFacebook} w={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} h={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="#1bb69b" />
            </Link>
            <Link href="#">
              <Icon as={FaLinkedin} w={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} h={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="#1bb69b" />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} w={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} h={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="#1bb69b" />
            </Link>
            <Link href="#">
              <Icon as={FaTwitter} w={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} h={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="#1bb69b" />
            </Link>
            <Link href="#">
              <Icon as={FaYoutube} w={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} h={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }} color="#1bb69b" />
            </Link>
          </HStack>
        </VStack>
  
    </Box>

  )


  return variant === "home" ? homePageLayout : contactPageLayout;
}

export default ContactInfoSection;
