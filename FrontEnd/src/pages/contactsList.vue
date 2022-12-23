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
              <button class="btn btn-danger" @click="deleteUser(index)">
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
      userInformation: ["First Name", "Last Name", "Phone", "Email"],
      user: {},
    };
  },
  methods: {
    deleteUser(idx) {
      this.$store.getters.contacts.splice(idx, 1);
    },
    editContact(idx) {
      this.$store.commit("saveIndex", idx);
      this.$router.push({ path: "/edit/contact" });
      console.log(this.$store.state.contactIndex);
    },
  },
  computed: {
    loadContacts() {
      return this.$store.getters.contacts;
    },
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
