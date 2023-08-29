<script>
// import resultsList from "../store";

export default {
  props: {
// creare la prop per ricevere i film trovati e stamparli in html nella card
  movieData: Object
  },
  data() {
    return {
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
        <h5 class="text-white">{{movieData.title}}</h5>
        <h6 class="text-white">Titolo Originale: {{movieData.original_title}}</h6>
        <h6 class="text-white">Lingua Originale: {{movieData.original_language}}</h6>
        <h6 class="text-white">Voti: {{movieData.vote_count}}</h6>
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