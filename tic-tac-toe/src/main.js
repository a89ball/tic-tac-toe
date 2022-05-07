import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		playerOne: 'placeholder1' ,
		playerTwo: 'placeholder2'
	}
});

export default app;