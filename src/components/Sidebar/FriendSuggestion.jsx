import { Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { FriendsLogo } from "../../assets/contants";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";

const FriendSuggestion = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isLoading, suggestedUsers } = useGetSuggestedUsers();

    if (isLoading) return null;
    return (
        <>
            <Tooltip
                hasArrow
                label={"Add Friends"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Flex
                    alignItems={"center"}
                    gap={3}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    onClick={onOpen}
                >
                    <FriendsLogo />
                    <Box display={{ base: "none", md: "block" }}>Add Friends</Box>
                </Flex>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent border={"1px solid gray"}>
                    <ModalHeader bg={"black"}>Add Friends</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody bg={"black"}>
                        <Box py={"6px"} overflowY={"auto"} maxHeight="400px">
                            {suggestedUsers.map(user => (
                                <SuggestedUser user={user} key={user.id} />
                            ))}
                            {suggestedUsers.length === 0 && (
                                <Text>Not Friends Suggestion Found</Text>
                            )}
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default FriendSuggestion;
