var app = app || {};

app.AppView = Backbone.View.extend({
  // This is the element which is used to create this.$el
  // Generally, render method injects data into this
  el: '#todoapp',

  events: {
    'keypress #new-todo':     'createOnEnter',
    'click #toggle-all':      'completeAll',
    'click #clear-completed': 'clearCompleted'
  },

  initialize: function () {
    this.$input = this.$('#new-todo');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);

    app.Todos.fetch();
  },

  render: function () {
  },

  addOne: function (todo) {
    var view = new app.TodoView({model: todo})
    $('#todo-list').append(view.render().el);
  },

  addAll: function (todo) {
    $('#todo-list').empty();
    app.Todos.each(this.addOne, this);
  },

  createOnEnter: function (event) {
    var value = this.$input.val().trim();
    if (event.which != ENTER_KEY || !value) {
      return;
    }

    app.Todos.create({
      'title': this.$input.val().trim(),
      'order': app.Todos.nextOrder()
    });
    this.$input.val('');
  },

  completeAll: function () {
  },

  clearCompleted: function () {
  }

});
