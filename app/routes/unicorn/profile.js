import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log('x',params)
    return Ember.$.getJSON('/api/unicorn/'+params.id).then(function(data) {
     return data;
   });
  },

  setupController: function(controller, model) {
    // Call _super for default behavior
    console.log("Unicorn Model",model.unicorn);
    this._super(controller, model);
    controller.set('model',model.unicorn);

  }
});
