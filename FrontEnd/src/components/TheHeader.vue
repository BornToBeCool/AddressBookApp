<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link  to="/" class="mainPage"
        >Address Book</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

        <b-button variant="outline-primary">
          <router-link to="/">All Contacts</router-link>
        </b-button>
        <b-button variant="outline-success">
          <router-link to="/register">Add Contact</router-link>
        </b-button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
.btn {
  margin-left: 1rem;
  border: 1px solid rgb(2, 117, 216);
}
.btn:hover {
  background-color: rgb(2, 117, 216);
}
a {
  text-decoration: none;
}
a:hover {
  color: white;
}

.mainPage {
  text-decoration: none;
  font-size: 2rem;
}
.mainPage:hover {
  color: rgb(2, 117, 216);
}
</style>
