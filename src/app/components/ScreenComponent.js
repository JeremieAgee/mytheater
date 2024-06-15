import React from "react";
import { useState } from "react";
export default function ScreenComponent({
	name,
	availableSeats,
	currentlyShowing,
	updateShowing,
}) {
	const [isEditing, setIsEditing] = useState(false);
	return isEditing ? (
		<tr className="py-5 mx-5">
			<td>
				<input type="text" />
			</td>
			<td>
				<input type="text" />
			</td>
			<td>
				<input type="text" />
			</td>
			<td>
				<button type="submit">Submit</button>
			</td>
		</tr>
	) : (
		<tr>
			<td>{name}</td>
			<td>{availableSeats}</td>
			<td>{currentlyShowing}</td>
			<td>
				<button
					onClick={() => {
						setIsEditing(true);
					}}
				>
					Edit
				</button>
			</td>
		</tr>
	);
}
