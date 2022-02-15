<template>
  <div class="container category-wrapper pr-1 pb-0">
    <v-container>
      <v-row>
        <v-col sm="6" cols="4" v-for="item in items" :key="item.name">
          <v-card flat>
            <div
              class="v-avatar image mr-1"
              style="height: 80px; min-width: 80px; width: 80px"
            >
              <v-img :src="item.img" height="auto"></v-img>
            </div>
            <v-card-text class="text-center text-wrap cat-name">
              <v-row>
                <div class="subheading black--text">
                  {{ item.name }}
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Atta Flours & Sooji",

          img: "https://cdn2production.frendy.in/category/618b6a2ab5e04.jpg",
        },
        {
          name: "Dal & Pulses",

          img: "https://cdn2production.frendy.in/category/618b6a2ab5e04.jpg",
        },
        {
          name: "Rice & Other Grains",

          img: "https://cdn2production.frendy.in/category/618b6a4cd0935.jpg",
        },
        {
          name: "Oils & Ghee",

          img: "https://cdn2production.frendy.in/category/618b6a5d14383.jpg",
        },
        {
          name: "Masalas & Spices",

          img: "https://cdn2production.frendy.in/category/618b6a6de2fbe.jpg",
        },
      ],
    };
  },
};
</script>