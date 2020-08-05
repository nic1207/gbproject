<template>
  <v-container class="pa-0 ma-0" fluid>
    <div class="container">
      <div>
        <Logo />
        <div class="links">
          <v-btn
            color="#D69F51"
            to="/roomlist">
            {{ $t('welcome.play') }}
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: 'welcome'
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image:url('~static/img/mainbg.jpg');
}
</style>
