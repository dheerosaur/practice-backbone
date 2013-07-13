var Beatle = Backbone.Model.extend({
    job: 'musician'
});

var John = new Beatle({ firstName: 'John', lastName: 'Lennon' });
var Paul = new Beatle({ firstName: 'Paul', lastName: 'McCartney' });
var George = new Beatle({ firstName: 'George', lastName: 'Harrison' });
var Ringo = new Beatle({ firstName: 'Ringo', lastName: 'Starr' });

var theBeatles = new Backbone.Collection([John, Paul, George, Ringo]);

theBeatles.on("add", function (model) {
  console.log("Added " + model.get('firstName') + ' ' + model.get('lastName'));
});
theBeatles.on("remove", function (model) {
  console.log("Removed " + model.get('firstName') + ' ' + model.get('lastName'));
});

var Pete = new Beatle({ firstName: 'Pete', lastName: 'Best' })

theBeatles.set([John, Paul, George, Pete])
