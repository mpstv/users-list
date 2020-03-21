<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="indigo" dark>
        <v-toolbar-title>Users list</v-toolbar-title>
        <v-spacer></v-spacer>
        <CreateUserButton />
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2020</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import CreateUserButton from "@/components/CreateUserButton.vue";

export default {
  name: "App",
  components: {
    CreateUserButton
  }
};
</script>