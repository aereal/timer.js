class Timer
  constructor: (@time) ->
    @callbacks = []

  addListener: (callback) ->
    @callbacks.push(callback)

  removeListener: (callback) ->
    @callbacks = @callbacks.filter((fn) -> fn != callback)

  start: ->
    callbacks = @callbacks
    self = @
    firedAt = new Date
    @id = setTimeout ->
      cb(self: self, realErapsed: (new Date) - firedAt) for cb in callbacks
    , @time
    return

  stop: ->
    clearTimeout(@id)
    return
