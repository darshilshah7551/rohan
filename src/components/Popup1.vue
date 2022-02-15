 <template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="orange lighten-2" dark v-bind="attrs" v-on="on">
          Details
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Order Details
        </v-card-title>

        <v-card-text>
          <v-card v-for="product in products" :key="product.name">
            <v-row>
              <v-col cols="6">
                <v-img width="100%" height="auto" :src="product.img"></v-img>
              </v-col>
              <v-col cols="6">
                <!-- <v-card depressed> -->

                <div>{{ product.name }}</div>
                <div>Qty: {{ product.qty }}</div>
                <div>Price: {{ product.price }}</div>

                <!-- </v-card> -->
              </v-col>
            </v-row>
          </v-card>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn color="primary" text @click="dialog = false"> I accept </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      products: [
        {
          name: "beansqweqwqdasdasdasdasdadadadas",
          qty: "1",
          price: "20",
          img: "https://www.recipetineats.com/wp-content/uploads/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg",
        },
        {
          name: "rice",
          qty: "2",
          price: "50",
          img: "https://www.recipetineats.com/wp-content/uploads/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg",
        },
        {
          name: "millets",
          qty: "4",
          price: "100",
          img: "https://www.recipetineats.com/wp-content/uploads/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg",
        },
        {
          name: "wheat",
          qty: "3",
          price: "30",
          img: "https://www.recipetineats.com/wp-content/uploads/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg",
        },
        {
          name: "dal",
          qty: "2",
          price: "150",
          img: "https://www.recipetineats.com/wp-content/uploads/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg",
        },
      ],
      title: "",
      content: "",
      due: null,
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    },
  },
};
</script>
