import React from 'react';
import {useNavigate } from 'react-router-dom'; 
import {Box,Flex,Text,Heading,Image,Progress,SimpleGrid,Avatar,IconButton,Link,VStack,useBreakpointValue,} from '@chakra-ui/react';
import webLogo from "../../assets/logoFv-web.png";
import Button from '../../components/button/Button';
import farmerImage from '../../assets/farmer.jpg'
import MemberSection from './MembersSection';

const Members = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
 
  const navigate = useNavigate();
  const handleMembersNowClick = () => {
    navigate('/previousMemebrs');
  };
  return (
    <Box p={{ base: 6, md: 12 }} bg="gray.50">
      {/* Header Section */}
      <Flex direction="column" align="center" textAlign="center" mb={8}>
        <Heading as="h1" size="2xl" mb={2}>
          Our Leaders
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Home &gt; Our Members
        </Text>
        <Box my={{ base: "", md: "3rem" }}>
        <Button  onClick={handleMembersNowClick}  text="See Our Previous Leaders" />
        </Box>
      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        mb={12}
        gap={8}
      >
        <Image
          src={webLogo}
          alt="Teamwork illustration"
          boxSize={{ base: '100%', md: '50%' }}
        />
        <Box flex={1}>
          <Heading as="h3" size="lg" mb={4}>
            Honest, Harworking and social worker
          </Heading>
          <Text fontSize="md" color="gray.600" mb={6}>
            From dedicated helping strategists to creative social work, we have
            the people who can plan and execute the right plan for Fruit and Vegitable wholesalers Association.
          </Text>
          <VStack align="start" spacing={4}>
            <ProgressBar label="Market Intelligence & Reports" value={80} color="green" />
            <ProgressBar label="Logistics and Distribution Assistance" value={70} color="green" />
            <ProgressBar label="Advocacy and Policy Representation" value={90} color="green" />
          </VStack>
        </Box>
      </Flex>

     

      {/* Executive Team Section */}
    <MemberSection/>
    </Box>
  );
};


const ProgressBar = ({ label, value, color }) => (
  <Box w="full">
    <Text mb={1}>{label}</Text>
    <Progress value={value} colorScheme={color} size="sm" />
  </Box>
);






export default Members;
