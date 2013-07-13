var TodoCounter = {counterA: 0, counterB: 0};

_.extend(TodoCounter, Backbone.Events);

var incrA = function () {
  TodoCounter.counterA += 1;
  TodoCounter.trigger('event');
};

var incrB = function () {
  TodoCounter.counterB += 1;
};


TodoCounter.once('event', incrA);
TodoCounter.once('event', incrB);

TodoCounter.trigger('event');

console.log(TodoCounter.counterA, TodoCounter.counterB);
