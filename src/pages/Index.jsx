import { Box, Flex, Text, Button, VStack, Link } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={5}>
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to My Portfolio</Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Text fontSize="2xl" fontWeight="semibold">About Me</Text>
          <Text mt={4}>I am a passionate developer with a knack for building beautiful and functional web applications. Stay tuned for more updates!</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Text fontSize="2xl" fontWeight="semibold">Portfolio</Text>
          <Text mt={4}>Check out my projects below. More exciting projects coming soon!</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Text fontSize="2xl" fontWeight="semibold">Contact</Text>
          <VStack spacing={3} mt={4}>
            <Link href="mailto:example@example.com" isExternal>
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
                Email Me
              </Button>
            </Link>
            <Link href="https://github.com" isExternal>
              <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Button leftIcon={<FaLinkedin />} colorScheme="teal" variant="solid">
                LinkedIn
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Index;