<template>
  <div id="fondo">
    <GridGame
      :image="
        'https://res.cloudinary.com/dlgvxohur/image/upload/v1606774889/sck0lko5kumiyrvpmkdk.png'
      "
      :ruta3x2="'/logos/3x2'"
      :ruta4x3="'/logos/4x3'"
      :ruta5x4="'/logos/5x4'"
      :ruta6x5="'/logos/6x5'"
      :ruta8x7="'/logos/8x7'"
      :ruta9x8="'/logos/9x8'"
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
