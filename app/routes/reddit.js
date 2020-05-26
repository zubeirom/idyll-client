import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";

export default Route.extend({
  ajax: service(),

  async model() {
    return {};
  },

  async afterModel(model) {
    try {
      const key = "a6621af2728b4b689ba4f4c17255b292";
      const url = `https://newsapi.org/v2/everything?sources=reddit-r-all&apiKey=${key}`
      const res = await this.get('ajax').request(url);
      set(model, "articles", res.articles);

    } catch (error) {
      console.log(error);
    }
  },
});
