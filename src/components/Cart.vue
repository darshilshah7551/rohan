<template>
  <div>
    {{ cart }}
    <v-btn @click="test()"> Res</v-btn>
  </div>
</template>
<script>
export default {
  props: {
    products: [Array],
  },

  data() {
    return {
      cart: [],
    };
  },
  mounted() {
    // console.log("product", this.cart);
  },
  methods: {
    submit() {
      this.cart.push(this.products);
    },
    test() {
      console.log("this.cart", this.cart[0]);
    },
  },
};
</script>