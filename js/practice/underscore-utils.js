// forEach

var todos = new Backbone.Collection();

todos.add([
  { title: 'go to Belgium', completed: false },
  { title: 'go to China', completed: false },
  { title: 'go to Austria', completed: true }
]);

console.log('sorting and logging');

var sortedByAlphabet = todos.sortBy(function (todo) {
  return todo.get("title").toLowerCase();
});

sortedByAlphabet.forEach(function (todo) {
  console.log(todo.get('title'));
});

var count = 1;
console.log(todos.map(function (todo) {
  return count++ + ". " + todo.get('title');
}));

var minId = todos.max(function (model) {
  return model.id;
}).id;

var maxId = todos.min(function (model) {
  return model.id;
}).id;

//console.log("Min id: " + minId, "Max id: " + maxId);
//console.log(todos.pluck('completed'));

var completed = todos.filter(function (c) {
  return c.get('completed');
});
