import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      contacts: [],
      contactIndex: null,
    };
  },
  getters: {
    // returns the cotants array
    contacts(state) {
      return state.contacts;
    },
    // returns the specific by index
    loadContact(state) {
      return state.contacts[state.contactIndex];
    },
  },
  mutations: {
    // loop through the input array and push every element to contacts array
    loadContacts(state, inputArray) {
      for(let i = 0; i < inputArray.length; i++){
        state.contacts.push(inputArray[i])
      }
    },
    // set the contacts array to empty
    updateContacts(state){
      state.contacts = []
    },
    // deletes a contact by input the id 
    deleteContact(state, id){
      state.contacts.slice((contact) => contact.id == id);
    },
    // saves the index of the input contact
    savedIndex(state, idx) {
      state.contactIndex = idx;
    },
    // saves the contact by index
    saveContact(state, contact) {
      const index = state.contactIndex;
      if (index !== -1) {
        state.contacts[index] = contact;
      }
    },
  },
});

export default store;
