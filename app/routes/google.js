import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
import { get, set } from '@ember/object'

export default Route.extend({
    ajax: service(),
    toastr: service('toast'),

    async model() {
        return {}
    },

    async afterModel(model) {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const data = await get(this, 'ajax').request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyDVJHTDd344HrKnPc2-DEJNimT1luoqQWU`);
                const country = data.results[0].address_components[6].short_name;
                const res = await get(this, 'ajax').request(`http://localhost:3000/google?country=${country}`);
                console.log(model);
                set(model, 'firstTrending', res.default.trendingSearchesDays[0]);
                set(model, 'secondTrending', res.default.trendingSearchesDays[1]);
                return model
            }, async error => {
                const res = await get(this, 'ajax').request(`http://localhost:3000/google?country=US`);
                console.log(error);
                console.log(model);
                set(model, 'firstTrending', res.default.trendingSearchesDays[0]);
                set(model, 'secondTrending', res.default.trendingSearchesDays[1]);
                return model
            });
        } 
        const res = await this.get('ajax').request(`http://localhost:3000/google?country=US`);
        console.log(model);
        set(model, 'firstTrending', res.default.trendingSearchesDays[0]);
        set(model, 'secondTrending', res.default.trendingSearchesDays[1]);
        return model
    }
});
