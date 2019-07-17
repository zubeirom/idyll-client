import Controller from '@ember/controller';
import { inject as service } from '@ember/service'
import { set } from '@ember/object';

export default Controller.extend({
    toastr: service('toast'),
    ajax: service(),

    actions: {
        async languageQuery() {
            try {
                set(this, 'loader', true)
                const res = await this.get('ajax').request(`https://github-trending-api.now.sh/repositories?since=weekly&language=${this.language}`);
                set(this, 'model', res);
                set(this, 'loader', false)
            } catch (error) {
                console.log(error);
                set(this, 'loader', false)
            }
            
        }
    }
});
