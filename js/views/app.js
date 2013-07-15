var app = app || {};

app.AppView = Backbone.View.extend({
  // This is the element which is used to create this.$el
  // Generally, render method injects data into this
  el: '#todoapp',

  statsTemplate: _.template( $('#stats-template').html() ),

  events: {
    'keypress #new-todo':     'createOnEnter',
    'click #toggle-all':      'completeAll',
    'click #clear-completed': 'clearCompleted'
  },

  initialize: function () {
    this.$input = this.$('#new-todo');
    this.$main = this.$('#main');
    this.$footer = this.$('#footer');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);
    this.listenTo(app.Todos, 'all', this.render);

    app.Todos.fetch();
  },

  render: function () {
    var completed = app.Todos.completed().length;
    var remaining = app.Todos.remaining().length;

    if (app.Todos.length) {
      this.$main.show();
      this.$footer.show();

      footerHTML = this.statsTemplate({
        completed: completed,
        remaining: remaining
      });
      this.$footer.html(footerHTML);

    } else {
      this.$main.hide();
      this.$footer.hide();
    }
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
