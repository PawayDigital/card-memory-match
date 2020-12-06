<template>
  <div id="fondo">
    <b-container>
      <div
        class="d-flex align-items-center justify-content-center"
        style="height: 100vh;"
      >
        <b-row>
          <b-col cols="6">
            <div
              class="btn btn-dark px-4"
              type="submit"
              v-on:click="cat = 'animales'"
              @click="siguiente()"
            >
              <div>
                <img :src="imagen" width="50" height="50" />
              </div>
              <div class="mt-2">Animales</div>
            </div>
          </b-col>
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

<script>
export default {
  name: "Categorias",
  data() {
    return {
      cat: "",
      imagen:
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607011791/zznzloayi5x42qze3vrt.jpg",
    };
  },
  mounted() {
    localStorage.removeItem("categoria");
  },
  methods: {
    siguiente() {
      localStorage.setItem("categoria", this.cat);
      this.$router.push("/Cuadriculas");
    },
  },
};
</script>
