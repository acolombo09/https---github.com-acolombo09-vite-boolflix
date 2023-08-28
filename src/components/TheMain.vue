<script>
import axios from "axios";
import AppCard from "./AppCard.vue";

export default {
  components: {
    AppCard,
  },
  data() {
    return {
      foundedFilms: []
    };
  },
  methods: {
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
      <div class="row row-cols-6 mx-auto">
        <AppCard></AppCard>
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
}

</style>