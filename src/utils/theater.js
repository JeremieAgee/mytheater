
class Screen {
	constructor(name, availableSeats, showing, screenTime, id) {
		this.name = name;
		this.availableSeats = availableSeats;
		this.showing = showing;
		this.screenTime = screenTime;
		this.id = id;
		this.takeSeat = () => {
			this.availableSeats -= 1;
		};
		this.addSeat = () => {
			this.availableSeats += 1;
		};
		this.updateShowing = (movieTitle) => {
			this.currentlyShowing = movieTitle;
		};
		this.updateLength = (newScreenTime) => {
			this.screenTime = newScreenTime;
		}
	}
}
class Theater {
	constructor(name, screens) {
		this.name = name;
		this.screens = screens;
		this.addScreen = function (newScreen) {
			const oldScreen = this.screens.find((screen) => {
				screen.name == newScreen.name;
			});
			if (oldScreen == undefined) {
				this.screens.push(newScreen);
			} else {
				alert(`${newScreen.name} is already in system`);
			}
		};
		this.removeScreen = function (screenName) {
			const matchedScreen = this.screens.find((screen) => {
				screen.name.toLowerCase() == screenName.toLowerCase();
			});
			this.screens.splice(matchedScreen, 1);
		};
	}
}
export { Screen, Theater };
