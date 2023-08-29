<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
// importo solo la variabile store, per questo l'ho messo fuori dal default
import { store } from "../store";
// searchText lo inserisco direttamente nello store.js

export default {
  props: {
    movieData: Object
  },
  components: {
    AppCard,
  },
  data() {
    return {
      store,
      searchQuery: "",
      searchResults: []
    };
  },
  methods: {
    searchMovies() {
      // esempio link chiamata
      // https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro
      const apiKey = "65ff2578e5da8719abf8bf6464f1c406";
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.searchQuery}`;
      axios.get(url)
      .then((response) => {
        // una volta recuperati i dati dal server, li salvo nel data
        this.searchResults = response.data.results;
        console.log(this.searchResults);
      })
        .catch(error => {
          console.error(error);
      });
    },
  },
  mounted() {
    this.searchMovies();
  }
};
</script>

<template>
  <main class="bg-dark">
    <div class="container-fluid">
      <!-- Sezione ricerca films -->
      <div class="row searchbar">
        <div class="col mx-auto py-3">
          <ul class="nav nav-pills d-flex justify-content-between align-items-center">
            <li class="nav-item">
              <h4 class="text-white">MOVIES</h4>
            </li>
            <li class="nav-item">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Cerca film..." v-model="searchQuery"/>
                <button class="btn btn-outline-light" type="button" id="button-addon2"
                @click="searchMovies">Cerca</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row row-cols-4 mx-auto py-3">
        
        <AppCard v-for="movie in searchResults" v-bind:key="movie.id" v-bind:movieData="movie"></AppCard>

      </div>
      <!-- Sezione ricerca serie TV -->
      <!-- <div class="row searchbar">
        <div class="col mx-auto py-3">
          <ul class="nav nav-pills d-flex justify-content-between align-items-center">
            <li class="nav-item">
              <h4 class="text-white">MOVIES</h4>
            </li>
            <li class="nav-item">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Ricerca" v-model="store.searchText"/>
                <button class="btn btn-outline-light" type="button" id="button-addon2"
                @click="performSearch">
                  Cerca
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row row-cols-6 mx-auto py-3">
        <div class="col d-flex justify-content-center">
          <AppCard></AppCard>
        </div>
      </div> -->
    </div>
  </main>
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;

main{
  min-height: 390px;
  // background-color: $color-secondary;

  // img {
  //   aspect-ratio: 1/1;
  // }
  .searchbar{
    min-height: 75px;
  }
}

</style>