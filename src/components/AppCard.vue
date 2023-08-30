<script>
import { store } from "../store";

export default {
  props: {
  // creare la prop per ricevere i film trovati e stamparli in html nella card
    mediaData: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="col-3 d-flex justify-content-center">
    <div class="card border-0 rounded-0 bg-transparent">
      <img src="../assets/vue.svg" style="height: 50px;" class="card-img-top rounded-0" alt="">
      <div class="card-body px-0 text-center">
        <h5 class="text-white">{{ mediaData.title || mediaData.name }}</h5>
        <h6 class="text-white">Titolo Originale: {{ mediaData.original_title || mediaData.original_name }}</h6>
        <h6 class="text-white">Lingua Originale: {{ mediaData.original_language }}</h6>
        <h6 class="text-white">Voti: {{ mediaData.vote_average }}</h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;


</style>