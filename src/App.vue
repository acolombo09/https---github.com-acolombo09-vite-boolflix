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
  
  <div class="container-fluid" style="background-color: #1b1b1b">
    <TheHeader></TheHeader>
    <TheMain></TheMain>
  </div>

</template>

<style lang="scss">

</style>
