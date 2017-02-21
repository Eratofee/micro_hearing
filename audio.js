$('b').click(function() {

    $('body').css('background-color', "rgb(100, 100, 100)");
});



function playInterval(ratio) {
  context = new AudioContext;
  oscillator1 = context.createOscillator();
  oscillator1.frequency.value = 600;
  oscillator1.connect(context.destination);
  oscillator1.start(0);
  oscillator1.stop(0.5);
  oscillator2 = context.createOscillator();
  oscillator2.frequency.value = 600*ratio;
  oscillator2.connect(context.destination);
  oscillator2.start(0);
  oscillator2.stop(0.5);
}
