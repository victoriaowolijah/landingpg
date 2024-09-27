import { Box,VStack, HStack, Image, Text, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
    >
      <VStack align="start" spacing={4} p={4}>
        <Image src={imageSrc} alt={title} borderRadius="md" />

        {/* title */}
        <Heading as="h3" size="md" fontWeight="bold" color="black">
          {title}
        </Heading>

        {/* description */}
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>

  
        <HStack spacing={2} alignItems="center">
          <Text fontWeight="bold" color="green.500">
            See more            <FontAwesomeIcon icon={faArrowRight} size="1x" color="black.500" />
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black.500" />
        </HStack>
      </VStack>
    </Box>
  );
  
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // return null;
};

export default Card;
