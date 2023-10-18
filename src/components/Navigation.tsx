import Image from "next/image";
import { type Route } from "next";
import { ActiveLink } from "./ActiveLink";

const links = [
	{
		url: "/",
		label: "Home",
    exact: true,
	},
	{
		url: "/products/1",
		label: "Products",
    exact: false,
	},
	{
		url: "/static/privacy-policy",
		label: "Privacy policy",
    exact: true,
	},
];

export const Navigation = () => {
	return (
		<nav className="container flex items-center justify-between py-6 font-light">
			<ActiveLink href="/" className="inline-block" exact>
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</ActiveLink>
			<ul className="flex gap-8">
				{links.map(({ url, label, exact }) => (
					<li key={label}>
						<ActiveLink href={url as Route<string>} exact={exact}>
							{label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
