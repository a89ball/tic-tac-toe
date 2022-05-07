<script>
	export let playerOne;
	export let playerTwo;
</script>

<main>
	<section>
		<h1>Tic Tac Toe</h1>
		<p>Please enter your names</p>

		<p>May the best man win. Good luck {playerOne} and {playerTwo}</p>
	</section>
	<section class="container">
		<div class="tile"></div>
		<div class="tile"></div>
		<div class="tile"></div>
		<div class="tile"></div>
		<div class="tile"></div>
		<div class="tile"></div>
		<div class="tile"></div>
		<div class="tile"></div>
		<div class="tile"></div>
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
