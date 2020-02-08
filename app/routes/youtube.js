import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
    ajax: service(),

    async model() {
        try {
            const url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&chart=mostPopular&maxResults=20&key=AIzaSyA2pCWAsYrEA7hGS0Bk1CbV3KUOPiI-JTs'
            const res = await this.get('ajax').request(url);
            return res.items;
        } catch (error) {
            console.log(error)
        }
    }

});
