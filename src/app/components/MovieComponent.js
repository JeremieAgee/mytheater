"use client";
import React from "react";
import { useState } from "react";
export default function MovieComponent({
	title,
	director,
	producer,
	screenTime,
	updateMovie,
	removeMovie,
}) {
	const [formActive, setFormActive] = useState(false);
	const [updatedMovie, setUpdatedMovie] = useState({
		title,
		director,
		producer,
		screenTime,
		updateMovie,
		removeMovie,
	});
	return formActive ? (
		<tr className="py-5 mx-5">
			<td>
				<input
					type="text"
					value={updatedMovie.title}
					onChange={(e) =>
						setUpdatedMovie({ ...updatedMovie, title: e.target.value })
					}
				/>
			</td>
			<td>
				<input
					type="text"
					value={updatedMovie.director}
					onChange={(e) =>
						setUpdatedMovie({ ...updatedMovie, director: e.target.value })
					}
				/>
			</td>
			<td>
				<input
					type="text"
					value={updatedMovie.producer}
					onChange={(e) =>
						setUpdatedMovie({ ...updatedMovie, producer: e.target.value })
					}
				/>
			</td>
			<td>
				<input
					type="number"
					value={updatedMovie.screenTime}
					onChange={(e) =>
						setUpdatedMovie({ ...updatedMovie, screenTime: e.target.value })
					}
				/>
			</td>
			<td>
				<button
					onClick={() => {
						setFormActive(false);
					}}
				>
					Submit
				</button>
			</td>
		</tr>
	) : (
		<tr className="py-5 mx-5">
			<td>{updatedMovie.title}</td>
			<td>{updatedMovie.director}</td>
			<td>{updatedMovie.producer}</td>
			<td>{updatedMovie.screenTime}</td>
			<td>
				<button
					onClick={() => {
						setFormActive(true);
					}}
					className="border-2 border-cyan-600 mx-5"
				>
					Edit
				</button>
			</td>
		</tr>
	);
}
