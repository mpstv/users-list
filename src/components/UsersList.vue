<template>
  <v-data-table :headers="headers" :items="users" :items-per-page="10"
    ><template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">No users</v-btn>
    </template></v-data-table
  >
</template>

<script>
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
      ],
      users: [
        {
          login: "fuogurt",
          name: "Frozen",
          surname: "Yogurt",
          email: "frozenyogurt@gmail.com"
        },
        {
          login: "icsandwich",
          name: "Ice cream",
          surname: "Sandwich",
          email: "icecreamsandwich@gmail.com"
        },
        {
          login: "eclair",
          name: "Eclair",
          surname: "Eclair",
          email: "eclair@gmail.com"
        },
        {
          login: "jbean",
          name: "Jelly",
          surname: "bean",
          email: "jelly_bean@gmail.com"
        },
        {
          login: "kit__kat",
          name: "Kit",
          surname: "Kat",
          email: "KitKat@gmail.com"
        }
      ]
    };
  },
  methods: {
    editItem(item) {
      console.log(item);
    },

    deleteItem(item) {
      console.log(item);
    }
  }
};
</script>
