<script>
	export let playerOne;
	export let playerTwo;
	window.addEventListener("DOMContentLoaded", () => {
		const tiles = Array.from(document.querySelectorAll(".tile"));
		let gameActive = true;
		let board = ["", "", "", "", "", "", "", "", ""];
		let currentPlayer = "X";




		let user1 = {
			player: document.getElementById('usr1').value,
			
		}; 
		let user2= {
			player: document.getElementById('usr2').value,
	
		}

		let users = user1 + user2;


	localStorage.setItem('UserList', JSON.stringify(users));


		const player1Won = "PLAYER1_WON";
		const player2Won = "PLAYER2_WON";
		const draw = "DRAW";

		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		function checkForWinner() {
			winningCombinations.forEach(function (combination) {
				let check = combination.every(
					(index) => tiles[index].innerText.trim() == currentPlayer
				);
				if (check) {
					highlightTiles(combination);
					alert(currentPlayer + " has won, press Reset button to restart the game");
					
				}

			
			});

			
		}

		function highlightTiles(combination) {
			combination.forEach(function (index) {
				tiles[index].classList.add("highlight");
			});
		}
		tiles.forEach(function (tile) {
			tile.addEventListener("click", function () {
				if (tile.innerText.trim() != "") return;
				tile.innerText = currentPlayer;
				checkForWinner();
				currentPlayer = currentPlayer == "X" ? "O" : "X";
			});
		});




		//let flag = false;

		//checkForWinner = () => {
		//if (check) {
		//highlightCells(combination);
		//flag = true; // make the flag true, if player has won.
		//}
		//};

		//tiles.forEach((tile) => {
		//if (flag) {
		//	return;
				
		
		//	else {
		//	tile.innerHTML = currentPlayer;
//
		//	checkForWinner(); // before that create winning combinations..

		//	currentPlayer =
		//	currentPlayer == "X"
		//? "O"
		//: "X";
		//	}
		
		//});
	});
</script>

<main>
	<section>
		<h1>Tic Tac Toe</h1>
		<p>Please enter your names</p>

		<div class="form-group">
			<label for="usr">Player One Name:</label>
			<input type="text" class="form-control" id="usr1" />
			<br /><br />
			<button onclick="store()">Add Player</button>
		</div>

		<div class="form-group">
			<label for="usr">Player Two Name:</label>
			<input type="text" class="form-control" id="usr2" />
			<br /><br />
			<button onclick="store()">Add Player</button>
		</div>

		<p>May the best man win. Good luck {playerOne} and {playerTwo}</p>
	</section>
	<section class="container">
		<div class="tile" />
		<div class="tile" />
		<div class="tile" />
		<div class="tile" />
		<div class="tile" />
		<div class="tile" />
		<div class="tile" />
		<div class="tile" />
		<div class="tile" />
	</section>
	<section class="announcer hide" />
	<section class="controls">
		<button
			id="reset"
			onclick="document.getElementByClass(
		 'tile').value = ''">Reset</button
		>
	</section>
	<section>
		<div class="scoreboard">
			<div class="socreboard__name">{playerOne}</div>
			<div class="socreboard__name">{playerTwo}</div>
			<div id="socreboard__scoreX">0</div>
			<div id="socreboard__scoreO">2</div>
		</div>
	</section>
</main>

<style>
	main {
		background-color: bisque;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #311004;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
