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
    const url = `${ENV.host}reddit`
    const res = await this.get('ajax').request(url);
    set(model, "articles", res.articles);
  }
});
