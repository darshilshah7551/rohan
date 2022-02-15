<template>
  <div>
    <!-- <v-row>
      <v-col cols="8"> -->
    <v-treeview :items="projects">
      <template `slot`="label" `slot-scope`="props">
        <v-row>
          <v-col cols="9">
            <div @click="route(props.item.name)">
              {{ props.item.name }}
            </div>
          </v-col>
          <v-avatar>
            <v-img :src="props.item.img"></v-img>
          </v-avatar>
        </v-row>
      </template>
    </v-treeview>
    <!-- </v-col> -->

    <!-- <v-img width="100%" height="auto" :src="projects[0].img"></v-img> -->
    <!-- </v-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Best Deals",
          img: "https://5.imimg.com/data5/SM/BM/MY-46828799/48-inch-smart-hd-led-tv-500x500.jpg",
        },
        {
          id: 5,
          name: "Grocery",
          img: "https://thumbs.dreamstime.com/z/global-network-across-planet-earth-blockchain-global-network-across-planet-earth-blockchain-elements-image-136686433.jpg",

          children: [
            {
              id: 6,
              name: "Atta Flours & Sooji",
            },
            {
              id: 10,
              name: "Dal & Pulses",
            },
            {
              id: 11,
              name: "Rice & Other Grains",
            },
            {
              id: 12,
              name: "Oils & Ghee",
            },
            {
              id: 13,
              name: "Masalas & Spices",
            },
            {
              id: 14,
              name: "Salt Sugar & Gud",
            },
          ],
        },
        {
          id: 15,
          name: "Food & Beverages",
          img: "https://5.imimg.com/data5/SM/BM/MY-46828799/48-inch-smart-hd-led-tv-500x500.jpg",
          children: [
            { id: 16, name: "October : pdf" },
            { id: 17, name: "November : pdf" },
            { id: 18, name: "Tutorial : html" },
          ],
        },
        {
          id: 19,
          name: "Home & Kitchen",
          img: "https://5.imimg.com/data5/SM/BM/MY-46828799/48-inch-smart-hd-led-tv-500x500.jpg",
          children: [
            {
              id: 20,
              name: "Tutorials :",
              children: [
                { id: 21, name: "Basic layouts : mp4" },
                { id: 22, name: "Advanced techniques : mp4" },
                { id: 23, name: "All about app : dir" },
              ],
            },
            { id: 24, name: "Intro : mov" },
            { id: 25, name: "Conference introduction : avi" },
          ],
        },
        {
          id: 21,
          name: "Fashion",
          img: "https://5.imimg.com/data5/SM/BM/MY-46828799/48-inch-smart-hd-led-tv-500x500.jpg",
          children: [
            {
              id: 22,
              name: "Tuto",
            },
          ],
        },
        {
          id: 23,
          name: "Beauty",
          img: "https://5.imimg.com/data5/SM/BM/MY-46828799/48-inch-smart-hd-led-tv-500x500.jpg",

          children: [{ id: 24, name: "Tuti" }],
        },
      ],
    };
  },
  methods: {
    route(value) {
      console.log("Value", value);
      if (value == "Grocery") {
        this.$router.push("/grocery");
      }

      if (value == "Food & Beverages") {
        this.$router.push("/rohan");
      }

      if (value == "Home & Kitchen") {
        this.$router.push("/homekitchen");
      }

      if (value == "Fashion") {
        this.$router.push("/fashion");
      }

      if (value == "Beauty") {
        this.$router.push("/beauty");
      }
    },

    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

 
 