<script>
import SearchBar from "./SearchBar.vue";

export default {
  components: { SearchBar } 

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
              <SearchBar></SearchBar>
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