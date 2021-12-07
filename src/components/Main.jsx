import React from "react";

function Main() {
	return (
		<main>
			<form class="">
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Search GitHub username..."
				/>
				<span>No results</span>
				<img src="assets/icon-search.svg" alt="search" />
				<button type="submit">Search</button>
			</form>
			<div class="box-wrap">
				<div class="box-header">
					<div class="profile-picture" id="profile-picture">
						<img src="assets/Bitmap.png" alt="Profile Picture" />
					</div>
					<div class="user-info">
						<div class="left">
							<h2 id="name">The Octocat</h2>
							<h3 class="user" id="GitHub-username">
								<a href="#">@octocat</a>
							</h3>
						</div>
						<p class="joined" id="joined">
							Joined 25 Jan 2011
						</p>
					</div>
				</div>
				<div class="bio">
					<p id="bio">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
						quisquam delectus nostrum.
					</p>
				</div>
				<div class="stats">
					<div class="stat-1">
						<h4>Repos</h4>
						<div class="stat-num" id="repo">
							8
						</div>
					</div>
					<div class="stat-2">
						<h4>Followers</h4>
						<div class="stat-num" id="followers">
							3938
						</div>
					</div>
					<div class="stat-3">
						<h4>Following</h4>
						<div class="stat-num" id="following">
							9
						</div>
					</div>
				</div>
				<div class="social">
					<div class="link location">
						<div>
							<img src="assets/icon-location.svg" alt="location" />
						</div>
						<p id="location">San Francisco</p>
					</div>
					<div class="link cite">
						<div>
							<img src="assets/icon-website.svg" alt="website" />
						</div>
						<p id="cite">https://github.blog</p>
					</div>
					<div class="link twitter unavailable">
						<div>
							<img src="assets/icon-twitter.svg" alt="twitter" />
						</div>
						<p id="twitter">Not Available</p>
					</div>
					<div class="link company">
						<div>
							<img src="assets/icon-company.svg" alt="company" />
						</div>
						<p id="company">@github</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;
