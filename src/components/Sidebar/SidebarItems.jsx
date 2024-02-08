import ProfileLink from "../Profile/ProfileLink";
import CreatePost from "./CreatePost";
import FriendSuggestion from "./FriendSuggestion";
import Home from "./Home";
import Search from "./Search";


const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<FriendSuggestion/>
			<CreatePost />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;