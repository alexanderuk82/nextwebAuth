"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

const Login = async (values: z.infer<typeof LoginSchema>) => {
	const validation = LoginSchema.safeParse(values);

	if (!validation.success) {
		return {
			success: false,
			message: "Invalid fields",
		};
	}

	return {
		success: true,
		message: "Email sent",
	};
};

export default Login;
