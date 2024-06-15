import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Theater Management",
	description: "Application to manage a Theater",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header>
					<h1 className="text-center py-5 text-3xl">Theater Manager</h1>
					<nav className="text-center text-red-600">
						<Link className="px-5" href="/">
							Home
						</Link>
						<Link className="px-5" href="management">
							Management
						</Link>
					</nav>
				</header>
		
				{children}
				<footer className="text-center bottom-1">&copy; Jeremie Agee 2024</footer>
			</body>
		</html>
	);
}
