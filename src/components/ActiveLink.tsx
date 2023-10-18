"use client";

import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

type ActiveLinkProps<T extends string> = {
	className?: string;
	activeClassName?: string;
	exact?: boolean;
	href: Route<T>;
	children: ReactNode;
};

export const ActiveLink = <T extends string>({
	className = "hover:underline underline-offset-8",
	activeClassName = "underline text-slate-400",
	exact,
	href,
	children,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact ? href === pathname : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={`${className} ${isActive ? `${activeClassName}` : ""}`}
		>
			{children}
		</Link>
	);
};
