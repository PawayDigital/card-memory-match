<template>
  <div id="fondo">
    <b-container>
      <div
        class="d-flex align-items-center justify-content-center"
        style="height: 100vh;"
      >
        <b-row>
          <b-col cols="6"
            ><router-link to="/game/logos" class="btn btn-dark px-4">
              <div>
                <img src="@/assets/logos/1.jpg" width="50" height="50" />
              </div>
              <div class="mt-2">Logos</div></router-link
            ></b-col
          >
          <b-col cols="6"
            ><router-link to="/game/peliculas" class="btn btn-dark px-4">
              <div>
                <img src="@/assets/peliculas/5.jpg" width="50" height="50" />
              </div>
              <div class="mt-2">Peliculas</div>
            </router-link></b-col
          >
        </b-row>
      </div>
    </b-container>
  </div>
</template>
