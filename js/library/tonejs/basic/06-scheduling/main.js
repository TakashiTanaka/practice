// ブラウザはユーザーがクリック等のインタラクションをしないとオーディオを再生してくれない
// ?.はオプショナルチェーンという
document.querySelector('#play')?.addEventListener('click', async () => {
  await Tone.start();

  // 2つのシンセを作成
  const synthA = new Tone.FMSynth().toDestination();
  const synthB = new Tone.AMSynth().toDestination();

  // 4分音符を鳴らす
  const loopA = new Tone.Loop(time => {
    synthA.triggerAttackRelease('C2', '8n', time);
  }, '4n').start(0);

  // 8分音符分ずらして、4分音符を鳴らす
  const loopB = new Tone.Loop(time => {
    synthB.triggerAttackRelease('C4', '8n', time);
  }, '4n').start('8n');

  // loopをまとめてスタートする
  Tone.Transport.start();

  // bpmを160に設定
  Tone.Transport.bpm.value = 160;

  // 10秒かけて800bpmに変化させる
  // Tone.Transport.bpm.rampTo(800, 10);
});
