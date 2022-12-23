import { createRouter, createWebHistory } from "vue-router";

import notFound from "./pages/notFound.vue";
import addContact from "./pages/addContact.vue";
import contactsList from "./pages/contactsList.vue";
import editContact from "./pages/editContact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/users" },
    { path: "/users", component: contactsList },
    { path: "/edit/contact", component: editContact },
    { path: "/register", component: addContact },
    { path: "/:notFound(.*)", component: notFound },
  ],
});

export default router;
