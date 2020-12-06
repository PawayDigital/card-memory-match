<template>
  <div id="home">
    <b-container>
      <div
        class="d-flex align-items-center justify-content-center"
        style="height: 100vh;"
      >
        <router-link to="/categorias" class="btn btn-dark btn-block"
          >JUGAR</router-link
        >
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
