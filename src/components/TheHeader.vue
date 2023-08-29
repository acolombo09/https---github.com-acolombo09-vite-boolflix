<script>
import { store, performSearch } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  methods:{
    
  },
};

</script>

<template>
  <header class="bg-black py-3">
    <div class="container-fluid">
      <div class="row searchbar">
        <div class="col mx-auto">
          <ul class="nav nav-pills d-flex justify-content-between align-items-center">
            <li class="nav-item">
              <h3 class="text-danger">BOOLFLIX</h3>
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