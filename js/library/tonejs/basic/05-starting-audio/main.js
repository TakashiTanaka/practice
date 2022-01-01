// ブラウザはユーザーがクリック等のインタラクションをしないとオーディオを再生してくれない
// ?.はオプショナルチェーンという
document.querySelector('#play')?.addEventListener('click', async () => {
  await Tone.start();
  console.log('audio is ready');
});
