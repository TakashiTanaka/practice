// PLAYボタンをクリックすると再生
document.querySelector('#play').addEventListener('click', () => {
  // シンセを作成、メインのアウトプットに接続
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();

  // 第1引数は音階、第2引数はデュレーション、第3引数は鳴らすタイミング
  synth.triggerAttackRelease('C4', '8n', now);
  synth.triggerAttackRelease('E4', '8n', now + 0.5);
  synth.triggerAttackRelease('G4', '8n', now + 1);
});
