import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";
import ENV from "../config/environment";

export default Route.extend({
  ajax: service(),

  async model() {
    return {};
  },

  async afterModel(model) {
    try {
      const url = `${ENV.host}news`;
      const res = await this.get('ajax').request(url);
      set(model, "articles", res.articles);
      set(model, "categories", [
        "business",
        "general",
        "health",
        "science",
        "sports",
        "technology"
      ])
    } catch (error) {
      throw error;
    }
  }
});
