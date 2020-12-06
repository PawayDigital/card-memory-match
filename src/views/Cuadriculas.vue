<template>
  <div id="fondo">
    <GridGame
      :image="
        'https://res.cloudinary.com/dlgvxohur/image/upload/v1606774889/sck0lko5kumiyrvpmkdk.png'
      "
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
