<template>
  <section class="col-12 col-sm-4 px-3">
    <v-card color="h-full bg-info flex flex-column p-2">
      <div class="border border-primary"></div>
      <v-form class="flex my-3 ml-0 mr-2">
        <v-text-field class="ml-0 mr-2" color="primary" outlined hide-details>
        </v-text-field>
        <v-btn class="my-auto" color="bg-primary" dark small fab>
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-form>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'GameChat',
};
</script>
