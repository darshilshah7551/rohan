<template>
  <!-- <nav> -->

  <div>
    <v-app-bar app color="purple">
      <!-- <v-app-bar > -->
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <!-- </v-app-bar> -->

      <v-toolbar-title>
        <span class="white--text">Categories</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-toolbar color="white">
        <v-text-field
          placeholder="Search you favourite products"
        ></v-text-field>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar> -->

      <v-btn color="purple lighten--5" class="white--text" @click="goto">
        <span>Cart Total:0</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="purple lighten-2">
      <!-- <v-layout column align-center> -->
      <v-row no-gutters>
        <v-col align="center" class="mt-5" cols="12">
          <div @click="route">
            <!-- <v-avatar size="100">
              <img src="/avatar-1.png" alt="" />
            </v-avatar> -->
            <!-- <div @click="route(props.item.name)">
              {{ props.item.name }}
            </div> -->
            <p class="white--text subheading mt-1" router to="/account">
              Rohan Dhanani
            </p>
          </div>
        </v-col>
        <!-- </v-row>
      <v-row class="mt-4 mb-3"> -->
        <!-- <v-col>
          <Popup />
        </v-col> -->
      </v-row>
      <!-- </v-layout> -->
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item class="white--text">
                {{ link.text }}
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
  <!-- </nav> -->
</template>

<script>
// import Popup from "./Popup.vue";
export default {
  // components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Project", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
        { icon: "mdi-cart-outline", text: "Shop", route: "/shop" },
      ],
    };
  },
  methods: {
    route() {
      this.$router.push("/account");
    },
    goto() {
      this.$router.push("/cart");
    },
  },
};
</script>
