<script>

export default {
  props: {
  // creare la prop per ricevere i film trovati e stamparli in html nella card
    mediaData: Object,
  },
  methods: {
    // creazione funzione trova poster e gestione della card senza poster
    getImageUrl() {
      if(!this.mediaData.poster_path) {
        return "/placeholder-movie.png";
      }
        return "https://image.tmdb.org/t/p/w342" + this.mediaData.poster_path;
    }
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
  <div class="col-3 d-flex justify-content-center">
    <div class="card border-0 rounded-0 bg-transparent h-100" style="max-width: 300px;">
      <!-- dopo aggiungi " -->
      <img :src="getImageUrl()" style="max-height: 342px; aspect-ratio: auto;" class="card-img-top rounded-0 poster-img">
      <div class="card-body px-0 text-center">
        <h5 class="text-white">{{ mediaData.title || mediaData.name }}</h5>
        <h6 class="text-white">Titolo Originale: {{ mediaData.original_title || mediaData.original_name }}</h6>
        <h6 class="text-white">Lingua Originale: {{ mediaData.original_language }}</h6>
        <h6 class="text-white">
          Voto: {{ Math.ceil(mediaData.vote_average / 2) + "/5" }}
          <i class="fa-solid fa-star text-warning"></i>
        </h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;


</style>