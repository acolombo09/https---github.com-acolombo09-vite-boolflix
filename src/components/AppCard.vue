<script>
import LangFlag from 'vue-lang-code-flags';
import StarRating from 'vue-star-rating';

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
      rating: null,
      resetableRating: 2,
      currentRating: "No Rating",
      mouseOverRating: null
    };
  },
  methods: {
    // creazione funzione trova poster e gestione della card senza poster
    getImageUrl() {
      if(!this.mediaData.poster_path) {
        return "/placeholder-movie.png";
      }
        return "https://image.tmdb.org/t/p/w342" + this.mediaData.poster_path;
    },
    showCurrentRating(rating) {
      this.currentSelectedRating =
        rating === 0
          ? this.currentSelectedRating
          : "Click to select " + rating + " stars";
    },
    setCurrentSelectedRating(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },
  },
  computed: {
    currentRatingText() {
      return this.rating
        ? "You have selected " + this.rating + " stars"
        : "No rating selected";
    },
    mouseOverRatingText() {
      return this.mouseOverRating
        ? "Click to select " + this.mouseOverRating + " stars"
        : "No Rating";
    }
  },
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
  <div class="col-3 d-flex justify-content-center align-items-center my-3" style="max-height: 450px;">
    <div class="card border-dark rounded-0 bg-transparent h-100" style="max-width: 300px; max-height: 450px;">
      <!-- dopo aggiungi " -->
      <img :src="getImageUrl()" style="max-height: 342px; aspect-ratio: auto;" class="card-img-top rounded-0 poster-img">
      <div class="card-body px-0">
        <h5 class="text-white">{{ mediaData.title || mediaData.name }}</h5>
        <h6 class="text-white">Titolo Originale: {{ mediaData.original_title || mediaData.original_name }}</h6>
        <h6 class="text-white">Lingua Originale: <lang-flag :iso="mediaData.original_language"/></h6>
        <!-- <h6 class="text-white">Lingua Originale: {{ mediaData.original_language }}</h6> -->
        <h6 class="text-white"> 
          Voto: <star-rating :rating="mediaData.vote_average" :read-only="true" :increment="0.01" :star-size="18" class="d-inline-block ms-1"></star-rating>
          <!-- Voto: {{ Math.ceil(mediaData.vote_average / 2) + "/5" }} -->
          <!-- <i class="fa-solid fa-star text-warning"></i> -->
        </h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;


</style>