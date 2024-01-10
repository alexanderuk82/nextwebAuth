"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
	children: React.ReactNode;
	mode: "login" | "redirect" | "modal";
	asChild?: boolean;
}

const LoginButton = ({
	children,
	mode = "redirect", //By default, we want to redirect
	asChild,
}: LoginButtonProps) => {
	const router = useRouter();
	const onClick = () => {
		console.log("clicked");
		router.push("/auth/login");
	};

	if (mode === "modal") {
		return <span>TODO: modal</span>;
	}
	return (
		<span className="cursor-pointer " onClick={onClick}>
			{children}
		</span>
	);
};

export default LoginButton;
