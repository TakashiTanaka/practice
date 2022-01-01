document.querySelector('#play')?.addEventListener('click', async () => {
  await Tone.start();

  const synth = new Tone.PolySynth(Tone.Synth);
  const now = Tone.now();

  const loopA = new Tone.Loop(time => {
    synth.triggerAttackRelease('D4', '8n', time);
    synth.triggerAttackRelease('F4', '8n', time);
    synth.triggerAttackRelease('A4', '8n', time);
    synth.triggerAttackRelease('C5', '8n', time);
    synth.triggerAttackRelease('E5', '8n', time);
  }, '1n').start(0);

  // loopをまとめてスタートする
  Tone.Transport.start();

  //create a distortion effect
  const distortion = new Tone.Distortion(0.5).toDestination();

  //connect a player to the distortion
  synth.connect(distortion);

  // bpmを160に設定
  Tone.Transport.bpm.value = 160;
});
