 <template>
  <div class="shop">
    <v-subheader class="black--text">Shop</v-subheader>

    <v-card
      class="mx-auto"
      height="244"
      v-for="product in products"
      :key="product.name"
    >
      <v-row>
        <v-col cols="6">
          <v-img widht="auto" height="100%" :src="product.img"> </v-img>
        </v-col>
        <v-col cols="6">
          <div>{{ product.name }}</div>
          <v-card-subtitle class="black--text">{{
            product.sub
          }}</v-card-subtitle>

          <div>₹{{ product.price }}</div>
          <v-card-subtitle class="black--text small--text">{{
            product.delivery
          }}</v-card-subtitle>
          <div v-if="product.add == false">
            <v-btn
              @click="test(product)"
              rounded
              color="purple"
              class="white--text"
              :products="products"
              >Add
              <v-icon right>mdi-plus</v-icon>
            </v-btn>
          </div>
          <div v-else>
            <v-btn fab x-small @click="increase(product)"
              ><v-icon> mdi-plus</v-icon></v-btn
            >
            <v-btn depressed> {{ product.qty }}</v-btn>
            <v-btn fab x-small @click="decrease(product)"
              ><v-icon> mdi-minus</v-icon></v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-card>
    <Cart :products="cartproducts" ref="form"></Cart>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
export default {
  name: "HelloWorld",
  components: { Cart },
  data() {
    return {
      cartproducts: [],
      product: [],

      qty: 0,

      products: [
        {
          name: "Spiced Beans",
          id: 1,
          qty: 0,
          price: "20",
          img: "https://www.recipetineats.com/wp-content/uploads/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg",
          sub: "Pack Size",
          delivery: "Delivery By: Tue Feb 08 2022",
          add: false,
        },
        {
          name: "rice",
          id: 2,
          qty: 0,
          price: "50",
          img: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322775_2200-800x1200.jpg",
          sub: "Pack Size",
          delivery: "Delivery By: Tue Feb 08 2022",
          add: false,
        },
        {
          name: "millets",
          id: 3,
          qty: 0,
          price: "100",
          img: "https://5.imimg.com/data5/VS/OP/CA/SELLER-3698782/foxtail-millet-500x500.jpg",
          sub: "Pack Size",
          delivery: "Delivery By: Tue Feb 08 2022",
          add: false,
        },
        {
          name: "wheat",
          id: 4,
          qty: 0,
          price: "30",
          img: "https://m.economictimes.com/thumb/msid-87478409,width-1200,height-900,resizemode-4,imgsize-290124/istock-528475944.jpg",
          sub: "Pack Size",
          delivery: "Delivery By: Tue Feb 08 2022",
          add: false,
        },
        {
          name: "dal",
          id: 5,
          qty: 0,
          price: "150",
          img: "https://5.imimg.com/data5/RS/NN/MY-52034904/arhar-dal-500x500.jpg",
          sub: "Pack Size",
          delivery: "Delivery By: Tue Feb 08 2022",
          add: false,
        },
      ],
    };
  },
  methods: {
    async test(value) {
      value.add = true;
      value.qty += 1;
      this.cartproducts.push(value);
      console.log("this.cartproducts", this.cartproducts);
      await this.submit();
    },

    async increase(product) {
      if (product.qty < 5) {
        for (let i = 0; i < this.cartproducts.length; i++) {
          console.log("this.cartproductsforloop", this.cartproducts[i].id);
          if (product.id == this.cartproducts[i].id) {
            this.cartproducts[i].qty += 1;
          }
          //  else {
          //   product.qty += 1;
          // }
        }
      } else {
        alert("Max quantity reached");
      }
      console.log("this.cartproducts", this.cartproducts);
      await this.submit();
    },
    async decrease(product) {
      if (product.qty > 0) {
        product.qty -= 1;
      }
      if (product.qty < 1) {
        product.add = false;
      }
      console.log("this.cartproductsminus", this.cartproducts);
      await this.submit();
    },
    submit() {
      this.$refs.form.submit();
    },
  },
};
</script>

 

    