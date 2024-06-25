"use client";
import React, { useState, useEffect } from "react";
import { Screen, Theater } from "../../utils/theater";
import ScreenComponent from "../../components/ScreenComponent";
//
import {
	db,
	getCollection,
	addToCollection,
	removeFromCollection,
	updateCollectionItem,
} from "../../../firebase.config";

export default function ManagementPage() {
	const [theater, setTheater] = useState(
		new Theater("Jeremie's Movie Theater", [
			// new Screen("A1", 75, "How To Train Your Dragon", 98),
			// new Screen("A2", 25, "New Movie2", 100),
			// new Screen("A3", 30, "New Movie3", 75),
			// new Screen("A4", 30, "New Movie4", 65),
		])
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

	function handleAddScreen(e) {
		e.preventDefault();
		const name = e.target.name.value;
		const availableSeats = e.target.availableSeats.value;
		const showing = e.target.showing.value;
		const screenTime = e.target.screenTime.value;
		const screenToAdd = {
			name,
			availableSeats,
			showing,
			screenTime,
		};
		const screenId = addToCollection(db, "Screens", screenToAdd);
		const newScreen = new Screen(
			name,
			availableSeats,
			showing,
			screenTime,
			screenId
		);
		const newTheater = new Theater(theater.name, theater.screens);
		newTheater.addScreen(newScreen);
		setTheater(newTheater);
		console.log(`${newScreen} was added`);
	}
	function removeScreen(screenId) {
		const newTheater = new Theater(theater.name, theater.screens);
		newTheater.removeScreen(screenId);
		removeFromCollection(db, "Screens", screenId);
		setTheater(newTheater);
	}
	function updateScreen(screenToUpdate) {
		const newScreens = theater.screens.map((screen) => {
			return screenToUpdate.id === screen.id ? screenToUpdate : screen;
		});
		const newTheater = new Theater(theater.name, newScreens);
		setTheater(newTheater);
		updateCollectionItem(db, "Screens", screenToUpdate, screenToUpdate.id);
	}
	return (
		<main style={{minHeight: "75vh"}} className="">
			<form onSubmit={handleAddScreen}>
				<h3>Add Screen</h3>
				<input placeholder="Name" type="text" name="name"></input>
				<input
					placeholder="Available Seats"
					type="number"
					name="availableSeats"
				></input>
				<input placeholder="Movie Title" type="text" name="showing"></input>
				<input
					placeholder="Screen Time"
					type="number"
					name="screenTime"
				></input>
				<button type="submit">Submit</button>
			</form>
			<table className="">
				<thead>
					<tr>
						<th>Name</th>
						<th>Seats Available</th>
						<th>Showing</th>
						<th>Screen Time</th>
						<th>Id</th>
						<th>Edit/Remove</th>
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
								updateScreen={updateScreen}
								removeScreen={removeScreen}
								id={screen.id}
							/>
						);
					})}
				</tbody>
			</table>
		</main>
	);
}
