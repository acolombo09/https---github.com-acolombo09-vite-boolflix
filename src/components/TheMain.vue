<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
// importo solo la variabile store, per questo l'ho messo fuori dal default
import { store, performSearch } from "../store";
// searchText lo inserisco direttamente nello store.js

export default {
  components: {
    AppCard,
  },
  data() {
    return {
      store,
      foundedFilms: []
    };
  },
  methods: {
    performSearch,
    fetchFilms(){
      const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

      axios.get(url).then((response) => {
        // una volta recuperati i dati dal server, li salvo nel data
        this.foundedFilms = response.data.results;
      });
    },
  },
  mounted() {
    this.fetchFilms();
  }
};
</script>

<template>
  <main class="bg-dark py-3">
    <div class="container-fluid">
      <div class="row searchbar">
        <div class="col mx-auto">
          <ul class="nav nav-pills d-flex justify-content-between align-items-center">
            <li class="nav-item">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Ricerca" v-model="store.searchText"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                @click="performSearch">
                  Cerca
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row row-cols-6 mx-auto">
        <div class="col d-flex justify-content-center">
          <AppCard></AppCard>
        </div>
      </div>
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
    min-height: 90px;
  }
}

</style>