import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany,
  belongsTo
} = DS;

export default Model.extend({
  name: attr("string"),
  location: attr("string"),
  isHome: attr("boolean", {defaultValue: false})
});
