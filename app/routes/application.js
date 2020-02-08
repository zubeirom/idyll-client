import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  serviceWorkerUpdateNotify: service(),
  
  beforeModel() {
    this.serviceWorkerUpdateNotify.on('update', () => {
      window.location.reload();
    });
  }
});
