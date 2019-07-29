import {MarqueMoto} from './marque-moto';

export class Moto {

  id: number;
  name: string;
  marque: MarqueMoto;
  annee: number;
  cout: number;
  nbKm: number;


  constructor(id?: number, name?: string, marque?: MarqueMoto, annee?: number, cout?: number, nbKm?: number) {
    this.id = id;
    this.name = name;
    this.marque = marque;
    this.annee = annee;
    this.cout = cout;
    this.nbKm = nbKm;
  }
}
