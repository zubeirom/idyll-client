import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";
import fetch from 'fetch';

export default Route.extend({
  ajax: service(),

  async model() {
    return {};
  },

  async afterModel(model) {
    const key = "a6621af2728b4b689ba4f4c17255b292";
    const url = `https://newsapi.org/v2/everything?sources=reddit-r-all&apiKey=${key}`
    fetch(url, {
      mode: 'no-cors'
    }).then(async response => {
      try {
        const res = await response.json();
        set(model, "articles", res.articles);
      } catch (error) {
        console.error(error);
      }
    });
  }
});
