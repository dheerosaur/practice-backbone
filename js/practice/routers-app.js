var TodoRouter = Backbone.Router.extend({
  
  routes: {
    "todo/:id": "viewTodo",
    "todo/:id/edit": "editTodo"
  },

  viewTodo: function (id) {
    console.log("View todo requested");
    this.navigate("todo/" + id + "/edit");
  },

  editTodo: function (id) {
    console.log("Edit too opened");
  }
});


var myTodoRouter = new TodoRouter();

Backbone.history.start();

Backbone.history.on('route', function (router) {
  console.log('BB', router.routes);
});

myTodoRouter.on('route', function (name, args) {
  console.log('myrouter', name);
});

Backbone.history.checkUrl();
