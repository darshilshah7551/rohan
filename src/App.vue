<template>
  <v-app-bar app class="grey lighten-4">
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app-bar>
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
