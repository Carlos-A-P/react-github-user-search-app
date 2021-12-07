import "./App.css";

function App() {
	return (
		<div className="App">
			<header>
				<div class="logo">
					<h1>devfinder</h1>
				</div>
				<div class="theme" id="theme">
					<div class="setting">
						<p class="light-setting">Light</p>
						<p class="dark-setting">Dark</p>
					</div>
				</div>
			</header>
			<footer>
				<div class="attribute">
					<p>
						Coded by{" "}
						<a href="https://carlospwd.netlify.app/" target="_blank">
							Carlos Perez
						</a>
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
