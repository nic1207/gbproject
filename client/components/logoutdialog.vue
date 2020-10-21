<template>
  <v-card min-height="160">
    <v-card-title class="headline">
      Are you sure want to logout ?
    </v-card-title>
    <v-card-actions>
      <v-spacer />
      <v-btn color="green darken-1" text @click="close">
        No
      </v-btn>
      <v-btn color="red darken-1" text @click="logout">
        Yes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    close () {
      console.log('logout()')
      this.$emit('close')
    },
    logout () {
      console.log('logout()')
      this.$emit('logout')
    }
  }
}
</script>
