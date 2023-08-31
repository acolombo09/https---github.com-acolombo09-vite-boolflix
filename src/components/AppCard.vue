<script>
import LangFlag from 'vue-lang-code-flags';
import StarRating from 'vue-star-rating';

import { store, getImageUrl } from "../store";

export default {
  components: {
    LangFlag,
    StarRating
  },
  props: {
  // creare la prop per ricevere i film trovati e stamparli in html nella card
    mediaData: Object,
    iso: String,
    squared: Boolean,
    title: String,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    // creazione funzione trova poster e gestione della card senza poster
    getImageUrl,
  },
  mounted() {
    this.getImageUrl();
  }
};

/*
"poster_sizes": [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original"
],
*/

</script>

<template>
  <div class="col-2 d-flex justify-content-center align-items-center px-0 mb-5" style="max-height: 450px;">
    <div class="card border-dark rounded-0 bg-transparent h-100 card-with-hover" style="max-width: 300px; max-height: 450px;">
      <img :src="getImageUrl()" style="max-height: 342px; aspect-ratio: auto;" class="card-img-top rounded-0 poster-img">
      <div class="card-body px-0 card-hover-content">
        <h5 class="text-white fs-6">{{ mediaData.title || mediaData.name }}</h5>
        <h6 class="text-white fs-6">Original Title: {{ mediaData.original_title || mediaData.original_name }}</h6>
        <h6 class="text-white fs-6">Original Language: <lang-flag :iso="mediaData.original_language"/></h6>
        <!-- <h6 class="text-white">Lingua Originale: {{ mediaData.original_language }}</h6> -->
        <h6 class="text-white fs-6"> 
          Vote: <star-rating :rating="(mediaData.vote_average / 2)" 
          :read-only="true" :increment="0.5" :star-size="18" :max-rating="5" class="d-inline-block ms-1"></star-rating>
          <!-- Prova a fare a mano con icone fontawesome stella piena e vuota per fare in modo che con un v-for
            ci siano N stelline piene dove N è il voto. Il resto sarà stellina vuota fino ad un massimo di 5-->
          <!-- Voto: {{ Math.ceil(mediaData.vote_average / 2) + "/5" }} -->
          <!-- <i class="fa-solid fa-star text-warning"></i> -->
        </h6>
        <h6 class="text-white fs-6">Overview:</h6>
        <p class="card-text text-white">{{ mediaData.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;

.card-with-hover {
  position: relative;
  overflow: hidden;
}

.card-hover-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.card-with-hover:hover .card-hover-content {
  opacity: 1;
}

</style>