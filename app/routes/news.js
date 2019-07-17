import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import NewsAPI from 'newsapi'
import { set } from '@ember/object';

export default Route.extend({
    ajax: service(),

    async model() {
        return {};
    },

    async afterModel(model) {
        const newsapi = new NewsAPI('a6621af2728b4b689ba4f4c17255b292');
        try {
            newsapi.v2.topHeadlines({
                language: 'en',
            }).then(response => {
                const { articles } = response;
                set(model, 'articles', articles);
                set(model, 'categories', ['business', 'entertainment', 'health', 'science', 'sports', 'technology'])
            });
        } catch (error) {
            console.log(error);
        }
    }
});
