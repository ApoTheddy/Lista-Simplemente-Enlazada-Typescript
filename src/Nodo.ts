import * as Types from "./Other/Types";

export default class Nodo {
  public siguiente: Types.NodoType;
  public dato: Types.DatoType;

  constructor(dato: Required<Types.DatoType>, nodo?: Types.NodoType) {
    this.dato = dato;
    if (nodo != null) this.siguiente = nodo;
    else this.siguiente = null;
  }
}
