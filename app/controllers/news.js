import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
    viewArticles: true,
    viewSources: false,
    actions: {
        viewCountries() {
            set(this, 'viewArticles', false);
            set(this, 'viewSources', false);
        },
        viewSrcs() {
            set(this, 'viewArticles', false);
            set(this, 'viewSources', true);
        },
        activateArticles() {
            console.log(this.model)
            set(this, 'viewArticles', true);
            set(this, 'viewSources', false);
        }
    }
});
