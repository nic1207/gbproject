<template>
  <div class="table  ">
    <div style="width:48%; height:100%;" class="d-flex align-content-start flex-wrap flex-column">
      <HoverPreviewResult v-for="n in 12" :key="n">
        <template v-slot:item="slotProps">
          <v-img
            src="/icon/圓庄.png"
            max-height="1.6vw"
            max-width="1.6vw"
            v-bind="slotProps.activate.attrs"
            v-on="slotProps.activate.on"
          />
        </template>
      </HoverPreviewResult>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.table{
    height:100%;
    width:50%;
    background-image: url('/icon/黑格底板.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
}
</style>
