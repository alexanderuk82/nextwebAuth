import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	console.log("Hello world for console server");
	return (
		<div>
			<p className="font-bold text-8xl">Hello world</p>

			<Button variant="custom" size="lg">
				<Link href="#">Login</Link>
			</Button>
		</div>
	);
}
