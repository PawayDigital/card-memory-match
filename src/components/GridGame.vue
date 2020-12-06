<template>
  <div id="fondo">
    <b-container>
      <div
        class="d-flex align-items-center justify-content-center"
        style="height: 100vh;"
      >
        <b-row>
          <b-col cols="5" class="offset-1 mb-2"
            ><div
              class="btn btn-dark px-4"
              v-on:click="(ancho = 2), (alto = 3)"
              @click="siguiente()"
            >
              <div>
                <img :src="this.image" width="100%" height="auto" />
              </div>
              <div class="mt-2">3x2</div>
            </div></b-col
          >
          <b-col cols="5"
            ><div
              class="btn btn-dark px-4"
              v-on:click="(ancho = 3), (alto = 4)"
              @click="siguiente()"
            >
              <div>
                <img :src="this.image" width="100%" height="auto" />
              </div>
              <div class="mt-2">4x3</div>
            </div></b-col
          >

          <b-col cols="5" class="offset-1 mb-2"
            ><div
              class="btn btn-dark px-4"
              v-on:click="(ancho = 4), (alto = 5)"
              @click="siguiente()"
            >
              <div>
                <img :src="this.image" width="100%" height="auto" />
              </div>
              <div class="mt-2">5x4</div>
            </div></b-col
          >
          <b-col cols="5"
            ><div
              class="btn btn-dark px-4"
              v-on:click="(ancho = 5), (alto = 6)"
              @click="siguiente()"
            >
              <div>
                <img :src="this.image" width="100%" height="auto" />
              </div>
              <div class="mt-2">6x5</div>
            </div></b-col
          >
          <b-col cols="5" class="offset-1 mb-2"
            ><div
              class="btn btn-dark px-4"
              v-on:click="(ancho = 7), (alto = 8)"
              @click="siguiente()"
            >
              <div>
                <img :src="this.image" width="100%" height="auto" />
              </div>
              <div class="mt-2">8x7</div>
            </div></b-col
          >
          <b-col cols="5"
            ><div
              class="btn btn-dark px-4"
              v-on:click="(ancho = 8), (alto = 9)"
              @click="siguiente()"
            >
              <div>
                <img :src="this.image" width="100%" height="auto" />
              </div>
              <div class="mt-2">9x8</div>
            </div></b-col
          >
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "GridGame",
  data() {
    return {
      ancho: 0,
      alto: 0,
    };
  },
  mounted() {
    localStorage.removeItem("alto");
    localStorage.removeItem("ancho");
    if (localStorage.getItem("categoria") === null) {
      this.$router.push("/Categorias");
    }
  },
  methods: {
    siguiente() {
      localStorage.setItem("alto", this.alto);
      localStorage.setItem("ancho", this.ancho);
      this.$router.push("/Juego");
    },
  },
  props: {
    image: String,
  },
};
</script>
