<script lang="ts">
	import { accessToken, refreshToken, state } from '$lib/stores/spotify_authorization_store';
	import { onMount } from 'svelte';
	export let data: { state: string; accessToken: string; refreshToken: string };

	onMount(async () => {
		const originalState = $state;

		const responsedState = data.state;
		if (originalState !== responsedState) {
			// todo: エラー画面に飛ばすかエラーをthrowする
		}
		accessToken.set(data.accessToken);
		refreshToken.set(data.accessToken);
	});
</script>

<svelte:head>
	<title>Authorized</title>
</svelte:head>

<main>
	<h1>Authorized</h1>
	Spotify認証ページ
	<h2>State</h2>
	{$state}
	<h2>Token</h2>
	{$accessToken}
</main>

<style>
</style>
