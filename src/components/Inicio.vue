<template>
  <span>
    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')"
      ><font-awesome-icon icon="home"
    /></b-button>

    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title>
        <h5 class="fuente">
          Quieres volver a las categorias?
        </h5>
      </template>
      <div class="d-block text-center">
        <b-button
          class="mt-3 mr-2 d btn-danger"
          @click="$bvModal.hide('bv-modal-example')"
          >Salir</b-button
        >
        <router-link to="/categorias" class="mt-3 btn btn-info ">
          Si
        </router-link>
      </div>
    </b-modal>
  </span>
</template>

<style>
.fuente {
  font-size: 15px !important;
}
</style>
