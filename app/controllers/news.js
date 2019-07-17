import Controller from '@ember/controller';
import { set } from '@ember/object';
import NewsAPI from 'newsapi'

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
            set(this, 'loader', true)
            const newsapi = new NewsAPI('a6621af2728b4b689ba4f4c17255b292');
            try {
                newsapi.v2.topHeadlines({
                    language: 'en',
                }).then(response => {
                    console.log(response.articles)
                    const { articles } = response;
                    set(this.model, 'articles', articles);
                    set(this, 'loader', false)
                });
            } catch (error) {
                console.log(error);
                set(this, 'loader', false)
            }
            set(this, 'viewArticles', true);
            set(this, 'viewSources', false);
            set(this, 'loader', false)
        },
        listArticles(sources) {
            set(this, 'loader', true)
            const newsapi = new NewsAPI('a6621af2728b4b689ba4f4c17255b292');
            try {
                newsapi.v2.topHeadlines({
                    sources
                }).then(response => {
                    console.log(response.articles)
                    const { articles } = response;
                    set(this.model, 'articles', articles);
                    set(this, 'viewArticles', true);
                    set(this, 'viewSources', false);
                    set(this, 'loader', false)
                });
            } catch (error) {
                console.log(error);
                set(this, 'loader', false)
            }
        },
        listCountryArticles(country) {
            set(this, 'loader', true)
            const newsapi = new NewsAPI('a6621af2728b4b689ba4f4c17255b292');
            try {
                newsapi.v2.topHeadlines({
                    country
                }).then(response => {
                    console.log(response.articles)
                    const { articles } = response;
                    set(this.model, 'articles', articles);
                    set(this, 'viewArticles', true);
                    set(this, 'viewSources', false);
                    set(this, 'loader', false)
                });
            } catch (error) {
                console.log(error);
                set(this, 'loader', false)
            }
        },
        listCatArt(category) {
            set(this, 'loader', true)
            const newsapi = new NewsAPI('a6621af2728b4b689ba4f4c17255b292');

            try {
                let language = 'en'
                newsapi.v2.topHeadlines({
                    language,
                    country: 'us',
                    category,
                }).then(response => {
                    console.log(response.articles)
                    const { articles } = response;
                    set(this.model, 'articles', articles);
                    set(this, 'viewArticles', true);
                    set(this, 'viewSources', false);
                    set(this, 'loader', false)

                });
            } catch (error) {
                console.log(error);
                set(this, 'loader', false)
            }
        }
    }
});
