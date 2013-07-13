var collection = new Backbone.Collection([
  { name: 'Tim', age: 5 },
  { name: 'Ida', age: 26 },
  { name: 'Rob', age: 55 }
]);

var filteredNames = collection.chain()
  .filter(function (item) { return item.get('age') > 10; })
  .map(function (item) { return item.get('name'); })
  .value();

collection
  .add({ name: 'John', age: 23 })
  .add({ name: 'Harry', age: 33 })

console.log(filteredNames);
//console.log(collection.map(function (item) {
//  return item.get('name');
//}));
