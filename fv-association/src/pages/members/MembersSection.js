import React from 'react';
import { Box, Flex, Text, Heading, Avatar, VStack } from '@chakra-ui/react';
import teamleader from "../../assets/leader.jpg";
import teamMember1 from "../../assets/teamMember-01.jpg";
import teamMember2 from "../../assets/teamMember-02.jpg";
import teamMember3 from "../../assets/teamMember-03.jpg";
import teamMember4 from "../../assets/teamMember-05.jpg";

function MemberSection() {
  const teamMembers = [
    {
      name: 'Mark Liuw',
      role: 'General Manager',
      image: teamleader,
    },
    {
      name: 'Angela Kwang',
      role: 'Chief Operating Officer',
      image: teamMember1,
    },
    {
      name: 'Nina Sherwood',
      role: 'Senior Digital Strategist',
      image: teamMember2,
    },
    {
      name: 'Cherlyn Long',
      role: 'Managing Director',
      image: teamMember3,
    },
    {
      name: 'Amy Cutter',
      role: 'Head of Technical SEO',
      image: teamMember4,
    },
  ];

  // Extract the leader and the rest of the members
  const [leader, ...otherMembers] = teamMembers;

  return (
    <Box>
      <Heading as="h3" size="lg" textAlign="center" mb={4}>
        Our Executive Members
      </Heading>
      <Text fontSize="md" color="gray.600" textAlign="center" mb={8}>
        Our success is a result of teamwork and building upon our technical
        expertise and creative style, providing a full-service solution to our clients.
      </Text>

      {/* Leader Card in a Single Row */}
      <Flex justifyContent="center" mb={8}>
  <Flex
    bg="white"
    p={"3rem"}
    width={"40%"}
    rounded="lg"
    shadow="md"
    align="center"
    direction={{ base: "column", md: "row" }} 
    gap={24} 
  >
    {/* Image Column */}
    <Avatar size="2xl" width="200px" height="200px" borderRadius={"none"} src={leader.image} />

    {/* Text Column */}
    <VStack align="flex-start" spacing={2}>
      <Heading as="h4" size="md">
        {leader.name}
      </Heading>
      <Text fontSize="sm" color="gray.500">
        {leader.role}
      </Text>
    </VStack>
  </Flex>
</Flex>


      {/* Other Team Members in a Row */}
      <Flex wrap="wrap" justifyContent="center" gap={8}>
        {otherMembers.map((member) => (
          <VStack
            key={member.name}
            spacing={4}
            bg="white"
            p={6}
            rounded="lg"
            shadow="md"
            align="center"
            width={{ base: "100%", sm: "calc(50% - 16px)", md: "calc(20% - 16px)" }}
          >
            <Avatar size="xl" src={member.image} />
            <Heading as="h4" size="md">
              {member.name}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {member.role}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
}

export default MemberSection;
