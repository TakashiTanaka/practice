// PLAYボタンをクリックすると再生
document.querySelector('#play').addEventListener('click', () => {
  // シンセを作成、メインのアウトプットに接続
  const synth = new Tone.Synth().toDestination();

  // Cを8nの長さで再生
  synth.triggerAttackRelease('C4', '8n');
});
