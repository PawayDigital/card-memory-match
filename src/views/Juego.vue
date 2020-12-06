<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1 class="text-context">JUEGO</h1>
        <p>
          <span class="h5">Intentos: </span>{{ intentos }}
          <span class="h5">Aciertos: </span>{{ aciertos }}
          <span class="h5">Tiempo: </span><span id="minutos"></span>:<span
            id="segundos"
          ></span>
        </p>
      </div>
    </div>
    <div v-for="(fila, indiceFila) in memorama" :key="indiceFila" class="row">
      <div
        :key="indiceFila + '' + indiceImagen"
        class="col-1 ml-3"
        v-for="(imagen, indiceImagen) in fila"
      >
        <div class="mb-3 prueba">
          <img
            @click="voltear(indiceFila, indiceImagen)"
            :class="{ girar: imagen.mostrar }"
            :src="imagen.mostrar ? imagen.ruta : NOMBRE_IMAGEN_OCULTA"
            class="target-image"
            width="50"
            height="60"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "Juego",
  data() {
    return {
      categoria: "",
      imagenes: [],
      animales: [],
      frutas: [],
      vehiculos: [],
      animales: [],
      COLUMNAS: 0,
      alto: 0,
      ciclo: 0,
      intentos: 0,
      aciertos: 0,
      memorama: [],
      NOMBRE_IMAGEN_OCULTA:
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1606774889/sck0lko5kumiyrvpmkdk.png",
      SEGUNDOS_ESPERA_VOLTEAR_IMAGEN: 1,
      ultimasCoordenadas: {
        indiceFila: null,
        indiceImagen: null,
      },
      intentos: 0,
      aciertos: 0,
      esperandoTimeout: false,
      probar: [],
      hola: [],
    };
  },
  mounted() {
    if (
      localStorage.getItem("alto") === null &&
      localStorage.getItem("ancho") === null
    ) {
      this.$router.push("/Cuadriculas");
    } else {
      (this.categoria = localStorage.getItem("categoria")),
        (this.COLUMNAS = parseInt(localStorage.getItem("ancho")));
      this.alto = parseInt(localStorage.getItem("alto"));
      this.ciclo = this.alto * this.COLUMNAS;
      this.animales = [
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214734/peliculas/plrkvoiaaxzlicnz1r1z.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214734/peliculas/gqngmlthbfamsux3vjrk.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214734/peliculas/gwz5tbfbrnzziunz2aw9.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214734/peliculas/xnenfwn1cxjci5sqimsg.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214734/peliculas/xepwctx4obarenelbanr.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214734/peliculas/df9ayl1bmqdtu6c6s0if.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/duxvzlbuznc4evoo8ntm.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/jfzsltacyhz4amrpxmcu.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/uzaqv1hfurv2tpf8ktbs.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/zhnt399cemaiy6hwayw5.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/ktaemdfmimg7hhddiebt.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214734/peliculas/bkqmouilouoz0wpj4ysp.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/njz0el3ztbvp8hnitgxh.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/jdm7kyap8xfeexd5bhne.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/abfhqxzphx89dr2gx5tw.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/oy6x2hc774sifgvdcw0z.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/vsfan1reymnxlar0gn0t.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/rn4dxqofelujt9velkfc.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/j0a24fph9zeo9abujmza.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/stlp8janntkdxbzg2sgk.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/wlok6uzuuo9bxdvomzdl.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/zvnmk5u08jd8pa9fpv2x.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/mspovfmiz3luwphztts2.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/bgeo5zye9qwsrzqs78ro.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214733/peliculas/ytcvbtds1kbq95op5smj.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/g3khhhgnzch7hvilhcbi.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/hs2ss4wllyzs5nt6zdwu.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/uvwzcpujqishad3fduyi.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/rkluijlxtnkl88qmmm7u.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214732/peliculas/tierhwqsdy2jbkqg8nnd.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214731/peliculas/gcgzr66036dwrfi8pxyl.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214731/peliculas/ymr7iulwp8u3r6txpvfi.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214731/peliculas/fncku0ou2itbb0f60ddr.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214731/peliculas/vmyuwh5fii4lnapkd7zv.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214731/peliculas/tljgdh7i7ion8ophboce.jpg",
        "https://res.cloudinary.com/dlgvxohur/image/upload/v1607214731/peliculas/bs3magw8chzqzhspchpf.jpg",
      ];
      switch (this.categoria) {
        case "animales":
          this.imagenes = this.animales;
          break;
        case "frutas":
          this.imagenes = this.frutas;
          break;
        case "vehiculos":
          this.imagenes = this.vehiculos;
          break;
        case "musica":
          this.imagenes = this.musica;
          break;
      }
      this.reiniciarJuego();
    }
  },
  methods: {
    reiniciarJuego() {
      let memorama = [];
      let probar = [];
      this.imagenes.forEach((imagen, indice) => {
        let imagenDeMemorama = {
          ruta: imagen,
          mostrar: false, // No se muestra la original
          acertada: false, // No es acertada al inicio
        };
        // Poner dos veces la misma imagen
        probar.push(imagenDeMemorama, Object.assign({}, imagenDeMemorama));
      });

      //solo tomar la cantidad requerida
      for (let i = 0; i < this.ciclo; i++) {
        memorama[i] = probar[i];
      }
      // Sacudir o mover arreglo; es decir, hacerlo aleatorio
      this.mezclarArreglo(memorama);

      // Dividirlo en subarreglos o columnas
      let memoramaDividido = [];
      for (let i = 0; i < this.ciclo; i += this.COLUMNAS) {
        memoramaDividido.push(memorama.slice(i, i + this.COLUMNAS));
      }
      // Reiniciar intentos
      this.intentos = 0;
      this.aciertos = 0;
      // Asignar a instancia de Vue para que lo dibuje
      this.memorama = memoramaDividido;
    },
    // Se desencadena cuando se hace click en la imagen
    voltear(indiceFila, indiceImagen) {
      // Si se está regresando una imagen a su estado original, detener flujo
      if (this.esperandoTimeout) {
        return;
      }
      // Si es una imagen acertada, no nos importa que la intenten voltear
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
      // Se basta en ultimaImagenSeleccionada
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
          this.indicarVictoria();
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
        }, this.SEGUNDOS_ESPERA_VOLTEAR_IMAGEN * 1000);
        this.aumentarIntento();
      }
    },
    // Aumenta un intento y verifica si el jugador ha perdido
    aumentarIntento() {
      this.intentos++;
    },
    // Método que indica si el jugador ha ganado
    haGanado() {
      return this.memorama.every((arreglo) =>
        arreglo.every((imagen) => imagen.acertada)
      );
    },
    // Mostrar alerta de victoria y reiniciar juego
    indicarVictoria() {
      swal({
        // icon: "/img/ganaste.67b32a67.png",
        text: "Intentos: " + this.intentos,
        buttons: {
          reiniciar: {
            text: "Reiniciar",
          },
          home: {
            text: "Salir",
          },
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((value) => {
        switch (value) {
          case "reiniciar":
            this.reiniciarJuego();
            break;
          case "home":
            this.$router.push("/Categorias");
            break;
        }
      });
    },
    mezclarArreglo(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    },
  },
};
</script>

<style></style>
