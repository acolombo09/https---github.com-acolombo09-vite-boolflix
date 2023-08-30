<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
// importo solo la variabile store, per questo l'ho messo fuori dal default
import { store, searchMedia } from "../store";

export default {
  props: {
    mediaData: Object,
  },
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searchMedia,
  },
  mounted() {
    this.searchMedia();
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
              <h4 class="text-white">MOVIES & TV SERIES</h4>
            </li>
            <li class="nav-item">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search here..." v-model="store.searchQuery"/>
                <button class="btn btn-outline-light" type="button" id="button-addon2"
                @click="searchMedia">Search</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row row-cols-4 mx-auto py-3">
        <!-- :mediaData="media" è la prop -->
        <AppCard v-for="media in store.searchResults" :key="media.id" :mediaData="media"></AppCard>
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
    min-height: 75px;
  }
}

</style>