var TodoRouter = Backbone.Router.extend({

  routes: {
    "about": "showAbout",

    "todo/:id": "getTodo",

    "search/:query": "searchTodos",

    "search/:query/p:page": "searchTodos",

    "todos/:id/download/*documentPath": "downloadDocument",

    "*other": "defaultRoute",

    "optional(/:item)": "optionalItem",

    "named/optional/(y:z)": "namedOptionalItem"
  },

  showAbout: function () {
  }

  getTodo: function (id) {
    console.log("You are trying to reach todo " + id);
  },

  searchTodos: function (query, page) {
    var page_number = page || 1;
    console.log("Page number: " + page_number + "of search: " + query);
  },

  downloadDocument: function (id, path) {
  },

  defaultRoute: function (other) {
  }

});

var myTodoRouter = new TodoRotuer();
