<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar>
        <v-app-bar-nav-icon
          class="grey--text"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-app-bar>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Rohan</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="purple lighten-2">
      <v-list>
        <v-list-item-group>
          <v-list-title v-for="(link, index) in links" :key="index">
            <v-list-title-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-title-action>
            <v-list-title-content>
              <v-list-title class="white--text">
                {{ link.text }}
              </v-list-title>
            </v-list-title-content>
          </v-list-title>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Project", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>
