import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      users: [
        {
          first_name: "David",
          last_name: "Platt",
          phone: "01913478234",
          email: "david.platt@corrie.co.uk",
        },
        {
          first_name: "Jason",
          last_name: "Grimshaw",
          phone: "01913478123",
          email: "jason.grimshaw@corrie.co.uk",
        },
        {
          first_name: "Ken",
          last_name: "Barlow",
          phone: "019134784929",
          email: "ken.barlow@corrie.co.uk",
        },
        {
          first_name: "Rita",
          last_name: "Sullivan",
          phone: "01913478555",
          email: "rita.sullivan@corrie.co.uk",
        },
        {
          first_name: "Steve",
          last_name: "McDonald",
          phone: "01913478555",
          email: "steve.mcdonald@corrie.co.uk",
        },
      ],
      contactIndex: null,
    };
  },
  getters: {
    contacts(state) {
      return state.users;
    },
    loadContact(state) {
      return state.users[state.contactIndex];
    },
  },
  mutations: {
    addContact(state, contact) {
      state.users.push(contact);
    },
    saveIndex(state, idx) {
      state.contactIndex = idx;
    },
    saveContact(state, contact) {
      const index = state.contactIndex;
      if (index !== -1) {
        state.users[index] = contact;
      }
    },
  },
});

export default store;
