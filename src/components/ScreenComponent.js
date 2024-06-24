import React, { useState } from "react";
import { Screen } from "../utils/theater";
export default function ScreenComponent({
	name,
	availableSeats,
	showing,
	screenTime,
	updateScreen,
	removeScreen,
	id
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [currentScreen, setCurrentScreen] = useState({
		name,
		availableSeats,
		showing,
		screenTime,
		id
	});
	const [updatedScreen, setUpdatedScreen] = useState({
		name,
		availableSeats,
		showing,
		screenTime,
		updateScreen,
		removeScreen,
		id
	});
	function handleUpdateScreen() {
		const newScreen = new Screen(
			updatedScreen.name,
			updatedScreen.availableSeats,
			updatedScreen.showing,
			updatedScreen.screenTime,
			updatedScreen.updateScreen,
			updatedScreen.removeScreen,
			updatedScreen.id,
		);
		const name = updateScreen.name;
		const availableSeats = updateScreen.availableSeats;
		const showing = updateScreen.showing;
		const screenTime = updateScreen.screenTime;
		const collectionScreen = {
			name,
			availableSeats,
			showing,
			screenTime,
		};
		setUpdatedScreen(newScreen);
		updateScreen(newScreen);
		setCurrentScreen(collectionScreen)
		setIsEditing(false);
	}
	return isEditing ? (
		<tr className="py-5 mx-5">
			<td>
				<input
					type="text"
					value={updatedScreen.name}
					onChange={(e) =>
						setUpdatedScreen({ ...updatedScreen, name: e.target.value })
					}
					required
				/>
			</td>
			<td>
				<input
					type="number"
					value={updatedScreen.availableSeats}
					onChange={(e) =>
						setUpdatedScreen({
							...updatedScreen,
							availableSeats: e.target.value,
						})
					}
					required
				/>
			</td>
			<td>
				<input
					type="text"
					value={updatedScreen.showing}
					onChange={(e) =>
						setUpdatedScreen({
							...updatedScreen,
							showing: e.target.value,
						})
					}
					required
				/>
				<input
					type="number"
					value={updatedScreen.screenTime}
					onChange={(e) =>
						setUpdatedScreen({
							...updatedScreen,
							screenTime: e.target.value,
						})
					}
					required
				/>
			</td>
			<td>
				<button type="button" onClick={handleUpdateScreen}>
					Submit
				</button>
			</td>
		</tr>
	) : (
		<tr>
			<td>{name}</td>
			<td>{availableSeats}</td>
			<td>{showing}</td>
			<td>{screenTime}</td>
			<td>
				<button onClick={() => setIsEditing(true)}>Edit</button>
				<button onClick={() => removeScreen(id)}>Delete</button>
			</td>
		</tr>
	);
}
