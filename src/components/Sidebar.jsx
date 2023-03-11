import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<List color="white" fontSize="1.2em" spacing={4}>
			<ListItem>
				<ListIcon as={CalendarIcon} color="white"></ListIcon>
				<NavLink to="/">Dashboard</NavLink>
			</ListItem>

			<ListItem>
				<ListIcon as={EditIcon} color="white"></ListIcon>
				<NavLink to="/create">New Task</NavLink>
			</ListItem>

			<ListItem>
				<ListIcon as={AtSignIcon} color="white"></ListIcon>
				<NavLink to="/profile">Profile</NavLink>
			</ListItem>
		</List>
	);
};
export default Sidebar;
