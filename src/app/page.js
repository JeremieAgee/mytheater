import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h3>Welcome</h3>
			<p>
				This is my theater manager you can use this to track available seats and
				show what movies are available.
			</p>
		</main>
	);
}
