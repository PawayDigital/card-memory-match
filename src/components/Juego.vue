<template>
  <div id="juego">
    <div class="text-center pt-1 text-white">
      <p>
        <span class="h5 mr-4">
          <Inicio />
        </span>
        <span class="h5 mr-1">Intentos: {{ intentos }}</span>
        <span class="h5 mr-1">Aciertos: {{ aciertos }}</span
        ><br />
        <span class="h5">Tiempo: {{ tiempoHTML }} seg</span>
      </p>
    </div>
    <div
      v-for="(fila, indiceFila) in memorama"
      :key="indiceFila"
      class="row mx-1 "
    >
      <div
        :key="indiceFila + '' + indiceImagen"
        class="col px-0 mb-2  w-100"
        v-for="(imagen, indiceImagen) in fila"
      >
        <img
          @click="voltear(indiceFila, indiceImagen)"
          :class="{ girar: imagen.mostrar }"
          :src="imagen.mostrar ? imagen.ruta : imageOculta"
          class="pr-1 w-100"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Inicio from "@/components/Inicio.vue";
import AlertService from "@/services/alert.service";
import MezclarService from "@/services/mezclar.service";
import { carros } from "@/assets/images/carros";
import { logos } from "@/assets/images/logos";
export default {
  name: "Juego",
  components: {
    Inicio,
  },
  data() {
    return {
      categoria: "",
      imagenes: [],
      logos: [],
      carros: [],
      COLUMNAS: 0,
      alto: 0,
      ciclo: 0,
      intentos: 0,
      aciertos: 0,
      tiempo: 0,
      tiempoHTML: 0,
      temporizadorr: "",
      memorama: [],
      imageOculta:
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1606774889/sck0lko5kumiyrvpmkdk.png",
      voltearImage: 1,
      ultimasCoordenadas: {
        indiceFila: null,
        indiceImagen: null,
      },
      esperandoTimeout: false,
      cantImage: [],
    };
  },
  mounted() {
    if (
      localStorage.getItem("alto") === null &&
      localStorage.getItem("ancho") === null
    ) {
      this.$router.push("/Cuadriculas");
    } else {
      this.cargueJuego();
    }
  },
  methods: {
    cargueJuego() {
      (this.categoria = localStorage.getItem("categoria")),
        (this.COLUMNAS = parseInt(localStorage.getItem("ancho")));
      this.alto = parseInt(localStorage.getItem("alto"));
      this.ciclo = this.alto * this.COLUMNAS;
      // imagenes
      this.logos = logos;
      this.carros = carros;
      //-------------------
      switch (this.categoria) {
        case "logos":
          this.imagenes = this.logos;
          break;
        case "carros":
          this.imagenes = this.carros;
          break;
      }
      this.temporizador();
      this.reiniciarJuego();
    },
    temporizador() {
      this.temporizadorr = setInterval(() => {
        this.tiempo++;
        this.tiempoHTML = this.tiempo;
      }, 1000);
    },
    reiniciarJuego() {
      let memorama = [];
      let cantImage = [];
      this.imagenes.forEach((imagen, indice) => {
        let imagenDeMemorama = {
          ruta: imagen,
          mostrar: false, // No se muestra la original
          acertada: false, // No es acertada al inicio
        };
        // Poner dos veces la misma imagen
        cantImage.push(imagenDeMemorama, Object.assign({}, imagenDeMemorama));
      });

      //solo tomar la cantidad requerida
      for (let i = 0; i < this.ciclo; i++) {
        memorama[i] = cantImage[i];
      }
      // hacerlo aleatorio las cartas
      this.mezclarArreglo(memorama);

      // Dividirlo en columnas
      let memoramaDividido = [];
      for (let i = 0; i < this.ciclo; i += this.COLUMNAS) {
        memoramaDividido.push(memorama.slice(i, i + this.COLUMNAS));
      }
      // Reiniciar intentos
      this.intentos = 0;
      this.aciertos = 0;
      this.tiempoHTML = 0;
      // Asignar a instancia de Vue para que lo dibuje
      this.memorama = memoramaDividido;
    },
    // cuando se hace click en la imagen se activa el metodo
    voltear(indiceFila, indiceImagen) {
      // Si se está regresando una imagen a su estado original, detener flujo
      if (this.esperandoTimeout) {
        return;
      }
      // Si es una imagen acertada, no intenten voltear de nuevo la imagen
      if (this.memorama[indiceFila][indiceImagen].acertada) {
        return;
      }

      // Si es la primera vez que la selecciona
      if (
        this.ultimasCoordenadas.indiceFila === null &&
        this.ultimasCoordenadas.indiceImagen === null
      ) {
        this.memorama[indiceFila][indiceImagen].mostrar = true;
        this.ultimasCoordenadas.indiceFila = indiceFila;
        this.ultimasCoordenadas.indiceImagen = indiceImagen;
        return;
      }
      // Si se selecciona la misma imagen ya seleccionada
      if (
        this.ultimasCoordenadas.indiceFila === indiceFila &&
        this.ultimasCoordenadas.indiceImagen === indiceImagen
      ) {
        return;
      }
      // Si es el que estaba mostrada, lo ocultamos de nuevo
      let imagenSeleccionada = this.memorama[indiceFila][indiceImagen];
      let ultimaImagenSeleccionada = this.memorama[
        this.ultimasCoordenadas.indiceFila
      ][this.ultimasCoordenadas.indiceImagen];
      if (
        indiceFila === this.ultimasCoordenadas.indiceFila &&
        indiceImagen === this.ultimasCoordenadas.indiceImagen
      ) {
        this.memorama[indiceFila][indiceImagen].mostrar = false;
        this.ultimasCoordenadas.indiceFila = null;
        this.ultimasCoordenadas.indiceImagen = null;
        this.aumentarIntento();
        return;
      }
      // En caso de que la haya encontrado, ¡acierta!
      this.memorama[indiceFila][indiceImagen].mostrar = true;
      if (imagenSeleccionada.ruta === ultimaImagenSeleccionada.ruta) {
        this.aciertos++;
        this.memorama[indiceFila][indiceImagen].acertada = true;
        this.memorama[this.ultimasCoordenadas.indiceFila][
          this.ultimasCoordenadas.indiceImagen
        ].acertada = true;
        this.ultimasCoordenadas.indiceFila = null;
        this.ultimasCoordenadas.indiceImagen = null;
        // Cada que acierta comprobamos si ha ganado
        if (this.haGanado()) {
          clearInterval(this.temporizadorr);
          this.victoria();
        }
      } else {
        // Si no acierta, entonces giramos ambas imágenes
        this.esperandoTimeout = true;
        setTimeout(() => {
          this.memorama[indiceFila][indiceImagen].mostrar = false;
          this.memorama[indiceFila][indiceImagen].animacion = false;
          this.memorama[this.ultimasCoordenadas.indiceFila][
            this.ultimasCoordenadas.indiceImagen
          ].mostrar = false;
          this.ultimasCoordenadas.indiceFila = null;
          this.ultimasCoordenadas.indiceImagen = null;
          this.esperandoTimeout = false;
        }, this.voltearImage * 1000);
        this.aumentarIntento();
      }
    },
    aumentarIntento() {
      this.intentos++;
    },
    // Método que indica si el jugador ha ganado
    haGanado() {
      return this.memorama.every((arreglo) =>
        arreglo.every((imagen) => imagen.acertada)
      );
    },
    // muestra un mensaje de alerta dicendo que ha ganado
    victoria() {
      AlertService.indicarVictoria(
        this.intentos,
        this.aciertos,
        this.tiempoHTML,
        this.reiniciarJuego()
      );
    },
    mezclarArreglo(a) {
      MezclarService.mezclar(a);
    },
  },
};
</script>
