import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    ajax: service(),

    async model() {
        const res = await this.get('ajax').request('https://github-trending-api.now.sh/repositories?since=weekly');
        return res
    }

});
