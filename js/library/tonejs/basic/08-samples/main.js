// ブラウザはユーザーがクリック等のインタラクションをしないとオーディオを再生してくれない
// ?.はオプショナルチェーンという
document.querySelector('#play')?.addEventListener('click', async () => {
  await Tone.start();

  // プレーヤーを作成
  const player = new Tone.Player(
    'https://tonejs.github.io/audio/berklee/gong_1.mp3'
  ).toDestination();

  // すべてのオーディオファイルが読み込まれたらプレーヤーをスタート
  Tone.loaded().then(() => {
    player.start();
  });
});
