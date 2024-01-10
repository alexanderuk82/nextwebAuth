"use client";

import Link from "next/link";
import { Button } from "../ui/Button";

interface BackButtonProps {
	label: string;
	href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
	return (
		<Button variant="link" size="sm" asChild className="w-full">
			<Link href={href}>{label}</Link>
		</Button>
	);
};

export default BackButton;
