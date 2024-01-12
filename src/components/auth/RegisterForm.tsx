"use client";

import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { Input } from "../ui/input";
import FormError from "../form-error";
import FormSucess from "../form-success";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { useTransition, useState } from "react";
import Register from "@/actions/register";

const RegisterForm = () => {
	//Defining the state of the form success
	const [formSuccess, setFormSuccess] = useState<string | undefined>("");

	//Defining the state of the form error
	const [formError, setFormError] = useState<string | undefined>("");

	// Define the transition can you tell you when the form is pending
	const [isPending, startTransition] = useTransition();

	// Define the form

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			password: "",
			name: "",
		},
	});

	const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
		// Start the transition
		setFormError("");
		setFormSuccess("");

		startTransition(() => {
			Register(data).then((data) => {
				if (data.success) {
					setFormSuccess(data.message);
					setFormError(undefined);
				} else {
					setFormError(data.message);
					setFormSuccess(undefined);
				}
			});
		});
	};

	return (
		<CardWrapper
			headerLabel="Create an account"
			backButtonLabel="Do you have an account?"
			backButtonHref="/auth/login"
			showSocialButtons={true}
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						{/* Input field sections */}

						<FormField
							control={form.control}
							name="name"
							render={({ field, formState }) => (
								<FormItem>
									<FormLabel>First name</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											type="text"
											placeholder="Type your first name"
										/>
									</FormControl>

									<FormMessage>{formState.errors.name?.message}</FormMessage>
								</FormItem>
							)}
						></FormField>
						<FormField
							control={form.control}
							name="email"
							render={({ field, formState }) => (
								<FormItem>
									<FormLabel> Email</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											type="email"
											placeholder="alex@myemail.com"
										/>
									</FormControl>

									<FormMessage>{formState.errors.email?.message}</FormMessage>
								</FormItem>
							)}
						></FormField>
						<FormField
							control={form.control}
							name="password"
							render={({ field, formState }) => (
								<FormItem>
									<FormLabel> Password</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="password"
											placeholder="********"
											disabled={isPending}
										/>
									</FormControl>

									<FormMessage>
										{formState.errors.password?.message}
									</FormMessage>
								</FormItem>
							)}
						></FormField>
					</div>

					{/* Form error */}

					<FormError message={formError} />

					{/* Form success */}

					<FormSucess message={formSuccess} />

					{/* Submit button form */}

					<Button className="w-full " type="submit" disabled={isPending}>
						Register
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};

export default RegisterForm;
