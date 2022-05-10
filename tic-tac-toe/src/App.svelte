<script>
	export let playerOne;
	export let playerTwo;
	window.addEventListener("DOMContentLoaded", () => {
		const tiles = Array.from(document.querySelectorAll(".tile"));
		const playerDisplay = document.querySelector(".display-player");
		const resetButton = document.querySelector("#reset");
		const announcer = document.querySelector(".announcer");

		let currentPlayer = "X";
		let board = ["", "", "", "", "", "", "", "", ""];
		let isGameRunning = true;

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

		// Using a switch statement in order to announce the outcome of the game

		const announce = (type) => {
        switch(type){
            case PLAYER2_WON:
                announcer.innerHTML = 'Player <span class="player1">O</span> Won';
                break;
            case PLAYER1_WON:
                announcer.innerHTML = 'Player <span class="player2">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');

		const changePlayer = () => {
			playerDisplay.classList.remove(`player${currentPlayer}`);
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
			playerDisplay.innerText = currentPlayer;
			playerDisplay.classList.add(`player${currentPlayer}`); 
		}
		// If both conditions are true, current player will be given a turn and the game continues
		const userAction = (tile, index) => {
			if (isValidAction(tile) && isGameRunning) {
				tile.innerText = currentPlayer;
				tile.classList.add(`player${currentPlayer}`);
				updateBoard(index);
				handleResultValidation();
				changePlayer();
			}
		};

	}


	});
</script>

<main>
	<section>
		<h1>Tic Tac Toe</h1>
		<p>Please enter your names</p>

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
		<button id="reset">Reset</button>
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
