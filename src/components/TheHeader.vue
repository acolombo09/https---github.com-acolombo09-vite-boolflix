<script>
import axios from "axios";
import { store, searchMedia } from "../store";

export default {
  props: {
    mediaData: Object,
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
  },
};

</script>

<template>
  <header class="py-3">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none me-5">
          <h3 class="text-success fw-bold">BOOLFLIX</h3>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-light">Home</a></li>
          <li><a href="#" class="nav-link px-2 link-light">TV Series</a></li>
          <li><a href="#" class="nav-link px-2 link-light">Movies</a></li>
          <li><a href="#" class="nav-link px-2 link-light">Originals</a></li>
          <li><a href="#" class="nav-link px-2 link-light">Recently added</a></li>
          <li><a href="#" class="nav-link px-2 link-light">My list</a></li>
        </ul>
        
        <div class="col-12 col-lg-auto ms-lg-auto mb-3 mb-lg-0">
          <div class="d-flex align-items-center">
            <div class="input-group input-group-sm me-2">
              <input type="text" class="form-control" placeholder="Search here..." v-model="store.searchQuery"/>
              <button class="btn btn-outline-light" type="button" id="button-addon2"
              @click="searchMedia">Search</button>
            </div>
            <ul class="nav align-items-center me-2">
              <li><a href="#" class="nav-link px-2 link-light"><i class="fa-solid fa-bell text-white fs-5"></i></a></li>
            </ul>
          </div>
        </div>

        <div class="dropdown text-end d-flex justify-content-center align-items-center">
          <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle text-light" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="../assets/vue.svg" alt="mdo" width="33" height="33" class="">
          </a>
          <ul class="dropdown-menu text-small dropdown-menu-dark" aria-labelledby="dropdownMenuDark">
            <li><a class="dropdown-item text-light" href="#">Settings</a></li>
            <li><a class="dropdown-item text-light" href="#">Profile</a></li>
            <li><hr class="dropdown-divider border-light"></li>
            <li><a class="dropdown-item text-light" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>

</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;

header{
  min-height: 75px;
  // background-color: $color-secondary;

}

</style>