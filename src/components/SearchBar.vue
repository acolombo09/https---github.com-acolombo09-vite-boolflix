<script>
// importo solo la variabile store, per questo l'ho messo fuori dal default
import { store, performSearch } from "../store";

// searchText lo inserisco direttamente nello store.js
export default {
  data() {
    return {
      store,
    };
  },
  methods:{
    performSearch
  }
};
</script>

<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Ricerca" v-model="store.searchText"/>
    <button class="btn btn-outline-secondary" type="button" id="button-addon2"
    @click="performSearch">
      Cerca
    </button>
  </div>
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;


</style>