import Ember from 'ember';

export default Ember.Route.extend({
  isHome: null,
  model(params){

    Ember.Logger.debug('message', "got it");
    return [{
      id: 1,
      name: 'booboo'
    },
    {
      id: 2,
      name: 'Pinky'
    },
    {
      id: 3,
      name: 'Bob'
    },
    {
      id: 4,
      name: 'Grumpy'
    }]
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
