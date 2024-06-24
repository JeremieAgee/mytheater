import React, { useState } from "react";
import { Movie } from "../utils/theater";
export default function MovieComponent({
	title,
	screenTime,
	updateMovie,
	removeMovie,
}) {
	const [formActive, setFormActive] = useState(false);
	const [updatedMovie, setUpdatedMovie] = useState({
		title,
		screenTime,
		updateMovie,
		removeMovie,
	});
	function handleUpdateMovie() {
		const newMovie = new Movie(updatedMovie.title, updatedMovie.screenTime);
		console.log(newMovie);
		setUpdatedMovie(newMovie);
		updateMovie(newMovie);
		setFormActive(false);
	}
	return formActive ? (
		<tr className="py-5 mx-5">
			<td>
				<input
					type="text"
					value={updatedMovie.title}
					onChange={(e) =>
						setUpdatedMovie({ ...updatedMovie, title: e.target.value })
					}
					required
				/>
			</td>
			<td>
				<input
					type="number"
					value={updatedMovie.screenTime}
					onChange={(e) =>
						setUpdatedMovie({ ...updatedMovie, screenTime: e.target.value })
					}
					required
				/>
			</td>
			<td>
				<button onClick={handleUpdateMovie}>Submit</button>
			</td>
		</tr>
	) : (
		<tr className="py-5 mx-5">
			<td>{title}</td>
			<td>{screenTime}</td>
			<td>
				<button
					onClick={() => setFormActive(true)}
					className="border-2 border-cyan-600 mx-5"
				>
					Edit
				</button>
				<button
					onClick={() => removeMovie(title)}
					className="border-2 border-cyan-600 mx-5"
				>
					Delete
				</button>
			</td>
		</tr>
	);
}
