import Nodo from "./Nodo";
import * as Types from "./Other/Types";

export default class Lista {
  private inicio: Types.NodoType;
  private fin: Types.NodoType;
  private readonly log = process.stdout;
  private numNodos: number = 0;

  constructor() {
    this.inicio = null;
    this.fin = null;
  }

  // ------------------- METODOS DE INSERCION DE ELEMENTOS ------------------- //
  // Metodo para insertar un nodo al inicio de la lista
  public agregarAlInicio(elemento: Types.DatoType): void {
    ++this.numNodos;
    this.inicio = new Nodo(elemento, this.inicio);
    if (this.fin == null) this.fin = this.inicio;
  }

  public agregarAlFinal(elemento: Types.DatoType): void {
    ++this.numNodos;
    if (!this.estaVacia && this.fin != null) {
      this.fin.siguiente = new Nodo(elemento);
      this.fin = this.fin.siguiente;
    } else this.agregarAlInicio(elemento);
  }

  // ------------------- METODOS DE ELIMINACION DE ELEMENTOS ------------------- //
  // Metodo para eliminar un nodo al inicio de la lista
  public eliminarAlIncio(): boolean {
    --this.numNodos;
    if (!this.estaVacia && this.inicio != null) {
      this.inicio = this.inicio.siguiente;
      return true;
    } else this.inicio = this.fin = null;

    return false;
  }

  // Metodo para eliminar un nodo al final de la lista
  public eliminarAlFinal(): boolean {
    --this.numNodos;
    if (!this.estaVacia && this.inicio != null) {
      let recorrer: Types.NodoType = this.inicio;

      while (recorrer?.siguiente != this.fin) recorrer = recorrer!.siguiente;

      if (recorrer != null) {
        this.fin = recorrer;
        this.fin.siguiente = null;
        return true;
      }
    } else this.inicio = this.fin = null;
    return false;
  }

  // Metodo para buscar un nodo en especifico
  public buscarElemento(elemento: Types.DatoType): {
    position: number;
    isFound: boolean;
  } {
    if (!this.estaVacia) {
      let recorrer: Types.NodoType = this.inicio;
      let iterator: number = 0;
      while (recorrer != null && recorrer.dato != elemento) {
        recorrer = recorrer.siguiente;
        ++iterator;
      }

      if (recorrer != null) return { position: iterator, isFound: true };
    } else this.inicio = this.fin = null;

    return { position: -1, isFound: false };
  }

  // Metodo para eliminar un nodo con su posicion en especifico
  public eliminarNodo(posicion: number): {
    elementoEliminado: Types.DatoType;
    exist: boolean;
  } {
    if (posicion > this.numNodos)
      return { elementoEliminado: -1, exist: false };
    else {
      let elementoEliminado: Types.DatoType;

      if (posicion == 0) {
        elementoEliminado = this.inicio!.dato;
        this.inicio = this.inicio!.siguiente;
        return { elementoEliminado, exist: true };
      } else {
        if (!this.estaVacia && this.inicio != null) {
          let anterior: Types.NodoType = this.inicio;
          let temporal: Types.NodoType = this.inicio!.siguiente;
          let iterator: number = 1;

          while (iterator < posicion) {
            anterior = anterior!.siguiente;
            temporal = temporal!.siguiente;
            ++iterator;
          }

          if (temporal != null) {
            elementoEliminado = anterior!.siguiente!.dato;
            anterior!.siguiente = temporal!.siguiente;
            if (temporal == this.fin) this.fin = anterior;
            --this.numNodos;
            return { elementoEliminado, exist: true };
          }
        } else this.inicio = this.fin = null;
      }
    }

    return { elementoEliminado: -1, exist: false };
  }

  public get dameElNumeroDeNodos(): number {
    return this.numNodos;
  }

  // Metodo para verificar si mi lista se encuentra vacia
  public get estaVacia(): boolean {
    return this.inicio == null;
  }

  // Metodo para mostrar los elementos de mi lista
  public mostrarLista(): void {
    if (!this.estaVacia) {
      let recorrer: Types.NodoType = this.inicio;
      while (recorrer != null) {
        this.log.write(`[${recorrer.dato}]->`);
        recorrer = recorrer.siguiente;
      }
      this.log.write("\0");
    } else this.inicio = this.fin = null;
  }
}
