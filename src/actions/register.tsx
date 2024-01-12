"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

const Register = async (values: z.infer<typeof RegisterSchema>) => {
	const validation = RegisterSchema.safeParse(values);

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

export default Register;
