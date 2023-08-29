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
  },
};

</script>

<template>
  <header class="bg-black py-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col mx-auto">
          <ul class="nav nav-pills d-flex justify-content-between align-items-center">
            <li class="nav-item">
              <h3 class="text-danger">BOOLFLIX</h3>
            </li>
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
    </div>
  </header>
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;

header{
  min-height: 90px;
  // background-color: $color-secondary;

  // img {
  //   aspect-ratio: 1/1;
  // }
}

</style>