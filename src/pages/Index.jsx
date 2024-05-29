import { useState } from "react";
import { Box, Container, VStack, HStack, Input, Button, Text, Avatar, IconButton } from "@chakra-ui/react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "You" }]);
      setInputValue("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" bg="gray.100" borderRadius="md" p={4} overflowY="auto" flex="1">
          {messages.map((message, index) => (
            <HStack key={index} spacing={3} alignItems="flex-start" mb={3}>
              <Avatar icon={<FaUserCircle />} />
              <VStack alignItems="flex-start" spacing={1}>
                <Text fontWeight="bold">{message.sender}</Text>
                <Text>{message.text}</Text>
              </VStack>
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input
            placeholder="Type a message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
