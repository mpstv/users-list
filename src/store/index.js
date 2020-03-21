import Vue from "vue";
import Vuex from "vuex";
import vuexPersist from "../plugins/vuex-persist";
import { GETTERS } from "./getters";
import { MUTATIONS } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        login: "fuogurt",
        name: "Frozen",
        surname: "Yogurt",
        email: "frozenyogurt@yogurt.com"
      },
      {
        id: 2,
        login: "icsandwich",
        name: "Ice cream",
        surname: "Sandwich",
        email: "icecreamsandwich@cream.com"
      },
      {
        id: 3,
        login: "eclair",
        name: "Eclair",
        surname: "Eclair",
        email: "eclair@eclair.com"
      },
      {
        id: 4,
        login: "jbean",
        name: "Jelly",
        surname: "bean",
        email: "jelly_bean@bean.com"
      },
      {
        id: 5,
        login: "kit__kat",
        name: "Kit",
        surname: "Kat",
        email: "KitKat@kikat.com"
      }
    ],
    selectedUser: null
  },
  mutations: {
    [MUTATIONS.deleteUser]: (state, userId) => {
      const deleteIndex = state.users.findIndex(user => user.id === userId);

      state.users.splice(deleteIndex, 1);
    },
    [MUTATIONS.selectUser]: (state, user) => {
      state.selectedUser = { ...user };
    },
    [MUTATIONS.unselectUser]: state => {
      state.selectedUser = null;
    },
    [MUTATIONS.updateUser]: (state, user) => {
      if (user.id) {
        //update user
        const editUserIndex = state.users.findIndex(
          user => user.id === user.id
        );

        state.users.splice(editUserIndex, 1, { ...user });
      } else {
        //add new user
        const maxId = state.users.reduce((accumulator, currentValue) => {
          if (currentValue.id > accumulator) accumulator = currentValue.id;
        });

        user.id = maxId;
        state.users = [...state.users, user];
      }

      state.selectedUser = null;
    }
  },
  getters: {
    [GETTERS.users]: state => {
      return state.users;
    },
    [GETTERS.selectedUser]: state => {
      return state.selectedUser;
    }
  },
  plugins: [vuexPersist.plugin]
});
