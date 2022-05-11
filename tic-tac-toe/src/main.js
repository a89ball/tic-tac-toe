import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		playerOne: 'John' ,
		playerTwo: 'Lee'
	}
});

export default app;