var timer;

timer = new Timer(1000);

timer.addListener(function(e) {
  alert(e.realErapsed);
  return e.self.start();
});

timer.start();

window.addEventListener('load', function() {
  console.log('Register callbacks');
  return document.body.addEventListener('click', function() {
    console.log('Stopping timer...');
    return timer.stop();
  }, false);
});
