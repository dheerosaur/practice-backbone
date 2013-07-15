var app = app || {};

app.TodoView = Backbone.View.extend({
  
  tagName: 'li',

  template: _.template( $('#item-template').html() ),

  events: {
    'dblclick label':     'edit',
    'keypress .edit':     'updateOnEnter',
    'blur .edit':         'close',
    'click .toggle':      'toggleCompleted',
    'click .destroy':     'clear'
  },

  initialize: function () {
  },

  render: function () {
    html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  edit: function () {
  },

  updateOnEnter: function () {
  },

  close: function () {
  },

  toggleCompleted: function () {
  },

  clear: function () {
  }

});
