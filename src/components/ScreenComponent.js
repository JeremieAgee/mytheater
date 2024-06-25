import React, { useState } from "react";

export default function ScreenComponent({
	name,
	availableSeats,
	showing,
	screenTime,
	updateScreen,
	removeScreen,
	id,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [updatedScreen, setUpdatedScreen] = useState({
		name,
		availableSeats,
		showing,
		screenTime,
		updateScreen,
		removeScreen,
		id,
	});
	function handleUpdateScreen() {
		const name = updatedScreen.name;
		const availableSeats = updatedScreen.availableSeats;
		const showing = updatedScreen.showing;
		const screenTime = updatedScreen.screenTime;
		const collectionScreen = {
			name,
			availableSeats,
			showing,
			screenTime,
			id
		};
		updateScreen(collectionScreen);
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
			<td>{id}</td>
			<td>
				<button onClick={() => setIsEditing(true)}>Edit</button>
				<button onClick={() => removeScreen(id)}>Delete</button>
			</td>
		</tr>
	);
}
