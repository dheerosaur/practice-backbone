var Todo = new Backbone.Model();

var Todos = new Backbone.Collection([Todo])
.on('reset', function (Todos, options) {

  if (Todos.models.length == 0) {
    console.log('Retiring');
    return;
  }

  console.log('\nForget all these\n');
  _.each(options.previousModels, function (model) {
    console.log(' - ', model.get('title'));
  }, this);

  console.log('\nNow do these\n');
  _.each(Todos.models, function (model) {
    console.log(' - ', model.get('title'));
  }, this);

});

// Todos.reset([]);

Todos.add([
  { id:1, title: 'go to Jamaica', completed: false },
  { id:2, title: 'go to India', completed: false },
  { id:3, title: 'go to China', completed: false }
])

Todos.on("add", function (model) {
  console.log("Added " + model.get('title'));
});

Todos.on("remove", function (model) {
  console.log("Remove " + model.get('title'));
});

Todos.on("change:completed", function (model) {
  console.log("Completed " + model.get('title'));
});

Todos.set([
  { id:1, title: 'go to Jamaica', completed: true },
  { id:2, title: 'go to India', completed: false },
  { id:4, title: 'go to Japan', completed: false }
]);

Todos.reset([
  { id:1, title: 'stay Home', completed: false }
]);

Todos.reset()
