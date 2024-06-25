import Image from "next/image";
export default function Home() {
	return (
		<main style={{minHeight: "75vh"}}>
			<h3 className="flex text-xl justify-center">Welcome</h3>
			<p className="m-12">
				This is my theater manager you can use this to track available seats and
				show what movies are playing.
			</p>
		</main>
	);
}
