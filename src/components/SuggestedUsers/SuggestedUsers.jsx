import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { useEffect, useState } from "react";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    const { isLoading, suggestedUsers } = useGetSuggestedUsers();

    if (isLoading) return null;

    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
            {suggestedUsers.length !== 0 && (
                <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                        Suggested for you
                    </Text>
                    <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                        See All
                    </Text>
                </Flex>
            )}
            <Box overflowY={"auto"} w={"full"} maxH={"300px"}>
                {suggestedUsers.map(user => (
                    <SuggestedUser user={user} key={user.id} />
                ))}
            </Box>


            <Box fontSize={10} color={"gray.500"} mt={5} >
                Copyright © {currentYear} - All rights reserved by{" "}
                <Link href="https://hassannahid.netlify.app/" target="_blank" fontWeight={"bold"} color={"blue.500"} fontSize={10}>
                    Hassan Nahid
                </Link>
            </Box>
        </VStack>
    );
};

export default SuggestedUsers;