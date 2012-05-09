class Timer
  constructor: (@time) ->
    @callbacks = []

  addListener: (callback) ->
    @callbacks.push(callback)

  start: ->
    composed = _.compose(@callbacks...)
    @id = setTimeout (-> composed.call()), @time
    return

  stop: ->
    clearTimeout(@id)
    return
