import Lista from "./Lista";

class App {
  static main(): void {
    let lista = new Lista();

    lista.agregarAlInicio(1);
    lista.agregarAlInicio(7);
    lista.agregarAlInicio(4);
    lista.agregarAlFinal(9);
    lista.agregarAlFinal(6);
    // console.log(lista.eliminarAlIncio());
    // console.log(lista.eliminarAlFinal());
    // console.log(lista.buscarElemento(5));
    lista.mostrarLista();
    // console.log(lista.eliminarNodo());
    console.log(lista.eliminarNodo(4));
    console.log("\0");
    lista.mostrarLista();
  }
}

App.main();
