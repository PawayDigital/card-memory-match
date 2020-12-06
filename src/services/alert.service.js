import swal from "sweetalert";
import router from "@/router";
export default new (class AlertService {
  // Mostrar alerta de victoria y reiniciar juego
  indicarVictoria(intentos, reiniciarJuego) {
    swal({
      icon:
        "https://i.pinimg.com/474x/d6/ec/34/d6ec3410a8babd77a758bcd20b632470.jpg",
      text: "Intentos: " + intentos,
      buttons: {
        reiniciar: {
          text: "Reiniciar",
        },
        home: {
          text: "Salir",
        },
      },
      allowOutsideClick: false,
      closeOnEsc: false,
    }).then((value) => {
      switch (value) {
        case "reiniciar":
          reiniciarJuego;
          break;
        case "home":
          router.push("/categorias");
          break;
      }
    });
  }
})();
