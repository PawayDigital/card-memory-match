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
              class="btn btn-dark ml-4 px-4"
              type="submit"
              v-on:click="categoria = 'logos'"
              @click="siguiente()"
            >
              <div>
                <img :src="logo" width="100%" height="auto" />
              </div>
              <div class="mt-2"><h5>Logos</h5></div>
            </div>
          </b-col>
          <b-col cols="6">
            <div
              class="btn btn-dark px-4"
              type="submit"
              v-on:click="categoria = 'carros'"
              @click="siguiente()"
            >
              <div>
                <img :src="carro" width="100%" height="auto" />
              </div>
              <div class="mt-2"><h5>Carros</h5></div>
            </div>
          </b-col>
          <b-col
            cols="12"
            class="d-flex align-items-end justify-content-center"
            style="height: 15vh;"
          >
            <router-link to="/" class="btn btn-dark">
              <font-awesome-icon icon="home" /> Inicio
            </router-link>
          </b-col>
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
      categoria: "",
      logo:
        "https://image.freepik.com/vector-gratis/coleccion-logos-rock-diseno-plano_23-2147823675.jpg",
      carro:
        "https://image.freepik.com/psd-gratis/coche-plata-sedan_53876-84522.jpg",
    };
  },
  mounted() {
    localStorage.removeItem("categoria");
  },
  methods: {
    siguiente() {
      localStorage.setItem("categoria", this.categoria);
      this.$router.push("/Cuadriculas");
    },
  },
};
</script>
<style></style>
