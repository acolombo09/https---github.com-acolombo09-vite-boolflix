<script>
// import resultsList from "../store";

export default {
  props: {
    
  },
  data() {
    return {
      // resultsList
    };
  },
  methods:{

  }
};
</script>

<template>
    <div class="card border-0 rounded-0 bg-transparent">
      <img src="../assets/vue.svg" style="height: 50px;" class="card-img-top rounded-0" alt="">
      <div class="card-body px-0 text-center">
        <h5 class="text-white">TITOLO</h5>
        <h5 class="text-white">TITOLO ORIGINALE</h5>
        <h5 class="text-white">LINGUA</h5>
        <h5 class="text-white">VOTO</h5>
      </div>
    </div>
    <!-- v-for da inserire in themain.vue -->
  <!-- <div class="col" v-for="(result, i) in resultsList" v-bind:key="`result_${i}`">
    <div class="card border-0 rounded-0 bg-transparent">
      <img v-bind:src="result.poster_path" class="card-img-top rounded-0" alt="">
      <div class="card-body px-0">
        <h5 class="text-white">
          {{ result.title }}
        </h5>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;


</style>