<template>
  <v-data-table :headers="headers" :items="users" :items-per-page="10"
    ><template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="selectUser(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteUser(item.id)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      Sorry, nothing to display here :(
    </template></v-data-table
  >
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { GETTERS } from "../store/getters";
import { MUTATIONS } from "../store/mutations";

export default {
  name: "UsersList",
  data() {
    return {
      headers: [
        {
          text: "Login",
          align: "start",
          value: "login"
        },
        { text: "Name", value: "name" },
        { text: "Surname", value: "surname" },
        { text: "Email", value: "email" },
        { text: "Actions", value: "actions", sortable: false }
      ]
    };
  },
  computed: {
    ...mapGetters({ ...GETTERS })
  },
  methods: {
    ...mapMutations({ ...MUTATIONS })
  }
};
</script>
