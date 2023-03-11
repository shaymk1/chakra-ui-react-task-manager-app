import {
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Spacer,
	HStack,
	useToast,
	AvatarBadge,
	Avatar,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";
const Navbar = () => {
	const toast = useToast()
	const showToast =()=>{
		toast({
			title: "Logged out.",
			description: "Successfully logged out",
			duration: 10000,
			isClosable: true,
			position: "top",
			status: "success",
			icon: <UnlockIcon />,
		});
	}
	return (
		<Flex as="nav" p="10px" alignItems="center" gap="10px" mb="40px">
			<Heading as="h1">Task Manager</Heading>
			<Spacer />
			<HStack spacing="20px">
				<Avatar name="mario" src="/img/mario.png">
					<AvatarBadge width="1.3em" bg="teal.500">
						<Text fontSize="xs" color="white">
							3
						</Text>
					</AvatarBadge>
				</Avatar>
				<Text>mario.dev@gmail.com</Text>
				<Button colorScheme="purple" onClick={showToast}>
					LogOut
				</Button>
			</HStack>
		</Flex>
	);
};
export default Navbar;
