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
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible);
  },

  render: function () {
    html = this.template(this.model.toJSON());
    this.$el.html(html);

    this.$el.toggleClass('completed', this.model.get('completed'));
    this.toggleVisible();

    this.$input = this.$('.edit');
    return this;
  },

  toggleVisible: function () {
    this.$el.toggleClass('hidden', this.isHidden());
  },

  isHidden: function () {
    isCompleted = this.model.get('completed');
    if (app.TodoFilter === 'completed') {
      return !isCompleted;
    } else if (app.TodoFilter == 'active') {
      return isCompleted;
    }
    return false;
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
    this.model.toggle();
  },

  clear: function () {
    this.model.destroy();
  }

});
