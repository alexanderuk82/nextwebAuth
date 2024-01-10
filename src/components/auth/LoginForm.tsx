"use client";

import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const LoginForm = () => {
	// Define the form

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	return (
		<CardWrapper
			headerLabel="Welcome back"
			backButtonLabel="Don't have an account?"
			backButtonHref="/auth/register"
			showSocialButtons={true}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit((data) => console.log(data))}
					className="space-y-6"
				>
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field, formState }) => (
								<FormItem>
									<FormLabel> Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="email"
											placeholder="alex@myemail.com"
										/>
									</FormControl>

									<FormMessage>{formState.errors.email?.message}</FormMessage>
								</FormItem>
							)}
						></FormField>
					</div>
				</form>
			</Form>
		</CardWrapper>
	);
};

export default LoginForm;
