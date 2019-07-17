import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
    ajax: service(),

    async model() {
        try {
            const url = 'https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&chart=mostPopular&maxResults=20&key=AIzaSyDVJHTDd344HrKnPc2-DEJNimT1luoqQWU'
            const res = await this.get('ajax').request(url);
            return res.items;
        } catch (error) {
            console.log(error)
        }
    }

});
