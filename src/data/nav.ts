import type { NavProps } from "../components/Nav.astro";

const navData : NavProps = {
	navLinks: [
		{ text: "Games", href: "/games/" },
		{ text: "Search", href: "/search/" },
		{ text: "Profile", href: "/" },
	],
	logo: {
		src: "/games-store-logo-removebg-preview.png",
		width: 100,
		height: 65,
	}
};

export default navData;