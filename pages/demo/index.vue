<template>
  <div>
    <div style="margin-top: 500px;"></div>
    <h5>123123123</h5>
  </div>
</template>

<script>
export default {

  asyncData(){
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({})
      },5000)
    })
  },
  //   mounted () {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start()
  //     setTimeout(() => this.$nuxt.$loading.finish(), 2000)
  //   })
  // }

};
</script>

<style>

</style>