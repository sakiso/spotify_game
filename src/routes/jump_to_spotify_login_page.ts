import { state } from '$lib/stores/spotify_authorization_store';

export async function jumpToSpotifyLoginPage(client_id: string) {
  const spotifyAuthorizeBaseUrl = 'https://accounts.spotify.com/authorize?'
  const stateStr = Math.random().toString(36).slice(-5)

  //todo: リダイレクト後にstateが一致しない場合はエラーにする
    const params = {
      response_type: 'code',
      client_id: client_id,
      state: stateStr, //todo: unsubscribe必要？
      scope: 'streaming user-library-read',
      redirect_uri: 'http://localhost:5173/authorize'
      //todo: 本番移行したときドメインが自動で変わるようにする
    };
    
  // note: 認証リダイレクト後に本当に同一ユーザか判定するためstoreにstateを保存しておく
  state.set(stateStr);

  const queryParams = new URLSearchParams(params).toString()
  window.location.href = `${spotifyAuthorizeBaseUrl}${queryParams}`;
}
