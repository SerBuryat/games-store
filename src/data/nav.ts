import type { NavProps } from "../components/Nav.astro";

const navData : NavProps = {
	navLinks: [
		{ text: "Games", href: "/games/" },
		{ text: "Profile", href: "/" },
		{ text: "About us", href: "/" },
	],
	logo: {
		src: "/games-store-logo-removebg-preview.png",
		width: 100,
		height: 65,
	}
};

export default navData;