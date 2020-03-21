<template>
  <v-row v-if="selectedUser" justify="center">
    <v-dialog v-model="editingUser" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="editingUser.login" label="Login*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editingUser.name" label="Name*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editingUser.surname" label="Surname*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editingUser.email" label="Email*" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="unselectUser">Close</v-btn>
          <v-btn color="blue darken-1" text @click="updateUser(editingUser)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { GETTERS } from "../store/getters";
import { MUTATIONS } from "../store/mutations";

export default {
  name: "CreateAndEditUserDialog",
  computed: {
    ...mapGetters({ ...GETTERS }),
    editingUser() {
      return { ...this.selectedUser };
    }
  },
  methods: {
    ...mapMutations({ ...MUTATIONS })
  }
};
</script>
