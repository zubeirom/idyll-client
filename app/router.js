import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('reddit');
  this.route('hacker-news');
  this.route('product-hunt');
  this.route('news');
  this.route('youtube');
  this.route('medium');
  this.route('twitter');
  this.route('github');
  this.route('google');
});

export default Router;
