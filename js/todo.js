var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var myTodo = new Todo({
  title: 'Check attributes property of the logged models in console'
});

var TodoView = Backbone.View.extend({

  tagName: 'li',

  todoTpl: _.template('An example template'),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  render: function () {
    this.$el.html(this.todoTpl(this.model.toJSON()));
    this.input = this.$('.edit');
    return this;
  },

  edit: function () {
  },

  close: function () {
  },

  updateOnEnter: function (e) {
  },

});

var todoView = new TodoView();

console.log(todoView.el);
