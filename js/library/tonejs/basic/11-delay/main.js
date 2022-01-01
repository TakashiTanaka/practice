document.querySelector('#play')?.addEventListener('click', async () => {
  await Tone.start();

  const synth = new Tone.PolySynth(Tone.Synth);

  const loopA = new Tone.Loop(time => {
    synth.triggerAttackRelease('D4', '8n', time);
    synth.triggerAttackRelease('F4', '8n', time);
    synth.triggerAttackRelease('A4', '8n', time);
    synth.triggerAttackRelease('C5', '8n', time);
    synth.triggerAttackRelease('E5', '8n', time);
  }, '1n').start(0);

  // loopをまとめてスタートする
  Tone.Transport.start();

  const filter = new Tone.Filter(400, 'lowpass').toDestination();
  const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();

  synth.connect(filter);
  synth.connect(feedbackDelay);

  // bpmを160に設定
  Tone.Transport.bpm.value = 160;
});
