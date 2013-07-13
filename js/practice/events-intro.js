var View = Backbone.View.extend({
  el: '#todo',

  events: {
    'click [type="checkbox"]': 'clicked',
  },

  initialize: function () {
    this.$el.click(this.jQueryClicked);

    this.on('apiEvent', this.callback);
  },

  clicked: function (event) {
    console.log("events handled for " + this.el.outerHTML);
    this.trigger('apiEvent', event.type);
  },

  jQueryClicked: function (event) {
    console.log("jQuery handler for " + this.outerHTML);
  },

  callback: function (eventType) {
    console.log("event type was " + eventType);
  }

});

var view = new View();
