import Controller from '@ember/controller';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    viewArticles: true,
    viewSources: false,
    loader: false,
    ajax: service(),
    key: "a6621af2728b4b689ba4f4c17255b292",

    actions: {
        viewCountries() {
            set(this, 'loader', true)
            set(this, 'viewArticles', false);
            set(this, 'viewSources', false);
            set(this, 'loader', false)
        },
        viewSrcs() {
            set(this, 'loader', true)
            set(this, 'viewArticles', false);
            set(this, 'viewSources', true);
            set(this, 'loader', false)
        },

        async queryArticles(searchValue) {
            try {
                let url;
                searchValue ? url = `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=publishedAt&apiKey=${this.key}` : url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${this.key}`
                set(this, 'loader', true);
                const res = await this.get('ajax').request(url);
                const { articles } = res;
                set(this.model, 'articles', articles);
                set(this, 'loader', false);
            } catch (error) {
                console.error(error)
            }
        },

        async activateArticles() {
            set(this, 'loader', true)
            try {
                const url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${this.key}`
                const res = await this.get('ajax').request(url);
                const { articles } = res;
                set(this.model, 'articles', articles);
                set(this, 'loader', false)
            } catch (error) {
                console.log(error);
                set(this, 'loader', false)
            }
            set(this, 'viewArticles', true);
            set(this, 'viewSources', false);
            set(this, 'loader', false)
        },
        async listArticles(sources) {
            set(this, 'loader', true)
            try {
                const url = `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${this.key}`
                const res = await this.get('ajax').request(url);
                const { articles } = res;
                set(this, 'viewArticles', true);
                set(this, 'viewSources', false);
                set(this, 'loader', false)
                set(this.model, 'articles', articles);
            } catch (error) {
                console.log(error);
                set(this, 'loader', false)
            }
        },
        async listCountryArticles(country) {
            set(this, 'loader', true)
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${this.key}`
                const res = await this.get('ajax').request(url);
                const { articles } = res;
                set(this.model, 'articles', articles);
                set(this, 'viewArticles', true);
                set(this, 'viewSources', false);
                set(this, 'loader', false);
            } catch (error) {
                console.log(error);
                set(this, 'loader', false)
            }
        },
        async listCatArt(category) {
            set(this, 'loader', true)
            try {
                const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${this.key}`
                const res = await this.get('ajax').request(url);
                const { articles } = res;
                set(this.model, 'articles', articles);
                set(this, 'viewArticles', true);
                set(this, 'viewSources', false);
                set(this, 'loader', false)
            } catch (error) {
                console.log(error);
                set(this, 'loader', false)
            }
        }
    }
});
