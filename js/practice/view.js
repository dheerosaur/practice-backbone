var ItemView = Backbone.View.extend({
  tagName: 'li',
  events: {},
  render: function () {
    this.$el.html(this.model.toJSON().title);
    return this;
  }
});

var ListView = Backbone.View.extend({
  el: '#todo',
  events: {},
  render: function () {
    var items = this.model.get('items');

    this.$el.empty();

    _.each(items, function (item) {

      var itemView = new ItemView({model: item});

      this.$el.append(itemView.render().el);
    }, this);

    return this;
  }
});

var Itemset = Backbone.Model.extend({

  defaults: {
    items: [],
  },

  initialize: function () {
    this.on('change', function () {
      var listView = new ListView({model: this});
      listView.render();
    });
  }

});

var Item = Backbone.Model.extend({
  defaults: {
    title: ''
  },
});
  

var itemset = new Itemset();
var item1 = new Item({title: 'task1'})
var item2 = new Item({title: 'task2'})
var item3 = new Item({title: 'task3'})
itemset.set('items', [item1, item2, item3])
