document.querySelector('#play')?.addEventListener('click', async () => {
  await Tone.start();

  // オシレーターを作成
  const osc = new Tone.Oscillator().toDestination();

  // start at "C4"
  osc.frequency.value = 'C4';

  // ramp to "C2" over 2 seconds
  osc.frequency.rampTo('C2', 2);

  // start the oscillator for 2 seconds
  osc.start().stop('+3');
});
