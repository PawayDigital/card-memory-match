<template>
  <div id="fondo">
    <GridGame
      :image="
        'https://res.cloudinary.com/dlgvxohur/image/upload/v1606774895/aeafwz0qllcn00vxk0ao.png'
      "
      :ruta3x2="'/peliculas/3x2'"
      :ruta4x3="'/peliculas/4x3'"
      :ruta5x4="'/peliculas/5x4'"
      :ruta6x5="'/peliculas/6x5'"
      :ruta8x7="'/peliculas/8x7'"
      :ruta9x8="'/peliculas/9x8'"
    />
  </div>
</template>

<script>
import GridGame from "@/components/GridGame";
export default {
  components: {
    GridGame,
  },
};
</script>
