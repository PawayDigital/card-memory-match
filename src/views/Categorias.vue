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
              v-on:click="categoria = 'logos'"
              @click="siguiente()"
            >
              <div>
                <img :src="logo" width="50" height="50" />
              </div>
              <div class="mt-2">Logos</div>
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
                <img :src="carro" width="50" height="50" />
              </div>
              <div class="mt-2">Carros</div>
            </div>
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
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607011791/zznzloayi5x42qze3vrt.jpg",
      carro:
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607262185/carros/md30npmk8gwvv1kmguhl.png",
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
