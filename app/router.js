import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('unicorn', function() {
    this.route('profile', {path: 'unicorn/:id'});
  });
});

export default Router;
