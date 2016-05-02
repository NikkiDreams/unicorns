import Ember from 'ember';

export default Ember.Route.extend({
  isHome: null,
  model(){

    return Ember.$.getJSON('/api/unicorns').then(function(data) {
     return data;
   });
  },

  setupController: function(controller, model) {
    // Call _super for default behavior
    console.log("Unicorn Model",model);
    this._super(controller, model);
    controller.set('model',model.unicorns);

  },

  isHomeChecked(id){
    this.get('isHome').toggleProperty();
  },

  actions:{
    unicornIsHome(e){
      this.isHomeChecked(e.id);
    }
  }
});
