import VuexPersist from "vuex-persist";

export default new VuexPersist({
  key: "users-list-vuex",
  storage: window.localStorage
});
