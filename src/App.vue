<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from "./components/TheMain.vue";


export default {
  components: {
    TheHeader,
    TheMain,
  },
  data() {
    return {
      
    }
  }
}

</script>

<template>
  
  <div class="container-fluid">
    <TheHeader></TheHeader>
    <TheMain></TheMain>
  </div>

</template>

<style lang="scss">

</style>
