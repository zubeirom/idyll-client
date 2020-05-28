import Controller from '@ember/controller';
import {set } from '@ember/object';
import { inject as service } from '@ember/service'
import ENV from "../config/environment";

export default Controller.extend({
    viewArticles: true,
    viewSources: false,
    loader: false,
    ajax: service(),

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
                searchValue ? url = `${ENV.host}query-news?searchValue=${searchValue}` : url = `${ENV.host}news`
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
                const url = `${ENV.host}news`
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
                const url = `${ENV.host}news?sources=${sources}`
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
                const url = `${ENV.host}news?country=${country}`
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
                const url = `${ENV.host}news?category=${category}`
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