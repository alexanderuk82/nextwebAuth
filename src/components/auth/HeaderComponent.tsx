import React from "react";

interface HeaderComponentProps {
	label: string;
}

export const HeaderComponent = ({ label }: HeaderComponentProps) => {
	return (
		<div className="w-full flex flex-col gap-4 items-center">
			<h1 className="text-3xl font-semibold">🔐 Auth</h1>
			<p className="text-muted-foreground text-sm">{label}</p>
		</div>
	);
};
