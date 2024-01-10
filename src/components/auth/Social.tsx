import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/Button";

const Social = () => {
	return (
		<div className="flex items-center w-full  gap-x-9 justify-center ">
			<Button
				variant="outline"
				size="lg"
				className="w-full"
				onClick={() => {
					console.log("Google");
				}}
			>
				<FcGoogle size={20} />
			</Button>
			<Button
				variant="outline"
				size="lg"
				className="w-full"
				onClick={() => {
					console.log("Github");
				}}
			>
				<FaGithub size={20} />
			</Button>
		</div>
	);
};

export default Social;
