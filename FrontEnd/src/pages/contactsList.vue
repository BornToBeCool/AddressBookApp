<template>
  <section class="bg-light p-5">
    <div class="table-responsive" id="no-more-tables">
      <table class="table">
        <thead class="bg-primary text-light">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in loadContacts" :key="index">
            <td data-title="First Name">{{ user.first_name }}</td>
            <td data-title="Last Name">{{ user.last_name }}</td>
            <td data-title="Phone No">{{ user.phone }}</td>
            <td data-title="Email">{{ user.email }}</td>
            <td data-title="">
              <button
                @click="editContact(index)"
                type="button"
                class="btn btn-primary"
              >
                Edit Contact
              </button>
              <button type="button" class="btn btn-danger" @click="deleteContact(index)">
                
                Delete Contact
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    // delete contact from the backend by finding the index of the contact and get the id of it.
    deleteContact(idx) {
      const contactId = this.$store.getters.contacts[idx].id
      fetch('http://localhost:3000/' + String(contactId),{
        method: 'DELETE'
      })
      this.$store.commit('deleteContact', contactId) 
      location.reload()
    },
    // finding the index of the contact that should be updated and save it to the vue store
    editContact(idx) {
      this.$store.commit("savedIndex", idx);
      this.$router.push({ path: "/edit/contact" });
    },
    // loads all contacts from the backend and store them to the vue store
    loadAllContacts(){
      fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => this.$store.commit("loadContacts", data))
    }
  },
  computed: {
    // set the contacts array to epmty and then get all contact to the constand contactsArray and return it
     loadContacts() {
      this.$store.commit('updateContacts', ) 
      const contactsArray = this.$store.getters.contacts;
      return contactsArray;
    },
  },
  // call the loadAllContacts method when the page is mounted
  mounted() {
    this.loadAllContacts()
  },
  
};
</script>

<style scoped>
@media only screen and (max-width: 910px) {
  #no-more-tables tbody,
  #no-more-tables tr,
  #no-more-tables td {
    display: block;
  }
  #no-more-tables thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  #no-more-tables td {
    position: relative;
    padding-left: 50%;
  }
  #no-more-tables td:before {
    content: attr(data-title);
    position: absolute;
    left: 6px;
    font-weight: bold;
  }
  button {
    margin-top: 0.5rem;
    width: 10rem;
  }
}
button {
  margin-left: 0.5rem;
}
</style>
