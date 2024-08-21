import { Flex, VStack, Text, Box} from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>

            <Text fontSize={12} fontWeight={"bold"} color={"gray.400"} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        <SuggestedUser name="Dan A" followers={1200} avatar="https://bit.ly/dan-a"/>
        <SuggestedUser name="Ryan F" followers={345} avatar="https://bit.ly/ryan-f"/>
        <SuggestedUser name="Christan N" followers={3900} avatar="https://bit.ly/christan-n"/>
        

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>

            2024 built by a Programer {" "}

        </Box>

    </VStack>
  )
}
