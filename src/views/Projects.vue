 <template>
  <div class="projects">
    <v-subheader class="black--text">Delivery Chalan Details</v-subheader>

    <div>
      <v-tabs
        flat
        color="orange lighten--3"
        v-model="tab"
        background="transparent"
      >
        <!-- 
          upcoming and delivered -->

        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <!-- Upcomming -->
        <v-tab-item>
          <v-card flat>
            <!-- <v-card-text>{{ item.content }}</v-card-text> -->

            <v-expansion-panels>
              <v-expansion-panel
                v-for="project in projects"
                :key="project.title"
              >
                <v-expansion-panel-header>
                  {{ project.title }}
                </v-expansion-panel-header>

                <v-expansion-panel-content class="px-4 grey--text">
                  <div>
                    <v-tabs
                      flat
                      color="orange lighten--3"
                      v-model="tab1"
                      background="transparent"
                    >
                      <v-tab v-for="item1 in items1" :key="item1.tab1"
                        >{{ item1.tab1 }}
                      </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab1">
                      <v-tab-item>
                        <v-card v-for="product in products" :key="product.name">
                          <v-row>
                            <v-col cols="6">
                              <v-img
                                width="100%"
                                height="auto"
                                :src="product.img"
                              ></v-img>
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
                      </v-tab-item>
                      <v-tab-item>
                        <v-card v-for="order in orders" :key="order.name">
                          <v-row>
                            <v-col>
                              <!-- <v-card depressed> -->

                              <div>Name:{{ order.name }}</div>
                              <div>Order Date: {{ order.orderdate }}</div>
                              <div>Order ID: {{ order.orderid }}</div>

                              <!-- </v-card> -->
                            </v-col>
                          </v-row>
                        </v-card></v-tab-item
                      >
                    </v-tabs-items>
                  </div>
                  <!-- <div class="font-weight-bold">due by {{ project.due }}</div>
                  <div>{{ project.content }}</div> -->
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-tab-item>
        <!-- Delivered -->
        <v-tab-item>
          <v-card flat>
            <!-- <v-card-text>{{ item.content }}</v-card-text> -->

            <v-expansion-panels>
              <v-expansion-panel v-for="project in DClist" :key="project.title">
                <v-expansion-panel-header>
                  {{ project.title }}
                  <br />
                  <br />
                  Delivery Date: Tue Jan 25 2022
                </v-expansion-panel-header>

                <v-expansion-panel-content class="px-4 grey--text">
                  <v-tabs
                    flat
                    color="orange lighten--3"
                    v-model="tab2"
                    background="transparent"
                  >
                    <v-tab> product </v-tab>

                    <v-tab> order </v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="tab2">
                    <!-- For Products -->
                    <v-tab-item>
                      <v-card v-for="product in products" :key="product.name">
                        <v-row>
                          <v-col cols="6">
                            <v-img
                              width="100%"
                              height="auto"
                              :src="product.img"
                            ></v-img>
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
                    </v-tab-item>
                    <!-- For Ordersss -->
                    <v-tab-item>
                      <v-card v-for="order in orders" :key="order.name">
                        <v-row>
                          <v-col>
                            <!-- <v-card depressed> -->

                            <div>Name:{{ order.name }}</div>
                            <div>Order Date: {{ order.orderdate }}</div>
                            <div>Order ID: {{ order.orderid }}</div>

                            <Popup1 />

                            <!-- </v-card> -->
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import Popup1 from "@/components/Popup1.vue";
export default {
  components: { Popup1 },
  data() {
    return {
      tab: 0,
      tab2: 0,
      items: [
        { tab: "UPCOMING", content: " " },
        { tab: "DELIVERED", content: " " },
      ],

      tab1: 0,
      items1: [
        { tab1: "PRODUCT", content: " " },
        { tab1: "ORDER", content: "  " },
      ],

      products: [
        {
          name: "Spiced Beans",
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
      orders: [
        {
          name: "xyz",
          orderdate: "Mon Jan 10 2022",
          orderid: "AAB067456",
        },
        {
          name: "usa",
          orderdate: "Mon Jan 10 2022",
          orderid: "AAB067456",
        },
        {
          name: "ocs",
          orderdate: "Mon Jan 10 2022",
          orderid: "AAB067456",
        },
        {
          name: "dgs",
          orderdate: "Mon Jan 10 2022",
          orderid: "AAB067456",
        },
        {
          name: "jhd",
          orderdate: "Mon Jan 10 2022",
          orderid: "AAB067456",
        },
      ],
      DClist: [
        {
          title: "DC Number: -232 ",
          person: "Rohan Dhanani",
          due: "1st Jan 2019",
          status: "ongoing",
          content: "",
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content: "",
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content: "",
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content: "",
        },
      ],

      projects: [
        {
          title: "DC Number: 3452d-232",
          person: "Rohan Dhanani",
          due: "1st Jan 2019",
          status: "ongoing",
          content: "",
        },
        {
          title: "DC Number: 345332d-232",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content: "",
        },
        {
          title: "DC Number: 45332d-232",
          person: "Ryu",
          due: " ",
          status: "complete",
          content: "",
        },
        {
          title: "DC Number: 345332d-32",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content: "",
        },
      ],
    };
  },
};
// computed: {
//   myProjects();
//   {
//     return this.projects.filter((project) => {
//       return project.person === "Rohan Dhanani" && project.status != "complete";
//     });
//   }
// }
</script>
