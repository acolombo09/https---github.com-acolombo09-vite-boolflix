<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
// importo solo la variabile store, per questo l'ho messo fuori dal default
import { store } from "../store";

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
};
</script>

<template>
  <main>
    <div class="container-fluid">
      <!-- Sezione ricerca films -->
      <div class="row searchbar">
        <div class="col mx-2 pt-2">
          <ul class="nav nav-pills d-flex justify-content-between align-items-center">
            <li class="nav-item">
              <h4 class="text-white my-0">BOOLFLIX ORIGINALS</h4>
            </li>
          </ul>
        </div>
      </div>
      <div class="row row-cols-6">
        <!-- :mediaData="media" è la prop -->
        <AppCard v-for="media in store.searchResults" :key="media.id" :mediaData="media"></AppCard>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;

main{
  min-height: 100vh;
  background-color: #1b1b1b;
  .searchbar{
    min-height: 60px;
  }
}

</style>