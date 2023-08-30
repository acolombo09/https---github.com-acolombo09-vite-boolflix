<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
  <!-- <header class="bg-black py-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col mx-auto">
          <ul class="nav nav-pills d-flex justify-content-between align-items-center">
            <li class="nav-item">
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header> -->

  <header class="bg-black py-3">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none me-5">
          <h3 class="text-danger">BOOLFLIX</h3>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-light">Home</a></li>
          <li><a href="#" class="nav-link px-2 link-light">TV Series</a></li>
          <li><a href="#" class="nav-link px-2 link-light">Movies</a></li>
          <li><a href="#" class="nav-link px-2 link-light">Originals</a></li>
          <li><a href="#" class="nav-link px-2 link-light">Recently added</a></li>
          <li><a href="#" class="nav-link px-2 link-light">My list</a></li>
        </ul>
        
        <ul class="nav col-12 col-lg-auto ms-auto mb-3 mb-lg-0 me-lg-3">
          <li><a href="#" class="nav-link px-2 link-light"><i class="fa-solid fa-bell text-white"></i></a></li>
        </ul>
        
        <!-- <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form> -->

        <div class="dropdown text-end">
          <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle text-light" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" style="background-color: #263133de;">
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