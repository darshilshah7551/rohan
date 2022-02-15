<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add a new project
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="[(i) => i.length > 3 || 'Invalid Entry']"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil"
            ></v-textarea>

            <v-btn
              plain
              class="blue lighten-3 mx-0 mt-3"
              @click="submit"
              :loading="loading"
              >Add project</v-btn
            >
          </v-form>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
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
