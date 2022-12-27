<template>
  <section>
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">{{ title }}</h2>

                <form>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      class="form-control form-control-lg"
                      v-model="firstName"
                    />
                    <label class="form-label" for="form3Example1cg"
                      >First Name</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                      v-model="lastName"
                    />
                    <label class="form-label" for="form3Example3cg"
                      >Last Name</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example4cg"
                      class="form-control form-control-lg"
                      v-model="phone"
                    />
                    <label class="form-label" for="form3Example4cg"
                      >Phone</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example4cdg"
                      class="form-control form-control-lg"
                      v-model="email"
                    />
                    <label class="form-label" for="form3Example4cdg"
                      >Email</label
                    >
                  </div>

                  <div class="d-flex justify-content-center">
                    <b-button
                      variant="primary"
                      v-if="title === 'ADD CONTACT'"
                      type="button"
                      @click="addContact"
                    >
                      {{ buttonTitle }}
                    </b-button>
                    <div v-else>
                      <b-button
                        variant="primary"
                        type="button"
                        @click="saveContact"
                      >
                        {{ buttonTitle }}
                      </b-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "buttonTitle"],
  data() {
    return {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      id: "",
    };
  },
  methods: {
    // adds a new contact to the backend
    addContact() {
      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: this.firstName,
          last_name: this.lastName,
          phone: this.phone,
          email: this.email,
        }),
      });
      this.$router.push({ path: "/" });
    },
    // loads a contact from the vue store and set the values to the input fields
    loadContact() {
      const contact = this.$store.getters.loadContact;
      this.firstName = contact.first_name;
      this.lastName = contact.last_name;
      this.phone = contact.phone;
      this.email = contact.email;
      this.id = contact.id;
      return contact.id;
    },
    // saves the updated contact to the backend
    saveContact() {
      const contact = {
        first_name: this.firstName,
        last_name: this.lastName,
        phone: this.phone,
        email: this.email,
        id: this.id,
      };
      fetch("http://localhost:3000/" + String(contact.id), {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      this.$router.push({ path: "/" });
    },
  },
  // Calling the function loadContact when the DOM is created
  created() {
    if (this.title === "EDIT CONTACT") {
      this.loadContact();
    }
  },
};
</script>

<style scoped>
section {
  padding-top: 5vh;
}
</style>
