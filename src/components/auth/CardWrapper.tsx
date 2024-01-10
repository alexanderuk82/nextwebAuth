"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { HeaderComponent } from "./HeaderComponent";
import Social from "./Social";
import BackButton from "./BackButton";

interface CardWrapperProps {
	children: React.ReactNode;
	headerLabel: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocialButtons?: boolean;
}

const CardWrapper = ({
	children,
	headerLabel,
	backButtonLabel,
	backButtonHref,
	showSocialButtons,
}: CardWrapperProps) => {
	return (
		<Card className="w-[400px] shadow-md">
			<CardHeader>
				<HeaderComponent label={headerLabel} />
			</CardHeader>
			<CardContent>{children}</CardContent>
			{showSocialButtons && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				<BackButton label={backButtonLabel} href={backButtonHref} />
			</CardFooter>
		</Card>
	);
};

export default CardWrapper;
