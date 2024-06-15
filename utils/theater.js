import MovieComponent from "../src/app/components/MovieComponent";
import ScreenComponent from "../src/app/components/ScreenComponent";
class Movie {
	constructor(title, director, producer, screenTime) {
		this.title = title;
		(this.director = director),
			(this.producer = producer),
			(this.screenTime = screenTime);
	}
}
class Screen {
	constructor(name, availableSeats) {
		this.name = name;
		this.availableSeats = availableSeats;
		this.currentlyShowing = "Nothing";
		this.takeSeat = () => {
			this.availableSeats -= 1;
		};
		this.addSeat = () => {
			this.availableSeats += 1;
		};
		this.setMovie = (movieTitle) => {
			this.currentlyShowing = movieTitle;
		};
	}
}
class Theater {
	constructor(name, movies, screens) {
		this.name = name;
		this.movies = movies;
		this.screens = screens;
		this.addScreen = (newScreen) => {
			const oldScreen = this.screens.find((screen) => {
				screen.name == newScreen.name;
			});
			if (oldScreen == undefined) {
				this.screens.push(newScreen);
			} else {
				alert(`${newScreen.name} is already in system`);
			}
		};
		this.removeScreen = (screenName) => {
			const matchedScreen = this.screens.find((screen) => {
				screen.name.toLowerCase() == screenName.toLowerCase();
			});
			if (matchedScreen != undefined) {
				this.screens.splice(matchedScreen, 1);
			} else {
				alert(`No screens with name ${screenName}`);
			}
		};
		this.findScreen = (screenName) => {
			const currentScreen = this.screens.find((screen) => {
				screen.name.toLowerCase() == screenName;
			});
			if (currentScreen != undefined) {
				return (
					<ScreenComponent
						name={currentScreen.name}
						availableSeats={currentScreen.availableSeats}
						currentlyShowing={currentScreen.currentlyShowing}
					/>
				);
			} else {
				alert(
					`${screenName} does not exist please try a different screen name`
				);
			}
		};
		this.addMovie = (newMovie) => {
			const oldMovie = this.movies.find((movie) => {
				newMovie.title.toLowerCase() == movie.title.toLowerCase();
			});
			if (oldMovie == undefined) {
				this.movies.push(newMovie);
				return (
					<MovieComponent
						title={newMovie.title}
						director={newMovie.director}
						producer={newMovie.producer}
						screenTime={newMovie.screenTime}
					/>
				);
			} else {
				alert(`${newMovie.name} already in ${this.name}`);
			}
		};
		this.removeMovie = (movieTitle) => {
			const movieToRemove = this.movies.find((movie) => {
				movieTitle.toLowerCase() == movie.title.toLowerCase();
			});
			if (movieToRemove == undefined) {
				alert(`${movieTitle} is not in ${this.name}`);
			} else {
				this.movies.splice(movieToRemove, 1);
			}
		};
		this.findMovie = (movieTitle) => {
			const matchedMovie = this.find((movie) => {
				movie.title.toLowerCase() == movieTitle.toLowerCase();
			});
			if (matchedMovie != undefined) {
				return matchedMovie;
			} else {
				alert(`${movieTitle} is not available here`);
			}
		};
		this.showAllMovies = function () {
			return this.movies.map((movie) => {
				return (
					<MovieComponent
						title={movie.title}
						director={movie.director}
						producer={movie.producer}
						screenTime={movie.screenTime}
					/>
				);
			});
		};
		this.showAllScreens = function () {
			return this.screens.map((screen) => {
				return (
					<ScreenComponent
						name={screen.name}
						availableSeats={screen.availableSeats}
						currentlyShowing={screen.currentlyShowing}
					/>
				);
			});
		};
	}
}
export { Movie, Screen, Theater };
