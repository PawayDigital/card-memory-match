<template>
  <div>
    <b-container>
      <div
        class="d-flex align-items-center justify-content-center"
        style="height: 100vh;"
      >
        <b-row>
          <b-col cols="5" class="offset-1 mb-2"
            ><router-link :to="this.ruta3x2" class="btn btn-dark px-4">
              <div>
                <img :src="this.image" width="50" height="50" />
              </div>
              <div class="mt-2">3x2</div></router-link
            ></b-col
          >
          <b-col cols="5"
            ><router-link :to="this.ruta4x3" class="btn btn-dark px-4">
              <div>
                <img :src="this.image" width="50" height="50" />
              </div>
              <div class="mt-2">4x3</div>
            </router-link></b-col
          >
          <b-col cols="5" class="offset-1 mb-2"
            ><router-link :to="this.ruta5x4" class="btn btn-dark px-4">
              <div>
                <img :src="this.image" width="50" height="50" />
              </div>
              <div class="mt-2">5x4</div>
            </router-link></b-col
          >
          <b-col cols="5"
            ><router-link :to="this.ruta6x5" class="btn btn-dark px-4">
              <div>
                <img :src="this.image" width="50" height="50" />
              </div>
              <div class="mt-2">6x5</div>
            </router-link></b-col
          >
          <b-col cols="5" class="offset-1 mb-2"
            ><router-link :to="this.ruta8x7" class="btn btn-dark px-4">
              <div>
                <img :src="this.image" width="50" height="50" />
              </div>
              <div class="mt-2">8x7</div>
            </router-link></b-col
          >
          <b-col cols="5"
            ><router-link :to="this.ruta9x8" class="btn btn-dark px-4">
              <div>
                <img :src="this.image" width="50" height="50" />
              </div>
              <div class="mt-2">9x8</div>
            </router-link></b-col
          >
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    ruta3x2: String,
    ruta4x3: String,
    ruta5x4: String,
    ruta6x5: String,
    ruta8x7: String,
    ruta9x8: String,
    image: String,
  },
};
</script>
