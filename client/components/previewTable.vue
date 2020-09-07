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
    >
      <HoverPreviewResult v-if="n<chance">
        <template v-slot:item="slotProps">
          <v-avatar
            color="indigo"
            size="16"
            v-bind="slotProps.activate.attrs"
            v-on="slotProps.activate.on"
          >
            <span class="white--text" style="font-size:0.5vw">P</span>
          </v-avatar>
        </template>
      </HoverPreviewResult>
    </v-card>
  </v-card>
</template>
<script>
import HoverPreviewResult from '@/components/HoverPreviewResult'
export default {
  components: {
    HoverPreviewResult
  },
  props: ['row', 'column', 'tiles'],
  data () {
    return {

    }
  },

  computed: {
    chance () {
      return 4
    }
  },
  methods: {

  }
}
</script>
