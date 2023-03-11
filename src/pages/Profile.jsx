import {
	Tabs,
	TabPanels,
	TabList,
	Tab,
	TabPanel,
	List,
	ListItem,
	ListIcon,
} from "@chakra-ui/react";

import { EmailIcon, ChatIcon, StarIcon,CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

export default function Create() {
	return (
		<Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
			<TabList>
				<Tab _selected={{ color: "white", bg: "purple" }}>Account Info</Tab>
				<Tab _selected={{ color: "white", bg: "purple" }}>Task History</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={EmailIcon} />
							Email: Mario@gmail.com
						</ListItem>
						<ListItem>
							<ListIcon as={ChatIcon} />
							Lorem Ipusm sumef fhewo
						</ListItem>
						<ListItem>
							<ListIcon as={StarIcon} />
							Lorem Ipusm sumef fhewo
						</ListItem>
					</List>
				</TabPanel>

				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem Ipusm sumef fhewo
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem Ipusm sumef fhewo
						</ListItem>
						<ListItem>
							<ListIcon as={WarningIcon} color="red.400" />
							Lorem Ipusm sumef fhewo
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem Ipusm sumef fhewo
						</ListItem>
						<ListItem>
							<ListIcon as={WarningIcon} color="red.400" />
							Lorem Ipusm sumef fhewo
						</ListItem>
					</List>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}
