import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/loginButton";

export default function Home() {
	return (
		<main className="flex h-full items-center justify-center text-center">
			<div className="space-y-6">
				<h1 className="text-6xl font-semibold">🔐 Auth</h1>
				<p className="text-lg">
					A simple authentication system built <br />
					with Next.js, Prisma, and Tailwind CSS.
				</p>
				<div>
					<LoginButton mode="login">
						<Button variant="secondary" size="lg">
							Login
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
