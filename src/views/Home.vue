<template>
  <div>
    <UsersList />
    <CreateAndEditUserDialog />
  </div>
</template>

<script>
import UsersList from "@/components/UsersList.vue";
import CreateAndEditUserDialog from "@/components/CreateAndEditUserDialog.vue";

export default {
  name: "Home",
  components: {
    UsersList,
    CreateAndEditUserDialog
  }
};
</script>
