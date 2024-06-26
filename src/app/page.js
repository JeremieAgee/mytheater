
"use client";
import React, { useState, useEffect } from "react";
import { Screen, Theater } from "../utils/theater";
import ScreenComponent from "../components/ScreenComponent";
import { db, getCollection } from "../../firebase.config";
export default function Home() {
	const [theater, setTheater] = useState(
		new Theater("Jeremie's Movie Theater", [])
	);
	useEffect(() => {
		async function fetchData() {
			try {
				const screensCollection = await getCollection(db, "Screens");
				const newScreens = screensCollection.map((doc) => {
					return new Screen(
						doc.data.name,
						doc.data.availableSeats,
						doc.data.showing,
						doc.data.screenTime,
						doc.id
					);
				});

				setTheater(new Theater(theater.name, newScreens));
			} catch (error) {
				console.log("Failed fetching data", error);
			}
		}
		fetchData();
		return () => {
			console.log("get all docs cleanup");
		};
	}, []);

	return (
		<main style={{ minHeight: "75vh" }}>
			<h3 className="flex text-xl justify-center">Welcome</h3>
			<p className="m-12">
				This is my theater manager you can use this to track available seats and
				show what movies are playing.
			</p>
			<table className="border border-orange-400 table-auto">
				<thead>
					<tr>
						<th>Name</th>
						<th>Seats</th>
						<th>Showing</th>
						<th>Screen Time</th>
					</tr>
				</thead>
				<tbody>
					{theater.screens.map((screen) => {
						return (
							<ScreenComponent
								key={screen.id}
								name={screen.name}
								availableSeats={screen.availableSeats}
								showing={screen.showing}
								screenTime={screen.screenTime}
								id={screen.id}
							/>
						);
					})}
				</tbody>
			</table>
		</main>
	);
}
