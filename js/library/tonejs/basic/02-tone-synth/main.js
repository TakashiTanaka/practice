// PLAYボタンをクリックすると再生
document.querySelector('#play').addEventListener('click', () => {
  // シンセを作成、メインのアウトプットに接続
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();

  synth.triggerAttackRelease('C4', now);
  synth.triggerRelease(now + 1);
});
