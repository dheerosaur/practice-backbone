var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },
  
  idAttribute: 'title',
});

var TodoCollection = Backbone.Collection.extend({
  model: Todo,

  initialize: function (name) {

    this.on('add', function (todo) {
      console.log("Added - ", todo.attributes);
    });

    this.on('remove', function (todo) {
      console.log("Removed - ", todo.attributes);
    });
  }
});

var todo1 = new Todo({title: 'Task 1'});
var todos = new TodoCollection([todo1]);

var todo2 = new Todo({title: 'Task 2'});
var todo3 = new Todo({title: 'Task 3'});
var todo4 = new Todo({title: 'Task 4'});
var todo5 = new Todo({title: 'Task 5'});

todos.add(todo2);
todos.add([todo3, todo4]);

todo4.set('completed', true);

todos.add([todo4, todo5], {merge: true});


var toVisit = new TodoCollection;

toVisit.on({
  'change:title': function (todo) {
    console.log('Changed my mind. ', 'Going to ' + todo.get('title'));
  },

  'change:completed': function (todo) {
    place = todo.get('title');
    completed = todo.get('completed');
    if (completed)
      console.log('Visited ' + place);
    else
      console.log('Visit ' + place + ' again');
  }
});

toVisit.add([
  {title: 'Jamaica', completed: false, id: 1},
  {title: 'Brazil', completed: true, id: 2}
])

toVisit.get('Jamaica').set('title', 'India');
toVisit.get('India').set('completed', true);
toVisit.get('India').set('completed', false);
