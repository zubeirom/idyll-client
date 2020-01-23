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
        try {
            set(model, 'loader', true);
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const data = await get(this, 'ajax').request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyDVJHTDd344HrKnPc2-DEJNimT1luoqQWU`);
                    const country = data.results[0].address_components[6].short_name;
                    const res = await get(this, 'ajax').request(`https://idyll-api.herokuapp.com/google?country=${country}`);
                    set(model, 'firstTrending', res.default.trendingSearchesDays[0]);
                    set(model, 'secondTrending', res.default.trendingSearchesDays[1]);
                    delete model.loader
                    return model
                }, async error => {
                        const res = await get(this, 'ajax').request(`https://idyll-api.herokuapp.com/google?country=US`);
                    console.log(error);
                    set(model, 'firstTrending', res.default.trendingSearchesDays[0]);
                    set(model, 'secondTrending', res.default.trendingSearchesDays[1]);
                    delete model.loader
                    return model
                });
            } 
            const res = await this.get('ajax').request(`https://idyll-api.herokuapp.com/google?country=US`);
            set(model, 'firstTrending', res.default.trendingSearchesDays[0]);
            set(model, 'secondTrending', res.default.trendingSearchesDays[1]);
            delete model.loader
            return model
        } catch (error) {
            console.log(error)
        }
    }
});
