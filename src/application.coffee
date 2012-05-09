timer = new Timer(1000)
timer.addListener (e) ->
  alert(e.realErapsed)
  e.self.start()
timer.start()

window.addEventListener 'load', ->
  console.log('Register callbacks')

  document.body.addEventListener 'click', ->
    console.log('Stopping timer...')
    timer.stop()
  , false

  # document.body.addEventListener 'doubleclick', ->
  #   console.log('Start timer')
  #   timer.start()
  # , false
