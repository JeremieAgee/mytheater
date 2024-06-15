"use client";
import React, { useState } from "react";
import { Movie, Screen, Theater } from "../../../utils/theater";
import MovieComponent from "../components/MovieComponent";
import ScreenComponent from "../components/ScreenComponent";
export default function ManagementPage() {
	const [theater, setTheater] = useState(
		new Theater(
			"Jeremie's Movie Theater",
			[
				new Movie("New Movie", "Bob", "Joe", 125),
				new Movie("New Movie2", "Bob", "Joe", 100),
				new Movie("New Movie3", "Bob", "Joe", 75),
				new Movie("New Movie4", "Bob", "Joe", 65),
			],
			[
				new Screen("A1", 25),
				new Screen("A2", 25),
				new Screen("A3", 30),
				new Screen("A4", 30),
			]
		)
	);
	return (
		<main className="">
			<table className="">
				<h2>Movies</h2>
				<thead>
					<tr>
						<th>Title</th>
						<th>Director</th>
						<th>Producer</th>
						<th>Screen Time</th>
					</tr>
				</thead>
				<tbody>{theater.showAllMovies()}</tbody>
			</table>
			<table className="">
				<h2>Screens</h2>
				<thead>
					<tr>
						<th>Name</th>
						<th>Seats Available</th>
						<th>Currently Showing</th>
					</tr>
				</thead>
				<tbody>{theater.showAllScreens()}</tbody>
			</table>
		</main>
	);
}
