import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/contants";
import { AiFillHome } from 'react-icons/ai'
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {

    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: 'Home',
            link: "/",
        },
        {
            icon: <SearchLogo size={25} />,
            text: 'Search',
            link: "/",
        },
        {
            icon: <NotificationsLogo size={25} />,
            text: 'Notifications',
            link: "/",
        },
        {
            icon: <CreatePostLogo size={25} />,
            text: 'Create',
            link: "/",
        },
        {
            icon: <Avatar size={"sm"} name="Hassan Nahid" src="/profilepic.jpg" />,
            text: 'Profile',
            link: "/hassannahid",
        },

    ]


    return (
        <Box height={"100vh"} borderRight={"1px solid"}
            borderColor={"whiteAlpha.300"} py={8} position={'sticky'} top={0} left={0} px={{ base: 2, md: 4 }}>
            <Flex direction={'column'} gap={10} w={"full"} height={"full"}>
                <Link to={"/"} as={RouterLink} pl={2} display={{ base: 'none', md: "block" }} cursor="pointer">
                    <InstagramLogo />
                </Link>
                <Link to={"/"} as={RouterLink} p={2} display={{ base: 'block', md: "none" }} cursor="pointer"
                    borderRadius={6} _hover={{ bg: "whiteAlpha.200" }} w="10"
                >
                    <InstagramMobileLogo />
                </Link>
                <Flex direction="column" gap={5} cursor={"pointer"}>
                    {sidebarItems.map((item, index) => (
                        <Tooltip hasArrow label={item.text} placement="right" key={index} openDelay={500} display={{ base: "block", md: 'none' }}>
                            <Link display={"flex"} to={item.link || null} as={RouterLink} alignItems={"center"}
                                gap={4} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }} justifyContent={{base:"center",md:"flex-start"}}>
                                {item.icon}
                                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
                            </Link>
                        </Tooltip>
                    ))}

                </Flex>
                <Tooltip hasArrow label={"Logout"} placement="right"  openDelay={500} display={{ base: "block", md: 'none' }}>
                            <Link display={"flex"} to={"/auth"} as={RouterLink} alignItems={"center"}
                                gap={4} mt={"auto"} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }} justifyContent={{base:"center",md:"flex-start"}}>
                                <BiLogOut size={25}/>
                                <Box display={{ base: "none", md: "block" }}>Logout</Box>
                            </Link>
                        </Tooltip>
            </Flex>
        </Box>
    );
};

export default Sidebar;