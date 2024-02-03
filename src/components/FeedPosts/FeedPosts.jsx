import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState()

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading && [0, 1, 2, 3].map((_, idx) => (
                <VStack key={idx} gap={4} alignItems={"flex"} mb={10}>
                    <Flex gap={2}>
                        <SkeletonCircle size={10} />
                        <VStack gap={2} alignItems={"flex-start"}>
                            <Skeleton height={"10px"} w={"200px"} />
                            <Skeleton height={"10px"} w={"200px"} />
                        </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"500px"}>contents wrapped</Box>
                    </Skeleton>
                </VStack>
            ))}
            {!isLoading && (
                <>
                    <FeedPost
                        username="Hassan Nahid" img="/img3.jpeg" avatar="/img3.jpeg"
                    />
                    <FeedPost
                        username="Hassan Nasmir" img="/img2.jpg" avatar="/img2.jpg"
                    />
                    <FeedPost
                        username="Lady Don" img="/img1.png" avatar="/img1.png"
                    />
                    <FeedPost
                        username="Kurulus osman" img="/img4.jpg" avatar="/img4.jpg"
                    />
                </>
            )

            }
        </Container>
    );
};

export default FeedPosts;