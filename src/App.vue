<template>
  <v-app app class="grey lighten-4">
    <Navbar />
    <v-content transition="slide-x-transition" class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>
