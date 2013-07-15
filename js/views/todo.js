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
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    html = this.template(this.model.toJSON());
    this.$el.html(html);
    this.$input = this.$('.edit');
    return this;
  },

  edit: function () {
    this.$el.addClass('editing');
    this.$input.focus();
  },

  updateOnEnter: function (event) {
    if (event.which == ENTER_KEY) {
      this.close();
    }
  },

  close: function () {
    var value = this.$input.val().trim();
    if (value) {
      this.model.save({title: value});
    }
    this.$el.removeClass('editing');
  },

  toggleCompleted: function () {
  },

  clear: function () {
    this.model.destroy();
  }

});
