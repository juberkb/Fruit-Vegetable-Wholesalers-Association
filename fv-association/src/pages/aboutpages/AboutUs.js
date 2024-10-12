import { Box, Text, Image, Flex, SimpleGrid, Circle, useMediaQuery, Heading,} from '@chakra-ui/react';
import React from 'react';
import "../../comman/styles/commanStyles.css"
import bgImage from "../../assets/buyer-app-parallax.jpg";
import { AiOutlineShop } from "react-icons/ai";
import { IoEarthOutline } from "react-icons/io5";
import { GiFarmTractor, GiFruitBowl } from "react-icons/gi";
import { BsPhoneFlip } from "react-icons/bs";
import { MdVerifiedUser, MdOutlineHealthAndSafety } from "react-icons/md";
import { FaShippingFast } from 'react-icons/fa';
import { PiMedalLight, PiPlantLight } from "react-icons/pi";
import webLogo from "../../assets/logoFv-web.png";
import aboutBgImage from "../../assets/how-it-works-bg.png";
import AboutSection from './AboutSection';


const AboutUs = () => {
    const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

    return (
        <Box mb={"3rem"}>
            <Box
                backgroundImage={`url(${bgImage})`}
                backgroundSize="cover"
                backgroundPosition="center"
                height="70vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                flexDirection="column"
                color="white"
                padding={isLargerThanMD ? "4rem" : "2rem"}
            >
                <Heading as="h1" fontSize={isLargerThanMD ? "4xl" : "2xl"} mb="2">
                    About-Us
                </Heading>
                <Text fontSize={isLargerThanMD ? "xl" : "md"}>
                    Trusted trade platform offering higher savings, supply predictability & traceability.
                </Text>
            </Box>
            <AboutSection/>
            

            <Box
       backgroundImage={`url(${aboutBgImage})`}
       backgroundSize="cover"
       backgroundPosition="center"
       height="70vh"
      py={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
        {/*  */}
      <Flex  alignItems="center"  >
        <Box width="50%" display="flex" flexDirection="column" alignItems="center">
          <Box textAlign="center" mr={"-27rem"} mt={"0rem"}>
            <Circle size="60px" bg="#006A4E"
              _hover={{ background: "#17B169" }}
              style={{
                transition: "background 0.3s ease, transform 0.3s ease",
                transitionDelay: "0.4s",
              }}>
              <BsPhoneFlip className="aboutIcon" size={"35px"} />
            </Circle>
            <Text mt={2}>Ease of Ordering</Text>
          </Box>
          <Box textAlign="center" mr={"-2rem"} mt={"0rem"}>
            <Circle size="60px" bg="#006A4E"
              _hover={{ background: "#17B169" }}
              style={{
                transition: "background 0.3s ease, transform 0.3s ease",
                transitionDelay: "0.4s",
              }}>
              <MdVerifiedUser className="aboutIcon" size={"35px"} />
            </Circle>
            <Text mt={2}>Verified sellers</Text>
          </Box>
          <Box textAlign="center" mt={"4rem"} ml={"-2rem"}>
            <Circle size="60px" bg="#006A4E"
              _hover={{ background: "#17B169" }}
              style={{
                transition: "background 0.3s ease, transform 0.3s ease",
                transitionDelay: "0.4s",
              }}>
              <PiMedalLight className="aboutIcon" size={"35px"} />
            </Circle>
            <Text mt={2}>Real-time Shipment</Text>
          </Box>
          <Box textAlign="center"  mt={"3rem"} ml={"2rem"}>
            <Circle size="60px" bg="#006A4E"
              _hover={{ background: "#17B169" }}
              style={{
                transition: "background 0.3s ease, transform 0.3s ease",
                transitionDelay: "0.4s",
              }}>
              <PiPlantLight className="aboutIcon" size={"35px"} />
            </Circle>
            <Text mt={2}>Predictable supply</Text>
          </Box>
        </Box>
        {/* border="5px dotted green" borderRadius="80%" p="10rem" */}
        <Box width="100%" display="flex" justifyContent="center" ml={"0rem"} mt={"2.5rem"}  >
          <Circle size="170px" bg="#17B169" mt={"2rem"} >
            <Image src={webLogo} alt="Logo" boxSize="150px" />
          </Circle>
        </Box>
        <Box width="50%" display="flex" flexDirection="column" alignItems="center" ml={"3rem"}>
          <Box textAlign="left" mt={"11rem"}  >
            <Circle size="60px" bg="#006A4E"
              _hover={{ background: "#17B169" }}
              style={{
                transition: "background 0.3s ease, transform 0.3s ease",
                transitionDelay: "0.4s",
              }}>
              <GiFruitBowl className="aboutIcon" size={"35px"} />
            </Circle>
            <Text mt={2}>Organic Vegetables</Text>
          </Box>
          <Box textAlign="center" mr={"-8rem"} mt={"3rem"}>
            <Circle size="60px" bg="#006A4E"
              _hover={{ background: "#17B169" }}
              style={{
                transition: "background 0.3s ease, transform 0.3s ease",
                transitionDelay: "0.4s",
              }}>
              <MdOutlineHealthAndSafety className="aboutIcon" size={"35px"} />
            </Circle>
            <Text mt={2}>Safe & Healthy Food</Text>
          </Box>
          <Box textAlign="left" mr={"3rem"} mt={"3rem"}>
            <Circle size="60px" bg="#006A4E"
              _hover={{ background: "#17B169" }}
              style={{
                transition: "background 0.3s ease, transform 0.3s ease",
                transitionDelay: "0.4s",
              }}>
              <FaShippingFast className="aboutIcon" size={"35px"} />
            </Circle>
            <Text mt={2}>Shipment Tracking</Text>
          </Box>
          <Box textAlign="center" ml={"-26rem"} mt={"0rem"}>
            <Circle size="60px" bg="#006A4E"
              _hover={{ background: "#17B169" }}
              style={{
                transition: "background 0.3s ease, transform 0.3s ease",
                transitionDelay: "0.4s",
              }}>
              <FaShippingFast className="aboutIcon" size={"35px"} />
            </Circle>
            <Text mt={2}>Problem Solving</Text>
          </Box>
        </Box>
      </Flex>
    </Box>


    <Box py={10} px={5} textAlign="center" alignItems={"center"} mt={"10rem"}>
                <Heading as="h2" size="lg" mb={5}>
                    We partner with farmers to offer you the freshest produce as per your schedule.
                </Heading>
                <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={"3rem"} px={"5rem"}>
                    <Box px={"5rem"}>
                        <Box px={"5.3rem"}>
                            <AiOutlineShop size="100px" color='#006A4E' />
                        </Box>
                        <Heading as="h3" size="md" mt={4}>
                            Retailers
                        </Heading>
                        <Text mt={2}>
                            Daily delivery of quality fresh fruits & vegetables at best prices to Small Enterprises.
                        </Text>
                    </Box>

                    <Box px={"5rem"}>
                        <Box px={"5.3rem"}>
                            <IoEarthOutline size="100px" mx="auto" color='#006A4E' />
                        </Box>
                        <Heading as="h3" size="md" mt={4}>
                            Food Processing
                        </Heading>
                        <Text mt={2}>
                            We offer right price & price hedging mechanism to suit your unique quality norms & delivery schedule.
                        </Text>
                    </Box>

                    <Box px={"5rem"}>
                    <Box px={"5.3rem"}>
                            <GiFarmTractor size="100px" mx="auto" color='#006A4E' />
                        </Box>
                        <Heading as="h3" size="md" mt={4}>
                            Exporters
                        </Heading>
                        <Text mt={2}>
                            We identify the best source to suit your bulk requirement across or registered farms.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Box>
          
        </Box>
    );
};

export default AboutUs;
