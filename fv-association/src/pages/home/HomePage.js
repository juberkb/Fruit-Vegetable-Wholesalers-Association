import React from 'react';
import "../../comman/styles/commanStyles.css"
import { Box, Image, VStack, Text, Heading, Flex, Grid, Stack, useBreakpointValue } from "@chakra-ui/react";
import homeImage from "../../assets/fruitveggies.jpg"
import associationTeam from "../../assets/associationTeam.jpg"
import teamleader from "../../assets/leader.jpg"
import teamMember1 from "../../assets/teamMember-01.jpg"
import teamMember2 from "../../assets/teamMember-02.jpg"
import teamMember3 from "../../assets/teamMember-03.jpg"
import teamMember4 from "../../assets/teamMember-05.jpg"
import ContactInfoSection from '../contact/ContactInfoSection.js';
import AboutSection from '../aboutpages/AboutSection.js';
import MemberSection from '../members/MembersSection.js';
import ServiceSection from '../service/ServiceSection.js';


const HomePage = () => {

    const members = [
        {
            name: "Ramlal Saini",
            position: "Secretary",
            address:"jaipur",
            imageUrl: teamleader,
        },
        {
            name: "Arjun Yadav",
            position: "Vice Secretary",
            address:"jaipur",
            imageUrl: teamMember1,
        },
        {
            name: "Haaji makbool",
            position: "",
            address:"jaipur",
            imageUrl: teamMember2,
        },
        {
            name: "Ghanshyam yadav",
            position: "",
            address:"jaipur",
            imageUrl: teamMember3,
        },
        {
            name: "Behrulal Choudary",
            position: "",
            address:"jaipur",
            imageUrl: teamMember4,
        },
    ];
    return (
        <Box>
            <Box pt={{ base: "-2rem", md: "" }} position="relative">
                <Image
                    filter="brightness(60%)"
                    src={homeImage}
                    alt="main-img"
                    height={{ base: "30vh", sm: "50vh", md: "80vh" }}
                    width="100vw"
                    objectFit="cover"
                />

                <Text
                    as="h1"
                    color="white"
                    fontSize={{ base: "2rem", sm: "3rem", md: "3.5rem" }}
                    fontWeight="bold"
                    textAlign={{ base: "center", md: "left" }}
                    position="absolute"
                    left={{ base: "50%", md: "35%" }}
                    top="40%"
                    transform="translate(-50%, -50%)"
                    width={{ base: "90%", md: "60%" }}
                    px={4}
                >
                    Fruit-Vegetable Wholesalers Association
                </Text>

                {/* Breadcrumbs Text */}
                {/* <Text
                as="h5"
                color="white"
                fontSize={{ base: "0.8rem", md: "1rem" }} 
                fontWeight="medium"
                textAlign="center"
                position="absolute"
                left="50%"
                top="60%" 
                transform="translate(-50%, -50%)"
                width={{ base: "80%", md: "60%" }} 
                mt={{ base: "", md: "2rem" }} 
                px={4}
            >
           
            </Text> */}
            </Box>
           <AboutSection/>
           <MemberSection/> 
    <Box m={{ base: "2rem", md: "3rem" }} >
        <ContactInfoSection variant="home" />
      </Box>
      <Box m={{ base: "2rem", md: "3rem" }} >
        <Text fontWeight={"600"} fontSize={"2.5rem"} textAlign={"center"}
        m={{ base: "", md: "3rem" }}>Our Services</Text>
<ServiceSection/>
</Box>
        </Box>
    );
};

export default HomePage;
