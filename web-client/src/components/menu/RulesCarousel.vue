<template>
  <v-carousel
    cycle
    height="300"
    hide-delimiter-background
    show-arrows-on-hover
    interval="8000"
  >
    <v-carousel-item
      v-for="slide in slides"
      :key="slide.title"
    >
      <v-sheet
        :color="slide.color"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div
            class="px-6"
            :style="{ 'color': slide.color === 'accent' ? 'black !important' : '', }"
          >
            <h2 class="text-4xl text-center">{{ slide.title }}</h2>
            <p class="text-2xl">{{ slide.content }}</p>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RulesCarousel',
  data() {
    return {
      slides: [
        {
          title: 'Play with your friends',
          color: 'primary',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tempor ex. '
            + 'Sed a augue dolor. Proin arcu arcu, placerat sit amet tempus a, fringilla at quam.'
            + ' Curabitur tincidunt felis at dui hendrerit bibendum. Orci varius natoque penatibus'
            + ' magnis dis parturient montes, nascetur ridiculus mus.',
        },
        {
          title: 'Play on every platforms',
          color: 'accent',
          content: 'Maecenas pulvinar cursus nisl, eget cursus neque porta cursus. Duis vulputate '
            + 'vitae arcu dignissim, at vulputate dolor gravida. Pellentesque consectetur ornare '
            + 'lectus quis tempus. In turpis urna, placerat sed erat ut, feugiat tempor mi',
        },
        {
          title: 'Create some questions via the desktop app',
          color: 'secondary',
          content: 'Nullam sodales ornare ipsum eu ultricies. Donec id elementum enim. Nulla '
            + 'in nibh non eleifend. Sed non pulvinar velit. In sit amet interdum urna, in molestie'
            + ' est. Proin ultricies sollicitudin ipsum, a cursus ipsum posuere eu',
        },
      ],
    };
  },
});
</script>
