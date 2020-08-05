<template>
  <v-card
    class="d-flex flex-wrap"
    color="grey lighten-2"
    flat
    tile
    width="100%"
    height="100%"
  >
    <v-card
      v-for="n in row*column"
      :key="n"
      outlined
      tile
      :width="`${100/column}%`"
      :height="`${100/row}%`"
    />
  </v-card>
</template>
<script>

export default {
  props: ['row', 'column', 'tiles'],
  data () {
    return {

    }
  },

  computed: {

  },
  methods: {

  }
}
</script>
