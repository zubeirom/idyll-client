import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
    ajax: service(),

    async model() {
        const res = await this.get('ajax').request('https://api.producthunt.com/v1/posts?per_page=20&access_token=257765dc273d621ff7dda6b94942655f8f853c2b5cabd05a79b8380e8b696245');
        return res.posts
    }

});
