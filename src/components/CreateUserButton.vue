<template>
  <v-btn v-on:click="selectUser({})" outlined>Create new</v-btn>
</template>
<script>
import { mapMutations } from "vuex";
import { MUTATIONS } from "../store/mutations";

export default {
  name: "CreateUserButton",
  methods: {
    ...mapMutations({ ...MUTATIONS })
  }
};
</script>